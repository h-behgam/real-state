"use server";

import connectDB from "../utils/conectDB";
import { checkRole } from "../utils/session";
import Profile from "../models/profile";

// interface IProfile {
//   _id?: string;
//   title: string;
//   description: string;
//   location: string;
//   phone: string;
//   realState: string;
//   price: string;
//   constructionDate: Date;
//   category: "villa" | "apartment" | "store" | "office";
//   amenities?: string[];
//   rules?: string[];
//   userId?: string;
//   published?: boolean;
// }

export async function publishProfile(id: string) {
  console.log("id", id);
  console.log("type of id", typeof id);

  try {
    //conect to DB
    await connectDB();

    //check session androle
    const role = await checkRole();
    if (role !== "ADMIN") {
      return { error: "شما اجازه ویرایش ندارید!!!", status: 403 };
    }

    const profile = await Profile.findById({ _id: id });
    profile.published = true;
    const updateProfile = await profile.save();

    if (!updateProfile) {
      return { error: "آپدیت انجام نشد!!!", status: 401 };
    }
    return { message: "آپدیت انجام شد!!!", status: 200 };
  } catch (error) {
    console.log("profile publish error : ", error);
    throw new Error("مشکلی در اتصال به دیتابیس وجود دارد");
  }
}
