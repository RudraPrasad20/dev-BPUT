// import { db } from "@/lib/db";
// import { NextResponse } from "next/server";

// export async function GET() {
//   try {
//     const students = await db.roland.findMany();
//     return NextResponse.json(students);
//   } catch (error) {
//     console.error("Error fetching students:", error); // Add more logging here
//     return NextResponse.json(
//       { message: "Something went wrong" },
//       { status: 500 }
//     );
//   }
// }




import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const semIdParam = searchParams.get("semId");
  const semesterId = parseInt(semIdParam ?? '');

  if (isNaN(semesterId)) {
    return NextResponse.json(
      { message: "Invalid semester ID" },
      { status: 400 }
    );
  }

  try {
    const students = await db.roland.findMany({
      where: {
        semester: semesterId,
      },
    });
    return NextResponse.json(students);
  } catch (error) {
    console.error("Error fetching students:", error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
