import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { WorkspaceList } from "@/components/WorkspaceList";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Workspaces — Find a workspace that fits your workday",
      },
      {
        name: "description",
        content:
          "Browse five workspaces across Chennai, from a shared coworking floor to a quiet focus booth, starting at ₹4,999 a month.",
      },
      { property: "og:title", content: "Workspaces" },
      {
        property: "og:description",
        content: "Find a workspace that fits your workday.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="app-backdrop min-h-dvh">
      {/* Mobile-first column, centered as an app preview on larger screens. */}
      <div className="mx-auto flex min-h-dvh w-full max-w-[26rem] flex-col px-5 sm:border-x sm:border-border">
        <Header />
        <main className="flex-1">
          <WorkspaceList />
        </main>
      </div>
    </div>
  );
}
