import { ChevronRight, MapPin } from "lucide-react";
import type { Workspace } from "@/data/workspaces";

type WorkspaceCardProps = {
  workspace: Workspace;
  /** Loads the first card's photo eagerly so the screen paints instantly. */
  priority?: boolean;
};

export function WorkspaceCard({ workspace, priority = false }: WorkspaceCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-card card-elevated transition-all duration-300 ease-out hover:-translate-y-0.5 hover:card-elevated-hover">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={workspace.image}
          alt={workspace.alt}
          width={1024}
          height={768}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
      </div>

      <div className="p-4">
        <h2 className="truncate text-[17px] font-bold tracking-tight text-foreground">
          {workspace.name}
        </h2>

        <p className="mt-1 flex min-w-0 items-center gap-1.5 text-[13px] text-muted-foreground">
          <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          <span className="truncate">{workspace.location}</span>
        </p>

        <div className="mt-4 flex items-center justify-between gap-3">
          <p className="min-w-0 text-[19px] font-extrabold tracking-tight text-foreground">
            {workspace.price}
            <span className="ml-1 text-[12px] font-medium text-muted-foreground">
              {workspace.cadence}
            </span>
          </p>

          <button
            type="button"
            aria-label={`View ${workspace.name}`}
            className="inline-flex shrink-0 items-center gap-0.5 rounded-full border border-border bg-background px-3.5 py-1.5 text-[13px] font-semibold text-foreground transition-colors duration-200 hover:border-primary/40 hover:bg-accent hover:text-primary active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            View
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </article>
  );
}
