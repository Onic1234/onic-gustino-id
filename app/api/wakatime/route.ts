import { WAKATIME_ACCOUNT } from "@/common/constants/wakatime";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const apiKey = WAKATIME_ACCOUNT.api_key;

    if (!apiKey) {
      return NextResponse.json(
        { error: "Wakatime API key not configured" },
        { status: 500 },
      );
    }

    const response = await fetch(
      "https://wakatime.com/api/v1/users/current/stats/last_7_days",
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
        cache: "no-store",
      },
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch Wakatime data" },
        { status: 500 },
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Wakatime API Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
