import React from 'react'

const PhaseWeeks = () => {
  return (
    <>
                    <AccordionContent className="relative z-10 pb-4">
                  <div className="space-y-2">
                    {/* Weeks */}
                    {phase.weeks.map((week) => {
                      const wc = weekStatusConfig[week.status];
                      const WeekIcon = wc.icon;
                      const isLocked = week.status === "locked";

                      return (
                        <div
                          key={week.id}
                          className={`flex items-center justify-between rounded-2xl border border-transparent px-3 py-3 transition-colors sm:px-4 ${
                            isLocked
                              ? "opacity-60"
                              : "hover:border-border-brand hover:bg-surface2/60"
                          }`}
                        >
                          <div className="flex min-w-0 items-center gap-3">
                            <div
                              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface2 ${wc.color}`}
                            >
                              <WeekIcon className="h-4 w-4" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center gap-2">
                                <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-text">
                                  Week {week.number}
                                </span>
                              </div>
                              <p className="truncate text-sm font-medium text-primary-text">
                                {week.title}
                              </p>
                              <div className="mt-0.5 flex flex-wrap items-center gap-3 text-[11px] text-muted-text">
                                <span className="flex items-center gap-1">
                                  <BookOpen className="h-3 w-3" />
                                  {week.lessons} lessons
                                </span>
                                <span className="flex items-center gap-1">
                                  <Clock className="h-3 w-3" />
                                  {week.duration}
                                </span>
                              </div>
                            </div>
                          </div>

                          {!isLocked && (
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => navigate(`/phase/${phase.id}/week/${week.id}`)}
                              className="btn-glass h-8 shrink-0 rounded-full px-3 text-xs font-medium"
                            >
                              {week.status === "completed" ? "Review" : "Continue"}
                              <ArrowRight className="ml-1 h-3 w-3" />
                            </Button>
                          )}
                        </div>
                      );
                    })}

                    {/* Evaluation session button — after week 2 */}
                    {phase.hasEvaluation && (
                      <div className="mt-3 flex items-center justify-between rounded-2xl border border-border-brand bg-surface2/60 px-3 py-3 sm:px-4">
                        <div className="flex min-w-0 items-center gap-3">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                            <Video className="h-4 w-4" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm font-semibold text-primary-text">
                              Week 2 Evaluation Session
                            </p>
                            <p className="text-[11px] text-muted-text">
                              Live session with your mentor to review progress.
                            </p>
                          </div>
                        </div>

                        <Button
                          size="sm"
                          disabled={phase.status === "locked"}
                          onClick={() => setEvalLink(phase.evaluationLink)}
                          className="btn-primary h-8 shrink-0 rounded-full px-3 text-xs font-medium disabled:opacity-40"
                        >
                          Join
                          <ExternalLink className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                    )}

                    {/* Quiz button — after week 4 */}
                    {phase.quizLink && phase.status !== "locked" && (
                      <div className="mt-2 flex items-center justify-between rounded-2xl border border-green-500/30 bg-green-500/10 px-3 py-3 sm:px-4">
                        <div className="flex min-w-0 items-center gap-3">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-500/20 text-green-600">
                            <ClipboardList className="h-4 w-4" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm font-semibold text-primary-text">
                              Phase Quiz
                            </p>
                            <p className="text-[11px] text-muted-text">
                              Test your understanding of the full phase.
                            </p>
                          </div>
                        </div>

                        <Button
                          size="sm"
                          onClick={() => navigate(phase.quizLink)}
                          className="btn-primary h-8 shrink-0 rounded-full bg-green-600 px-3 text-xs font-medium hover:bg-green-700"
                        >
                          Take Quiz
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                    )}
                  </div>
                </AccordionContent>
    </>
  )
}

export default PhaseWeeks