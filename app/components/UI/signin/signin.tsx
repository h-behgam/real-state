"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.min.css";

import CustomInput from "../../global/custom-input";
import SubmitFormButton from "../../global/submit-form-button";
import { signIn } from "next-auth/react";

export default function Signin() {
  const router = useRouter();

  const formHandler = async (formData: FormData) => {
    const { email, password } = Object.fromEntries(formData);

    const res = await signIn("credentials", { email, password, redirect: false });
    console.log(res);
    
    if (res?.error) {
        toast.error(res.error);
    } else {
        toast.success('وارد شدید');
        router.push("/");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-20">
      <h2 className="text-center text-2xl font-semibold">فرم ثبت نام</h2>
      <form action={formHandler}>
        <div className="mb-4">
          <CustomInput
            name={"email"}
            type="text"
            classname="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-blue-100 sm:text-sm sm:leading-6"
            labalName="email"
            labelTitle="ایمیل"
            placeholder="ایمیل خود را وارد کنید"
          />
        </div>
        <div className="mb-4">
          <CustomInput
            name={"password"}
            type="password"
            classname="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-blue-100 sm:text-sm sm:leading-6"
            labalName="password"
            labelTitle="پسورد"
            placeholder="پسورد خود را وارد کنید"
          />
        </div>

        <div className="mb-4">
          <SubmitFormButton classname={"bg-blue-950 hover:bg-blue-800 transition-colors duration-300"}>
            ورود
          </SubmitFormButton>
        </div>
      </form>
      <p>
        حساب کاربری ندارید؟
        <Link href={"/signin"} className="text-blue-400 font-semibold">
          {" "}
          ثبت نام
        </Link>
      </p>
      <ToastContainer />
    </div>
  );
}
