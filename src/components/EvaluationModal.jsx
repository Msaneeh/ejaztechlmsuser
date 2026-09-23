import React, { useState } from "react";

import {   Video, ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";


const EvaluationModal = () => {
    const [evalLink, setEvalLink] = useState(null);
  return (
    <>
      <Dialog open={!!evalLink} onOpenChange={(open) => !open && setEvalLink(null)}>
        <DialogContent className="glass-panel max-w-md rounded-[1.75rem] border-border-brand">
          <DialogHeader>
            <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-gold">
              <Video className="h-5 w-5" />
            </div>
            <DialogTitle className="text-center text-lg font-semibold tracking-tight text-primary-text">
              Evaluation Session
            </DialogTitle>
            <DialogDescription className="text-center text-sm text-muted-text">
              Your mentor is waiting. Join the live session using the link below.
            </DialogDescription>
          </DialogHeader>

          <div className="mt-2 rounded-2xl border border-border-brand bg-surface2 p-3">
            <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-muted-text">
              Meeting Link
            </p>
            <p className="truncate text-sm font-medium text-primary-text">
              {evalLink}
            </p>
          </div>

          <DialogFooter className="mt-4 flex-col gap-2 sm:flex-row sm:justify-center">
            <Button
              variant="ghost"
              onClick={() => setEvalLink(null)}
              className="btn-glass h-9 rounded-full px-4 text-xs font-medium"
            >
              Cancel
            </Button>
            <a href={evalLink || "#"} target="_blank" rel="noreferrer">
              <Button className="btn-primary h-9 rounded-full px-4 text-xs font-medium">
                Join Meeting
                <ExternalLink className="ml-1 h-3.5 w-3.5" />
              </Button>
            </a>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default EvaluationModal;