"use client";
import React, { useState } from "react";
import CustomInput from "../../global/custom-input";
import CustomTextArea from "../../global/custom-textarea";
import SubmitFormButton from "../../global/submit-form-button";
import TextList from "../../global/text-list";

export default function AddProfile() {
  const [textLists, setTextLists] = useState<string[]>([]);
  const [rouls, setRouls] = useState<string[]>([]);

  const formHandler = (formData: FormData) => {
    formData.append("textList", textLists as any);
    formData.append("roul", rouls as any);
    const { title, description, location, phone, price, realState, category, textList, roul } =
      Object.fromEntries(formData);
    console.log("formData", title, description, location, phone, price, realState, category, textList, roul);
  };
  return (
    <>
      <div className="bg-cyan-50 p-3 rounded-md mb-5">
        <h3 className="text-blue-500 font-normal">ثبت آگهی</h3>
      </div>
      <form action={formHandler} className=" w-1/2">
        <div className="mb-4">
          <CustomInput
            type="text"
            name={"title"}
            labalName={"title"}
            labelTitle="عنوان آگهی"
            placeholder="عنوان آگهی"
            classname="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-blue-100 sm:text-sm sm:leading-6"
          />
        </div>
        <div className="mb-4">
          <CustomTextArea
            name={"description"}
            labalName={"description"}
            labelTitle="توضیحات آگهی"
            placeholder="توضیحات آگهی"
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
            classname="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-blue-100 sm:text-sm sm:leading-6"
          />
        </div>

        <div className="mb-4">
          <h3>دسته بندی</h3>
          <div className="flex gap-x-10">
            <div>
              <CustomInput
                type="radio"
                name={"category"}
                id="villa"
                labalName={"villa"}
                value={"villa"}
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
                labelTitle="دفتر"
                placeholder="دفتر"
                classname="block rounded-md border-0 p-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-blue-100 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <TextList
            TextLists={textLists}
            setTextLists={setTextLists}
            title="امکانات رفاهی"
            className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-blue-100 sm:text-sm sm:leading-6"
          />
        </div>

        <div className="mb-4">
          <TextList
            TextLists={rouls}
            setTextLists={setRouls}
            title="قوانین"
            className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-blue-100 sm:text-sm sm:leading-6"
          />
        </div>

        <SubmitFormButton classname="text-black">ثبت</SubmitFormButton>
      </form>
    </>
  );
}
