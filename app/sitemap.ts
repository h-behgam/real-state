import type { MetadataRoute } from "next";
import Profile from "./models/profile";

export const dynamic = "force-dynamic"; // can be removed

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = ["/", "/buy-residential", "/signup", "/signin"];

  const profile = await Profile.find();
  const profileId = profile.map((item) => ({
    url: `http://localhost:3000/buy-residential/${item._id}`,
    lastModified: new Date().toString(),
  }));

  const routes = staticRoutes.map((item) => ({
    url: `http://localhost:3000${item}`,
    lastModified: new Date().toString(),
  }));

  return [...routes, ...profileId];
}
