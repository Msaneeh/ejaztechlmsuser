import { Trophy, PlayCircle, Lock, ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import CertificatePreview from "./CertificatePreview";
import CertificateActions from "./CertificateActions";

const statusConfig = {
  earned: {
    icon: Trophy,
    label: "Earned",
    badge: "border-green-500/30 bg-green-500/15 text-green-600",
    iconBg: "bg-gold/15 text-gold",
  },
  "in-progress": {
    icon: PlayCircle,
    label: "In Progress",
    badge: "border-border-brand bg-surface2 text-primary-text",
    iconBg: "bg-surface2 text-muted-text",
  },
  locked: {
    icon: Lock,
    label: "Locked",
    badge: "border-border-brand bg-surface2 text-muted-text",
    iconBg: "bg-surface2 text-muted-text",
  },
};

const CertificateCard = ({
  cert,
  isOpen,
  onToggle,
  onDownload,
  onShare,
  onVerify,
}) => {
  const isLocked = cert.status === "locked";
  const isEarned = cert.status === "earned";
  const config = statusConfig[cert.status] || statusConfig.locked;
  const StatusIcon = config.icon;

  const subtitle = isEarned
    ? `Issued ${new Date(cert.issuedDate).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })}`
    : cert.status === "in-progress"
    ? "Finish the phase to unlock your certificate"
    : "Complete previous phases to unlock";

  return (
    <div
      className={`glass-panel relative overflow-hidden rounded-[2rem] shadow-xs transition-all ${
        isLocked ? "opacity-70" : ""
      }`}
    >
      <div className="pointer-events-none absolute -left-10 -top-16 h-48 w-48 rounded-full bg-accent-dim blur-[50px]" />
      <div className="pointer-events-none absolute -bottom-20 -right-12 h-60 w-60 rounded-full bg-gold-dim blur-[50px]" />

      {/* Header — click to expand */}
      <button
        type="button"
        onClick={() => !isLocked && onToggle(cert.id)}
        disabled={isLocked}
        className={`relative z-10 flex w-full items-center justify-between gap-3 p-4 text-left sm:p-5 ${
          !isLocked ? "cursor-pointer" : "cursor-not-allowed"
        }`}
      >
        <div className="flex min-w-0 flex-1 items-center gap-3">
          <div
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${config.iconBg}`}
          >
            <StatusIcon className="h-5 w-5" />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="truncate text-base font-semibold tracking-tight text-primary-text sm:text-lg">
                {cert.phaseName}
              </h2>
              <Badge
                variant="outline"
                className={`rounded-full px-2.5 py-0.5 text-[10px] font-medium ${config.badge}`}
              >
                {config.label}
              </Badge>
            </div>

            <p className="mt-0.5 truncate text-xs text-muted-text">
              {subtitle}
            </p>
          </div>
        </div>

        {!isLocked && (
          <ChevronDown
            className={`h-5 w-5 shrink-0 text-muted-text transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        )}
      </button>

      {/* Expanded content */}
      {isOpen && !isLocked && (
        <div className="relative z-10 px-4 pb-4 sm:px-5 sm:pb-5">
          <CertificatePreview cert={cert} />
          <CertificateActions
            onDownload={() => onDownload(cert)}
            onShare={() => onShare(cert)}
            onVerify={() => onVerify(cert.verificationUrl)}
          />
        </div>
      )}
    </div>
  );
};

export default CertificateCard;