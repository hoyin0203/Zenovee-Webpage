import { createClient } from "@sanity/client";
import groq from "groq";

export { groq };

const projectId = process.env.SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET;
const apiVersion = process.env.SANITY_API_VERSION || "2025-01-01";
const token = process.env.SANITY_READ_TOKEN;

export const sanityEnabled = Boolean(projectId && dataset);

export const sanityClient = sanityEnabled
  ? createClient({
      projectId: projectId!,
      dataset: dataset!,
      apiVersion,
      token,
      useCdn: !token,
    })
  : null;

