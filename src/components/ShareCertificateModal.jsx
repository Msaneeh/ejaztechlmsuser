import { Link as LinkIcon, Copy, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const ShareCertificateModal = ({ open, cert, copied, onCopy, onClose }) => {
  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="glass-panel max-w-md rounded-[1.75rem] border-border-brand">
        <DialogHeader>
          <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-xl text-gold">
            <LinkIcon />
          </div>
          <DialogTitle className="text-center text-lg font-semibold tracking-tight text-primary-text">
            Share your achievement
          </DialogTitle>
          <DialogDescription className="text-center text-sm text-muted-text">
            Let the world know you completed {cert?.phaseName}.
          </DialogDescription>
        </DialogHeader>

        {/* Social share options */}
        <div className="mt-2 grid grid-cols-2 gap-2">
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
              cert?.verificationUrl || ""
            )}`}
            target="_blank"
            rel="noreferrer"
            className="btn-glass flex h-10 items-center justify-center gap-2 rounded-xl text-xs font-medium"
          >
            💼 LinkedIn
          </a>
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
              `I just earned my ${cert?.phaseName} certificate from Ejaztech LMS! 🎉`
            )}&url=${encodeURIComponent(cert?.verificationUrl || "")}`}
            target="_blank"
            rel="noreferrer"
            className="btn-glass flex h-10 items-center justify-center gap-2 rounded-xl text-xs font-medium"
          >
            <X />Twitter
          </a>
        </div>

        {/* Copy link row */}
       <div className="mt-3 flex items-center gap-2 rounded-2xl border border-border-brand bg-surface2 p-2 pl-3">
          <LinkIcon className="h-3.5 w-3.5 shrink-0 text-muted-text" />
          <span className="min-w-0 flex-1 truncate text-xs text-muted-text">
            {cert?.verificationUrl}
          </span>
          <Button
            onClick={() => onCopy(cert?.verificationUrl || "")}
            size="sm"
            className="btn-primary h-7 shrink-0 rounded-full px-3 text-[11px] font-medium"
          >
            {copied ? (
              <>
                <Check className="mr-1 h-3 w-3" />
                Copied
              </>
            ) : (
              <>
                <Copy className="mr-1 h-3 w-3" />
                Copy
              </>
            )}
          </Button>
        </div>

        <DialogFooter className="mt-4 sm:justify-center">
          <Button
            variant="ghost"
            onClick={onClose}
            className="btn-glass h-9 rounded-full px-4 text-xs font-medium"
          >
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ShareCertificateModal;