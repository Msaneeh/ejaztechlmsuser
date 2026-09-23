import React from 'react'

const CapstoneProject = () => {
  return (
    <div>
                <div className="glass-panel relative overflow-hidden rounded-[2rem] p-4 sm:p-5 shadow-xs">
          <div className="pointer-events-none absolute -left-10 -top-16 h-48 w-48 rounded-full bg-accent-dim blur-[50px]" />
          <div className="pointer-events-none absolute -bottom-20 -right-12 h-60 w-60 rounded-full bg-gold-dim blur-[50px]" />

          <div className="relative z-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                <Trophy className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-base font-semibold tracking-tight text-primary-text sm:text-lg">
                    {capstoneProject.title}
                  </h2>
                  <Badge
                    variant="outline"
                    className="rounded-full border-border-brand bg-surface2 px-2.5 py-0.5 text-[10px] font-medium text-muted-text"
                  >
                    <Lock className="mr-1 h-3 w-3" />
                    Locked
                  </Badge>
                </div>
                <p className="mt-1 text-xs text-muted-text sm:text-sm">
                  {capstoneProject.description}
                </p>
                <p className="mt-1 text-[11px] text-muted-text">
                  Estimated duration: {capstoneProject.duration}
                </p>
              </div>
            </div>

            <Button
              disabled={capstoneProject.status === "locked"}
              className="btn-primary h-9 shrink-0 rounded-full px-4 text-xs font-medium sm:text-sm"
            >
              View Project
              <ArrowRight className="ml-1 h-3.5 w-3.5" />
            </Button>
          </div>
        </div>
    </div>
  )
}

export default CapstoneProject