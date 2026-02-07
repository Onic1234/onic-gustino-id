import { LEETCODE_ACCOUNT } from "@/common/constants/leetcode";

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

export async function GET() {
  try {
    const username = LEETCODE_ACCOUNT.username;

    if (!username) {
      return Response.json(
        { error: "LeetCode username not configured" },
        { status: 500 },
      );
    }

    const response = await fetch(LEETCODE_GRAPHQL_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      },
      body: JSON.stringify({
        query: LEETCODE_QUERY,
        variables: { username },
      }),
    });

    if (!response.ok) {
      return Response.json(
        { error: "Failed to fetch LeetCode data" },
        { status: 500 },
      );
    }

    const data = await response.json();

    if (data.errors) {
      return Response.json({ error: "User not found" }, { status: 404 });
    }

    const user = data.data?.matchedUser;

    if (!user) {
      return Response.json({ error: "User not found" }, { status: 404 });
    }

    const solvedStats = user.submitStats?.acSubmissionNum || [];
    const totalStats = user.submitStats?.totalSubmissionNum || [];

    const easy = solvedStats.find((s: any) => s.difficulty === "Easy");
    const medium = solvedStats.find((s: any) => s.difficulty === "Medium");
    const hard = solvedStats.find((s: any) => s.difficulty === "Hard");

    const easyTotal = totalStats.find((s: any) => s.difficulty === "Easy");
    const mediumTotal = totalStats.find((s: any) => s.difficulty === "Medium");
    const hardTotal = totalStats.find((s: any) => s.difficulty === "Hard");

    return Response.json({
      username: user.username,
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
    });
  } catch (error) {
    console.error("LeetCode API Error:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
