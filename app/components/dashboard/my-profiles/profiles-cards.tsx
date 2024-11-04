"use client";
import React from "react";
import { useRouter } from "next/navigation";

import { deleteProfile } from "@/app/actions/profile-action";

import CustomButton from "../../global/Custom-button";
import Card, { ICard } from "./card";

import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";

import { toast, ToastContainer } from "react-toastify";

export default function ProfilesCards({ card }: { card: ICard }) {
  const router = useRouter();

  //edit handler
  const editHandler = () => {
    router.push(`/dashboard/my-profiles/${card._id}`);
  };

  //delete handler
  const edeleteHandler = async () => {
    const confirmDialog = confirm("آیا مطمئن هستید؟");
    if (confirmDialog) {
      const res = await deleteProfile(card._id!);

      // show response
      if (res.error) {
        toast.error(res.error);
      } else {
        toast.success(res.message);
      }

      router.refresh();
    }
  };

  return (
    <div className="flex border border-blue-500 p-3 max-w-fit rounded-lg items-end mb-4 gap-x-3">
      <ToastContainer />
      <Card card={card} />
      <CustomButton
        classname="w-64 border border-green-600 p-2 rounded-md flex items-center justify-center gap-x-1"
        onClick={editHandler}
      >
        ویرایش
        <FiEdit className="text-green-600" />
      </CustomButton>
      <CustomButton
        classname="w-64 border border-red-600 p-2 rounded-md flex items-center justify-center gap-x-1"
        onClick={edeleteHandler}
      >
        حذف
        <AiOutlineDelete className="text-red-600" />
      </CustomButton>
    </div>
  );
}
