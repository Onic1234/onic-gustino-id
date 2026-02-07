import axios from "axios";
import { LEETCODE_ACCOUNT } from "@/common/constants/leetcode";
import { unstable_cache } from "next/cache";

const LEETCODE_GRAPHQL_URL = "https://leetcode.com/graphql";

const LEETCODE_QUERY = `
  query getUserProfile($username: String!) {
    matchedUser(username: $username) {
      username
      submitStats {
        acSubmissionNum {
          difficulty
          count
        }
        totalSubmissionNum {
          difficulty
          count
        }
      }
    }
  }
`;

const fetchLeetcodeData = async (username: string) => {
  try {
    console.log("🚀 Fetching LeetCode data for:", username);
    console.log("🔗 Testing LeetCode API endpoint...");

    const response = await axios.post(
      LEETCODE_GRAPHQL_URL,
      {
        query: LEETCODE_QUERY,
        variables: { username },
      },
      {
        headers: {
          "Content-Type": "application/json",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
          Referer: "https://leetcode.com/",
        },
      },
    );

    console.log("📦 GraphQL Response:", JSON.stringify(response.data, null, 2));

    // Check if there are errors in the response
    if (response.data?.errors && response.data.errors.length > 0) {
      console.error("❌ GraphQL Errors:", response.data.errors);
      console.error(
        "⚠️  Username may not exist on LeetCode. Please verify at: https://leetcode.com/" +
          username,
      );
      return null;
    }

    const data = response.data?.data?.matchedUser;

    if (!data) {
      console.error("❌ No matchedUser in response");
      return null;
    }

    const solvedStats = data.submitStats?.acSubmissionNum || [];
    const totalStats = data.submitStats?.totalSubmissionNum || [];

    const easy = solvedStats.find((s: any) => s.difficulty === "Easy");
    const medium = solvedStats.find((s: any) => s.difficulty === "Medium");
    const hard = solvedStats.find((s: any) => s.difficulty === "Hard");

    const easyTotal = totalStats.find((s: any) => s.difficulty === "Easy");
    const mediumTotal = totalStats.find((s: any) => s.difficulty === "Medium");
    const hardTotal = totalStats.find((s: any) => s.difficulty === "Hard");

    const result = {
      username: data.username,
      easy: {
        solved: easy?.count || 0,
        total: easyTotal?.count || 0,
      },
      medium: {
        solved: medium?.count || 0,
        total: mediumTotal?.count || 0,
      },
      hard: {
        solved: hard?.count || 0,
        total: hardTotal?.count || 0,
      },
    };

    console.log("✅ Parsed LeetCode result:", result);
    return result;
  } catch (error) {
    console.error("❌ LeetCode API Error:", error);
    return null;
  }
};

const getCachedLeetcodeData = unstable_cache(
  async (username: string) => fetchLeetcodeData(username),
  ["leetcode-stats-cache-key"],
  {
    revalidate: 3600,
    tags: ["leetcode-stats-tag"],
  },
);

export const getLeetcodeData = async () => {
  const { username } = LEETCODE_ACCOUNT;

  console.log("🔍 LeetCode Debug - Username:", username);

  if (!username) {
    console.error("❌ No username provided");
    return { status: 500, data: null };
  }

  // Bypass cache untuk debug
  const data = await fetchLeetcodeData(username);

  console.log("🔍 LeetCode Debug - Data:", data);

  if (!data) {
    console.error("❌ API returned no data");
    return { status: 502, data: null };
  }

  return { status: 200, data };
};
