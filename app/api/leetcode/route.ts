import { NextResponse } from "next/server";

import { getLeetcodeData } from "@/services/leetcode";

export const dynamic = "force-dynamic";

export const GET = async () => {
  try {
    const response = await getLeetcodeData();
    return NextResponse.json(response.data, { status: response.status });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
};
