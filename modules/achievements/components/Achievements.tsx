"use client";

import useSWR from "swr";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { AchievementItem } from "@/common/types/achievements";
import { fetcher } from "@/services/fetcher";

import EmptyState from "@/common/components/elements/EmptyState";
import AchievementCard from "./AchievementCard";
import AchievementSkeleton from "./AchievementSkeleton";
import FilterHeader from "./FilterHeader";

const Achievements = () => {
  const t = useTranslations("AchievementsPage");

  const params = useSearchParams();

  const type = params.get("type");
  const category = params.get("category");
  const search = params.get("search");

  const { data: categoriesData } = useSWR(
    "/api/achievements/categories",
    fetcher,
  );
  const { data: typesData } = useSWR("/api/achievements/types", fetcher);

  const queryParams = new URLSearchParams();
  if (category) queryParams.append("category", category);
  if (type) queryParams.append("type", type);
  if (search) queryParams.append("search", search);

  const apiUrl = `/api/achievements${queryParams.toString() ? `?${queryParams.toString()}` : ""}`;

  const { data, isLoading, error } = useSWR(apiUrl, fetcher);
  
  const filteredAchievements: AchievementItem[] = data
    ?.filter((item: AchievementItem) => {
      const matchesShow = item?.is_show;

      const matchesCategory = !category || item?.category === category;

      const matchesType = !type || item?.type === type;

      return matchesShow && matchesType && matchesCategory;
    })
    .sort((a: AchievementItem, b: AchievementItem) => b.id - a.id);

  return (
    <section className="space-y-4">
      <EmptyState message={t("no_data")} />
      <p className="text-center text-sm text-neutral-600 dark:text-neutral-400">
        Achievements feature has been disabled. This feature requires server-side API integration.
      </p>
    </section>
  );
};

export default Achievements;
