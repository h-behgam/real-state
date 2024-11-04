import Profile from "@/app/models/profile";
import connectDB from "@/app/utils/conectDB";

import AddProfile from "@/app/components/dashboard/add/add-profile";

interface ProfileEditPageProps {
  params: {
    profileId: string;
  };
}
export default async function profileEditPage ({ params: { profileId } } : ProfileEditPageProps) {
  await connectDB()
  const profile = await Profile.findById({_id: profileId})
  
  if (!profile) {return <h3>پروفایل یافت نشد !!!</h3>}

  return <AddProfile profile={JSON.parse(JSON.stringify(profile))} />;
}
