import { CODEWARS_ACCOUNT } from "@/common/constants/codewars";

export async function GET() {
  try {
    const userId = CODEWARS_ACCOUNT.user_id;

    const response = await fetch(
      `https://www.codewars.com/api/v1/users/${userId}`,
    );

    if (!response.ok) {
      return Response.json(
        { error: "Failed to fetch CodeWars data" },
        { status: 500 },
      );
    }

    const data = await response.json();

    return Response.json({
      username: data.username,
      honor: data.honor,
      kyu: data.kyu,
      dan: data.dan,
      leaderboardPosition: data.leaderboardPosition,
      skills: data.skills,
      codeChallenges: data.codeChallenges,
    });
  } catch (error) {
    console.error("CodeWars API Error:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
