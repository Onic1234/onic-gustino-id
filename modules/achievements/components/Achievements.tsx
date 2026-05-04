"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { AchievementItem } from "@/common/types/achievements";

import AchievementCard from "./AchievementCard";

const STATIC_ACHIEVEMENTS: AchievementItem[] = [
  // ── LOMBA (Nasional / Internasional) ──────────────────────────────────
  {
    id: 6,
    name: "Sertifikat Apresiasi – Lomba Karya Tulis Ilmiah Nasional (LKTIN) 2026",
    issuing_organization: "IYSA – Indonesian Young Scientist Association",
    type: "lomba",
    category: "science",
    issue_date: "2026-03-13",
    image: "/images/achievements/certificates/lktin_26.JPG",
    credential_id: "No.241/IYSA/LKTIN/AWARD/III/2026",
    is_show: true,
  },
  {
    id: 5,
    name: "Silver Award – MTE: AYIA 25th Malaysia Technology Expo™",
    issuing_organization: "Malaysia Technology Expo (MTE) 2026",
    type: "lomba",
    category: "healthcare",
    issue_date: "2026-01-01",
    image: "/images/achievements/certificates/MTE_26.jpg",
    credential_id: "No.2026/MTE-AYIA/YOUTH/SILVER",
    is_show: true,
  },
  {
    id: 4,
    name: "Silver Medal – Indonesia International Applied Science Project Olympiad 2025",
    issuing_organization: "IYSA – Indonesian Young Scientist Association",
    type: "lomba",
    category: "iot",
    issue_date: "2025-12-21",
    image: "/images/achievements/certificates/i2aspo_1.jpg",
    credential_id: "No.2022/IYSA-FMIPA UGM/PASPO/AWARD/XII/2025",
    is_show: true,
  },

  // ── KAMPUS (Tingkat Universitas / Fakultas) ───────────────────────────
  {
    id: 3,
    name: "Sertifikat – Mentoring Al-Islam dan Kemuhammadiyahan",
    issuing_organization: "LPPIK – Universitas Muhammadiyah Surakarta",
    type: "kampus",
    category: "keagamaan",
    issue_date: "2024-07-25",
    image: "/images/achievements/certificates/mentoring.png",
    credential_id: "247/A.4-IV/LPPIK/VIII/2024",
    is_show: true,
  },
  {
    id: 2,
    name: "Sertifikat – Master of Fakultaria (FAKUL-MOF) FKI 2024",
    issuing_organization: "Fakultas Komunikasi dan Informatika – UMS",
    type: "kampus",
    category: "akademik",
    issue_date: "2024-08-30",
    image: "/images/achievements/certificates/fakul-mof.png",
    credential_id: "70/PAN-FAKULTARIA/FKI-UMS/VIII/2024",
    is_show: true,
  },
  {
    id: 1,
    name: "Sertifikat – Peserta Seminar Nasional & Workshop LinkedIn FEB UMS 2023",
    issuing_organization: "HEMa Manajemen – Fakultas Ekonomi dan Bisnis UMS",
    type: "kampus",
    category: "akademik",
    issue_date: "2023-10-27",
    image: "/images/achievements/certificates/seminar-feb.png",
    credential_id: "410/D-4/PAN.SEMNAS/HEMa-MNJ/FEB-UMS/X/23",
    is_show: true,
  },
  {
    id: 0,
    name: "Sertifikat – Peserta Expo UKM FKI 2023",
    issuing_organization: "BEM FKI – Universitas Muhammadiyah Surakarta",
    type: "kampus",
    category: "akademik",
    issue_date: "2023-09-10",
    image: "/images/achievements/certificates/expo_ukm_23.png",
    credential_id: "051/PAN-EXPO-ORMAWA/BEM-FKI-UMS/IX/2023",
    is_show: true,
  },
  {
    id: -1,
    name: "Sertifikat – Peserta MASTA PMB 2023",
    issuing_organization: "Universitas Muhammadiyah Surakarta",
    type: "kampus",
    category: "akademik",
    issue_date: "2024-02-01",
    image: "/images/achievements/certificates/masta-pmb.png",
    credential_id: "RXBXX4WQZAAEX",
    is_show: true,
  },
];

type FilterTab = "semua" | "lomba" | "kampus";

const TABS: { key: FilterTab; label: string }[] = [
  { key: "semua", label: "🏅 Semua" },
  { key: "lomba", label: "🏆 Lomba" },
  { key: "kampus", label: "🎓 Kampus" },
];

const Achievements = () => {
  const t = useTranslations("AchievementsPage");
  const [activeTab, setActiveTab] = useState<FilterTab>("semua");

  const filteredAchievements = STATIC_ACHIEVEMENTS.filter((item) => {
    if (!item.is_show) return false;
    if (activeTab === "semua") return true;
    return item.type === activeTab;
  }).sort((a, b) => b.id - a.id);

  return (
    <section className="space-y-6">
      {/* Filter Tabs */}
      <div className="flex gap-2 rounded-xl border border-neutral-200 bg-neutral-100 p-1.5 dark:border-neutral-700 dark:bg-neutral-800/60 w-fit">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`relative rounded-lg px-4 py-1.5 text-sm font-medium transition-colors duration-200 ${
              activeTab === tab.key
                ? "text-neutral-900 dark:text-white"
                : "text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200"
            }`}
          >
            {activeTab === tab.key && (
              <motion.span
                layoutId="active-tab"
                className="absolute inset-0 rounded-lg bg-white shadow dark:bg-neutral-700"
                transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Badge count */}
      <p className="text-xs text-neutral-400 dark:text-neutral-500">
        Menampilkan{" "}
        <span className="font-semibold text-neutral-600 dark:text-neutral-300">
          {filteredAchievements.length}
        </span>{" "}
        sertifikat
      </p>

      {/* Grid */}
      <AnimatePresence mode="wait">
        {filteredAchievements.length === 0 ? (
          <motion.p
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center text-sm text-neutral-500 dark:text-neutral-400"
          >
            {t("no_data")}
          </motion.p>
        ) : (
          <motion.div
            key={activeTab}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } },
            }}
          >
            {filteredAchievements.map((item) => (
              <motion.div
                key={item.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
                }}
              >
                <AchievementCard {...item} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Achievements;
