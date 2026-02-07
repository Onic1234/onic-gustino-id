import { GITHUB_ACCOUNTS } from "@/common/constants/github";
import { NextResponse } from "next/server";

const GITHUB_GRAPHQL_URL = "https://api.github.com/graphql";

const CONTRIBUTIONS_QUERY = `
  query($userName:String!) {
    user(login: $userName) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          colors
          weeks {
            contributionDays {
              contributionCount
              date
              color
            }
          }
        }
      }
    }
  }
`;

export async function GET() {
  try {
    const username = GITHUB_ACCOUNTS.username;
    const token = GITHUB_ACCOUNTS.token;

    if (!token) {
      return NextResponse.json(
        { error: "GitHub token not configured" },
        { status: 500 },
      );
    }

    const response = await fetch(GITHUB_GRAPHQL_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: CONTRIBUTIONS_QUERY,
        variables: { userName: username },
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch GitHub data" },
        { status: 500 },
      );
    }

    const data = await response.json();

    if (data.errors) {
      console.error("GitHub GraphQL Error:", data.errors);
      return NextResponse.json(
        { error: "Failed to fetch GitHub contributions" },
        { status: 500 },
      );
    }

    return NextResponse.json({
      contributionsCollection: data.data?.user?.contributionsCollection,
    });
  } catch (error) {
    console.error("GitHub API Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
