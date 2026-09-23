import React from 'react'

const EvaluationButton = () => {
  return (
    <>
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
    </>
  )
}

export default EvaluationButton