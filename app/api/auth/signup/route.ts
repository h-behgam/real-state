import { NextResponse, NextRequest } from "next/server";
import User from "@/app/models/users";
import connectDB from "@/app/utils/conectDB";
import { hashPassword } from "@/app/utils/auth";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    
    const { email, password } = await req.json();
    
    if (!email || !password) {
      return NextResponse.json({ error: "لطفا اطلاعات صحیح وارد کنید!" }, { status: 422 });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return NextResponse.json({ error: "این حساب کاربری موجود می باشد!!!" }, { status: 422 });
    }

    const hashedPassword = await hashPassword(password);

    const newUser = User.create({ email: email, password: hashedPassword });

    if (!newUser) {
        return NextResponse.json({error:'مشکلی در ثبت اطلاعات ایجاد شد'},{status:422})
    }

    return NextResponse.json({message: 'حساب کاربری ایجاد شد.'})

  } catch (error) {
    console.log("error", error);
    return NextResponse.json({ error: "مشکلی در سرور رخ داده است!" }, { status: 500 });
  }
}
