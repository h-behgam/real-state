"use client";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";

import { publishProfile } from "@/app/actions/publish-profile-action";

import { toast } from "react-toastify";

export default function PublishButton({ id }: { id: undefined | string }) {
  const router = useRouter();
  const publishHandler = async () => {
    const published = id ? await publishProfile(id) : null;

    if (!published) {
      toast.error("آپدیت انجام نشد!!");
    }
    if (published?.message) {
      toast.success(published.message);
      revalidatePath("/dashboard/pending");
      router.refresh();
    } else if (published?.error) {
      toast.error(published.error);
    }
    console.log("published", published);
  };
  return (
    <button className="px-5 py-2 bg-green-600 text-white rounded-md" onClick={publishHandler}>
      انتشار
    </button>
  );
}
