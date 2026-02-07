import { GITHUB_ACCOUNTS } from "@/common/constants/github";

export async function GET() {
  try {
    const username = GITHUB_ACCOUNTS.username;
    const token = GITHUB_ACCOUNTS.token;

    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `token ${token}`,
        Accept: "application/vnd.github.v3+json",
      },
    });

    if (!response.ok) {
      return Response.json(
        { error: "Failed to fetch GitHub data" },
        { status: 500 },
      );
    }

    const data = await response.json();

    return Response.json({
      username: data.login,
      name: data.name,
      bio: data.bio,
      followers: data.followers,
      following: data.following,
      public_repos: data.public_repos,
      avatar_url: data.avatar_url,
      html_url: data.html_url,
    });
  } catch (error) {
    console.error("GitHub API Error:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
