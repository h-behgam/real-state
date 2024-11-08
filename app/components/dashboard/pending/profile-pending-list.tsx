import { IProfile } from "@/app/dashboard/my-profiles/page";
import PublishButton from "./publish-button";
import { ToastContainer } from "react-toastify";

export default function ProfilePendingList({ profile }: { profile: IProfile }) {
  return (
    <div className="border-b-2 border-blue-200 p-3">
      <ToastContainer />
      <p className="mb-2">{profile.title}</p>
      <p>{profile.description.slice(0, 100)} ...</p>
      <div className="my-5 flex gap-x-3">
        <p className="px-5 py-2 bg-blue-100 rounded-lg">{profile.location}</p>
        <p className="px-5 py-2 bg-blue-100 rounded-lg">{profile.price}</p>
      </div>
      <PublishButton id={JSON.parse(JSON.stringify(profile._id))} />
    </div>
  );
}
