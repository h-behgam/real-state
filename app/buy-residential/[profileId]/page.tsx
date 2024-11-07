import ProfileIdMain from "@/app/components/UI/buy-residential/profileID/profileID-main";
import ProfileIdSidebar from "@/app/components/UI/buy-residential/profileID/profileID-sidebar";

import { IProfile } from "@/app/dashboard/my-profiles/page";

import Profile from "@/app/models/profile";

import connectDB from "@/app/utils/conectDB";

// async function getProfileData(id:number) {
// }

export default async function ProfileDetailPage({ params: { profileId } }: { params: { profileId: string } }) {
  //conect db
  await connectDB();
  const profile: IProfile | null = await Profile.findById({ _id: profileId });

  if (!profile) return <h3>اطلاعاتثبت نشده است!!</h3>;

  return (
    <div className="px-2 py-10 flex gap-x-5">
      <ProfileIdMain data={profile} />
      <ProfileIdSidebar data={profile} />
    </div>
  );
}
