import { workspaces } from "@/data/workspaces";
import { WorkspaceCard } from "./WorkspaceCard";

export function WorkspaceList() {
  return (
    <section aria-label="Available workspaces">
      <ul className="space-y-5 pt-2">
        {workspaces.map((workspace, index) => (
          <li key={workspace.id}>
            <WorkspaceCard workspace={workspace} priority={index === 0} />
          </li>
        ))}
      </ul>

      <p className="pb-10 pt-6 text-center text-xs text-muted-foreground">
        {workspaces.length} workspaces available
      </p>
    </section>
  );
}
