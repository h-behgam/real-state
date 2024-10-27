"use client";

import React from "react";
import CustomInput from "../../global/custom-input";
import SubmitFormButton from "../../global/submit-form-button";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();

  const formHandler = async (formData: FormData) => {
    const { email, password, repassword } = Object.fromEntries(formData);

    if (password !== repassword) {
      toast.error("پسورد و تکرار آن با هم برابر نیست !!!");
      return;
    }

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application.json" },
    });
    const data = await res.json();
    if (res.status == 200) {
      toast.success(data.message);
      router.push("/signin");
    } else {
      toast.error(data.error);
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
          <CustomInput
            name={"repassword"}
            type="repassword"
            classname="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-blue-100 sm:text-sm sm:leading-6"
            labalName="repassword"
            labelTitle="تکرار پسورد"
            placeholder="پسورد خود را مجدد وارد کنید"
          />
        </div>
        <div className="mb-4">
          <SubmitFormButton classname={"bg-blue-950 hover:bg-blue-800 transition-colors duration-300"}>ثبت</SubmitFormButton>
        </div>
      </form>
      <p>
        حساب کاربری دارید ؟<Link href={"/signin"} className="text-blue-400 font-semibold"> ورود</Link>
      </p>
      <ToastContainer />
    </div>
  );
}
