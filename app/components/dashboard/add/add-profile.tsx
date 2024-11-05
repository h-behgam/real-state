"use client";
import React, { useState } from "react";

import PersianDatepicker from "./persian-datepicker";

import CustomInput from "../../global/custom-input";
import CustomTextArea from "../../global/custom-textarea";
import SubmitFormButton from "../../global/submit-form-button";
import TextList from "../../global/text-list";

import { createProfile, editProfile } from "@/app/actions/profile-action";
import { toast, ToastContainer } from "react-toastify";

interface IProfile {
  _id?: string;
  title: string;
  description: string;
  location: string;
  phone: string;
  realState: string;
  price: number;
  constructionDate: Date;
  category: "villa" | "apartment" | "store" | "office";
  amenities?: string[];
  rules?: string[];
}
export default function AddProfile({ profile }: { profile: IProfile }) {
  // console.log(profile);

  const [textLists, setTextLists] = useState<string[]>(profile && profile.amenities ? profile.amenities : []);
  const [rouls, setRouls] = useState<string[]>(profile && profile.rules ? profile.rules : []);
  const [createdAt, setCreatedAt] = useState<Date>(profile ? profile.constructionDate : new Date());
  //   const session = useSession()

  const formHandler = async (formData: FormData) => {
    // append textlists and rouls
    formData.append("amenities", JSON.stringify(textLists));
    formData.append("rules", JSON.stringify(rouls));
    formData.append("constructionDate", createdAt.toDateString());

    // add id to formdata in edit
    if(profile && profile._id) formData.append("_id", profile._id);

    // decler type of res
    let res:
      | { error: string; status: number; message?: undefined }
      | { message: string; status: number; error?: undefined };

    //check for edit or create function is run
    if (profile) {
      res = await editProfile(formData);
    } else {
      res = await createProfile(formData);
    }

    // show response
    if (res.error) {
      toast.error(res.error);
    } else {
      toast.success(res.message);
    }
  };
  return (
    <>
      <ToastContainer />
      <div className="bg-cyan-50 p-3 rounded-md mb-5">
        <h3 className="text-blue-500 font-normal">{profile ? "ویرایش" : "ثبت"} آگهی</h3>
      </div>
      <form action={formHandler} className=" w-1/2">
        <div className="mb-4">
          <CustomInput
            type="text"
            name={"title"}
            labalName={"title"}
            labelTitle="عنوان آگهی"
            placeholder="عنوان آگهی"
            defaultValue={profile && profile.title}
            classname="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-blue-100 sm:text-sm sm:leading-6"
          />
        </div>
        <div className="mb-4">
          <CustomTextArea
            name={"description"}
            labalName={"description"}
            labelTitle="توضیحات آگهی"
            placeholder="توضیحات آگهی"
            defaultValue={profile && profile.description}
            classname="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-blue-100 sm:text-sm sm:leading-6"
          />
        </div>
        <div className="mb-4">
          <CustomInput
            type="text"
            name={"location"}
            labalName={"location"}
            labelTitle="آدرس"
            placeholder="آدرس"
            defaultValue={profile && profile.location}
            classname="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-blue-100 sm:text-sm sm:leading-6"
          />
        </div>
        <div className="mb-4">
          <CustomInput
            type="text"
            name={"phone"}
            labalName={"phone"}
            labelTitle="شماره تماس"
            placeholder="شماره تماس"
            defaultValue={profile && profile.phone}
            classname="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-blue-100 sm:text-sm sm:leading-6"
          />
        </div>
        <div className="mb-4">
          <CustomInput
            type="text"
            name={"price"}
            labalName={"price"}
            labelTitle="قیمت"
            placeholder="قیمت"
            defaultValue={profile && profile.price}
            classname="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-blue-100 sm:text-sm sm:leading-6"
          />
        </div>
        <div className="mb-4">
          <CustomInput
            type="text"
            name={"realState"}
            labalName={"realState"}
            labelTitle="بنگاه"
            placeholder="بنگاه"
            defaultValue={profile && profile.realState}
            classname="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-blue-100 sm:text-sm sm:leading-6"
          />
        </div>

        <div className="mb-6">
          <h3>دسته بندی</h3>
          <div className="flex gap-x-10">
            <div>
              <CustomInput
                type="radio"
                name={"category"}
                id="villa"
                labalName={"villa"}
                value={"villa"}
                checked = {profile?.category === "villa"}
                labelTitle="ویلا"
                placeholder="ویلا"
                classname="block rounded-md border-0 p-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-blue-100 sm:text-sm sm:leading-6"
              />
            </div>
            <div>
              <CustomInput
                type="radio"
                name={"category"}
                id="apartment"
                labalName={"apartment"}
                value={"apartment"}
                checked = {profile?.category === "apartment"}
                labelTitle="آپارتمان"
                placeholder="آپارتمان"
                classname="block rounded-md border-0 p-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-blue-100 sm:text-sm sm:leading-6"
              />
            </div>
            <div>
              <CustomInput
                type="radio"
                name={"category"}
                id="store"
                labalName={"store"}
                value={"store"}
                checked = {profile?.category === "store"}
                labelTitle="مغازه"
                placeholder="مغازه"
                classname="block rounded-md border-0 p-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-blue-100 sm:text-sm sm:leading-6"
              />
            </div>
            <div>
              <CustomInput
                type="radio"
                name={"category"}
                id="office"
                labalName={"office"}
                value={"office"}
                checked = {profile?.category === "office"}
                labelTitle="دفتر"
                placeholder="دفتر"
                classname="block rounded-md border-0 p-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-blue-100 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>

        <div className="mb-6">
          <TextList
            TextLists={textLists}
            setTextLists={setTextLists}
            title="امکانات رفاهی"
            className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-blue-100 sm:text-sm sm:leading-6"
          />
        </div>

        <div className="mb-6">
          <TextList
            TextLists={rouls}
            setTextLists={setRouls}
            title="قوانین"
            className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-blue-100 sm:text-sm sm:leading-6"
          />
        </div>

        <div className="mb-6">
          <PersianDatepicker createdAt={createdAt} setCreatedAt={setCreatedAt} />
        </div>

        <div className="mt-10">
          <SubmitFormButton classname="text-black border-blue-800 border hover:bg-blue-800 hover:text-white hover:border-blue-300">
            {profile ? "ویرایش" : "ثبت"}
          </SubmitFormButton>
        </div>
      </form>
    </>
  );
}
