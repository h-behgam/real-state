import Profile from "@/app/models/profile";
import connectDB from "@/app/utils/conectDB";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    //get categort from request
    const category = req.nextUrl.searchParams.get("category")
    
    // conect to DB
    await connectDB();

    const profiles = await Profile.find(category? {category} : {}).select("-userId");

    // cjeck profile exist
    if (!profiles) {
      return NextResponse.json({ error: "پروفایلی یافت نشد!!!" }, { status: 404 });
    }

    return NextResponse.json(  profiles );
  } catch (error) {
    console.log("error", error);
    return NextResponse.json({ error: "مشکلی در سرور رخ داده است!" }, { status: 500 });
  }
}
