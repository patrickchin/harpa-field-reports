import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/landing/LandingPage";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Harpa Pro — Daily construction reports before you leave the jobsite" },
      {
        name: "description",
        content:
          "Harpa Pro turns field notes, photos, and voice updates into clean daily construction reports. Built for foremen and site supervisors. Join the waitlist.",
      },
      { property: "og:title", content: "Harpa Pro — Daily reports before you leave the jobsite" },
      {
        property: "og:description",
        content:
          "Capture field notes, photos, and voice updates throughout the day. Harpa Pro organizes them into clean construction reports.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

function Index() {
  return <LandingPage />;
}
