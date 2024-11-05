import { getServerSession } from "next-auth";
import { authOptions } from '@/app/utils/auth'
import User from "@/app/models/users";
import connectDB from "@/app/utils/conectDB";

export default async function MainDashbord() {
  const session = await getServerSession(authOptions);
  await connectDB();
  const user = await User.findOne({ email: session?.user?.email });

  return (
    <div>
      <h3 className="font-normal">سلام 👋</h3>
      <p className="font-normal">آگهی های خود را ثبت کنید تا هزاران نفر آن را مشاهده کنند</p>
      <div className="flex mt-16 gap-x-4 p-1">
        <p className="bg-blue-50 rounded-md font-normal p-1">تاریخ عضویت:</p>
        <span className="bg-blue-50 text-blue-700 rounded-md font-normal p-1">
          {new Date(user.createdAt).toLocaleDateString("fa-IR")}
        </span>
      </div>
    </div>
  );
}
