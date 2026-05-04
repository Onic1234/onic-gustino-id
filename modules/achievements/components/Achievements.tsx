"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { AchievementItem } from "@/common/types/achievements";

import AchievementCard from "./AchievementCard";

const STATIC_ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 2,
    name: "Silver Award – MTE: AYIA 25th Malaysia Technology Expo™",
    issuing_organization: "Malaysia Technology Expo (MTE) 2026",
    type: "competition",
    category: "healthcare",
    issue_date: "2026-01-01",
    image: "/images/achievements/certificates/MTE_26.jpg",
    credential_id: "No.2026/MTE-AYIA/YOUTH/SILVER",
    is_show: true,
  },
  {
    id: 1,
    name: "Silver Medal – Indonesia International Applied Science Project Olympiad 2025",
    issuing_organization: "IYSA – Indonesian Young Scientist Association",
    type: "competition",
    category: "iot",
    issue_date: "2025-12-21",
    image: "/images/achievements/certificates/i2aspo_1.jpg",
    credential_id: "No.2022/IYSA-FMIPA UGM/PASPO/AWARD/XII/2025",
    is_show: true,
  },
];

const Achievements = () => {
  const t = useTranslations("AchievementsPage");
  const params = useSearchParams();

  const type = params.get("type");
  const category = params.get("category");
  const search = params.get("search");

  const filteredAchievements = STATIC_ACHIEVEMENTS.filter((item) => {
    const matchesType = !type || item.type === type;
    const matchesCategory = !category || item.category === category;
    const matchesSearch =
      !search ||
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.issuing_organization.toLowerCase().includes(search.toLowerCase());
    return item.is_show && matchesType && matchesCategory && matchesSearch;
  }).sort((a, b) => b.id - a.id);

  return (
    <section className="space-y-6">
      {filteredAchievements.length === 0 ? (
        <p className="text-center text-sm text-neutral-500 dark:text-neutral-400">
          {t("no_data")}
        </p>
      ) : (
        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {filteredAchievements.map((item) => (
            <motion.div
              key={item.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
            >
              <AchievementCard {...item} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </section>
  );
};

export default Achievements;
