import { WAKATIME_ACCOUNT } from "@/common/constants/wakatime";

export async function GET() {
  try {
    const apiKey = WAKATIME_ACCOUNT.api_key;

    const response = await fetch(
      "https://wakatime.com/api/v1/users/current/stats/last_7_days",
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      },
    );

    if (!response.ok) {
      return Response.json(
        { error: "Failed to fetch Wakatime data" },
        { status: 500 },
      );
    }

    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    console.error("Wakatime API Error:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
