export const DOMAIN =
  process.env.DOMAIN ||
  (process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://onic-gustino-id.vercel.app");

export const METADATA = {
  creator: "Onic Agustino",
  description: "Personal website, portfolio, blog",
  keyword: "onic, onic agustino",
  authors: {
    name: "Onic Agustino",
    url: DOMAIN,
  },
  openGraph: {
    url: DOMAIN,
    siteName: "Onic Agustino",
    locale: "id-ID",
  },
  exTitle: "| Onic Agustino",
  profile: "/images/profile.jpg",
};
