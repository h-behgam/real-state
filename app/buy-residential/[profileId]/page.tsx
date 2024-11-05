import { IProfile } from "@/app/dashboard/my-profiles/page";

import Profile from "@/app/models/profile";

import connectDB from "@/app/utils/conectDB";

// async function getProfileData(id:number) {
// }

export default async function ProfileDetailPage({ params: { profileId } }: { params: { profileId: string } }) {
  //conect db
  await connectDB();
  const res: IProfile | null = await Profile.findById({ _id: profileId });

  return (
    <div>
      <div>
        <h2>{res?.title}</h2>
      </div>
      <div></div>
    </div>
  );
}
