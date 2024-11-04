"use server";

import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../utils/auth";

import connectDB from "../utils/conectDB";
import Profile from "../models/profile";
import User from "../models/users";

import { Types } from "mongoose";

interface IProfile {
  _id?: number;
  title: string;
  description: string;
  location: string;
  phone: string;
  realState: string;
  price: string;
  constructionDate: Date;
  category: "villa" | "apartment" | "store" | "office";
  amenities?: string[];
  rules?: string[];
  userId?: string;
  published?: boolean;
}

export async function createProfile(formDate: FormData) {
  // destructure data from formdata
  const {
    title,
    description,
    location,
    phone,
    realState,
    price,
    constructionDate,
    category,
    amenities,
    rules,
    published,
  } = Object.fromEntries(formDate) as unknown as IProfile;

  // check conected to DB
  try {
    await connectDB();

    //check if not empty
    if (
      !title ||
      !description ||
      !location ||
      !phone ||
      !realState ||
      !price ||
      !constructionDate ||
      !category ||
      !amenities ||
      !rules
    ) {
      return { error: "لطفا فیلد ها را به درستی پر کنید", status: 401 };
    }

    //check the title is exist
    const titleExist = await Profile.findOne({ title });
    if (titleExist) {
      return { error: "این پروفایل موجود می باشد یا عنوان تکراری است!!", status: 401 };
    }

    //check session
    const session = await getServerSession(authOptions);
    if (!session) {
      return { error: "چنین کاربری وجود ندارد!!", status: 401 };
    }

    // get userid
    const user = await User.findOne({ email: session?.user?.email });

    // create new profile
    const newProfile = await Profile.create({
      title,
      description,
      location,
      phone,
      realState,
      price: parseInt(price),
      constructionDate,
      category,
      amenities,
      rules,
      userId: new Types.ObjectId(user._id),
      published,
    });

    return { message: "پروفایل با موفقیت ثبت شد", status: 200 };
  } catch (error) {
    throw new Error("مشکلی در اتصال به دیتابیس وجود دارد");
  }
}

export async function editProfile(formDate: FormData) {
  // destructure data from formdata
  const {
    _id,
    title,
    description,
    location,
    phone,
    realState,
    price,
    constructionDate,
    category,
    amenities,
    rules,
    published,
  } = Object.fromEntries(formDate) as unknown as IProfile;

  // check conected to DB
  try {
    await connectDB();

    //check if not empty
    if (
      !title ||
      !description ||
      !location ||
      !phone ||
      !realState ||
      !price ||
      !constructionDate ||
      !category ||
      !amenities ||
      !rules
    ) {
      return { error: "لطفا فیلد ها را به درستی پر کنید", status: 401 };
    }

    //check session
    const session = await getServerSession(authOptions);
    if (!session) {
      return { error: "چنین کاربری وجود ندارد!!", status: 401 };
    }

    // get userid
    const user = await User.findOne({ email: session?.user?.email });

    // get profile by Id
    const profile = await Profile.findById(_id);

    //check if the user owner of profile can update it
    if (!user._id.equals(profile.userId)) {
      return { error: "شما قادر به ویرایش پست دیگران نیستید!!", status: 401 };
    }

    const updateProfile = await Profile.findByIdAndUpdate(profile._id, {
      title,
      description,
      location,
      phone,
      realState,
      price: parseInt(price),
      constructionDate,
      category,
      amenities,
      rules,
      userId: new Types.ObjectId(user._id),
      published,
    });
    console.log(updateProfile);

    return { message: "پروفایل با موفقیت ویرایش شد", status: 200 };
  } catch (error) {
    throw new Error("مشکلی در اتصال به دیتابیس وجود دارد");
  }
}

export async function deleteProfile(_id: number) {
  try {
    await connectDB();

    //check session
    const session = await getServerSession(authOptions);
    if (!session) {
      return { error: "چنین کاربری وجود ندارد!!", status: 401 };
    }

    // get userid
    const user = await User.findOne({ email: session?.user?.email });

    // get profile by Id
    const profile = await Profile.findById(_id);

    //check if the user owner of profile can update it
    if (!user._id.equals(profile.userId)) {
      return { error: "شما قادر به ویرایش پست دیگران نیستید!!", status: 401 };
    }

    const deleteProfile = await Profile.deleteOne({ _id });

    return { message: "پروفایل با موفقیت حذف شد", status: 200 };
  } catch (error) {
    throw new Error("مشکلی در اتصال به دیتابیس وجود دارد");
  }
}
