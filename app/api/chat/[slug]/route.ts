import { NextResponse } from "next/server";

export const DELETE = async (
  req: Request,
  { params }: { params: { slug: string } },
) => {
  try {
    const id = params.slug;
    return NextResponse.json("Data saved successfully", { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
};
