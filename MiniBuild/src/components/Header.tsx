export function Header() {
  return (
    <header className="sticky top-0 z-10 bg-background/85 backdrop-blur-sm">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3 pb-4 pt-7">
        <div className="min-w-0">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
            DISCOVER
          </p>
          <h1 className="mt-1.5 truncate text-[27px] font-extrabold leading-tight tracking-tight text-foreground">
            Workspaces
          </h1>
          <p className="mt-1 text-sm leading-snug text-muted-foreground">
            Find a workspace that fits your workday.
          </p>
        </div>

        <button
          type="button"
          aria-label="Your profile"
          className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border bg-card text-[13px] font-bold text-foreground shadow-sm transition-colors duration-200 hover:border-primary/40 hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <span aria-hidden="true">JR</span>
        </button>
      </div>
    </header>
  );
}
