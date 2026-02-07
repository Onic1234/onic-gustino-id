"use client";

import Link from "next/link";
import useSWR from "swr";
import { SiLeetcode as LeetcodeIcon } from "react-icons/si";
import { useTranslations } from "next-intl";

import LeetcodeSkeleton from "./LeetcodeSkeleton";
import Overview from "./Overview";

import SectionHeading from "@/common/components/elements/SectionHeading";
import SectionSubHeading from "@/common/components/elements/SectionSubHeading";
import EmptyState from "@/common/components/elements/EmptyState";
import { fetcher } from "@/services/fetcher";
import { LEETCODE_ACCOUNT } from "@/common/constants/leetcode";

interface LeetcodeProps {
  endpoint: string;
}

const Leetcode = ({ endpoint }: LeetcodeProps) => {
  const { data, isLoading, error } = useSWR(endpoint, fetcher);
  const { leetcode_url, is_active } = LEETCODE_ACCOUNT;

  const t = useTranslations("DashboardPage");

  if (!is_active) return null;

  return (
    <section className="space-y-2">
      <SectionHeading
        title={t("leetcode.title")}
        icon={<LeetcodeIcon className="h-5 w-5" />}
      />
      <SectionSubHeading>
        <p>{t("leetcode.sub_title")}</p>
        <Link
          href={leetcode_url}
          target="_blank"
          className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-500 dark:hover:text-neutral-400"
        >
          LeetCode
        </Link>
      </SectionSubHeading>

      {error ? (
        <EmptyState message={t("error")} />
      ) : isLoading ? (
        <LeetcodeSkeleton />
      ) : (
        <Overview data={data} />
      )}
    </section>
  );
};

export default Leetcode;
