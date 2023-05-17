import { createClient } from "@sanity/client";

export default createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: "production",
  useCdn: true, // `false` if you want to ensure fresh data
});
