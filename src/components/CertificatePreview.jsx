import { Badge } from "@/components/ui/badge";
import { Calendar1, ChartArea, StarCheckIcon, Trophy } from "lucide-react";

const CertificatePreview = ({ cert }) => {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border-brand bg-bg p-5 sm:p-7">
      {/* Decorative frame */}
      <div className="pointer-events-none absolute inset-2 rounded-xl border border-border-brand/60" />
      <div className="pointer-events-none absolute inset-3 rounded-lg border border-dashed border-border-brand/40" />

      {/* Corner ornaments */}
      <div className="pointer-events-none absolute left-4 top-4 h-6 w-6 border-l-2 border-t-2 border-gold/50" />
      <div className="pointer-events-none absolute right-4 top-4 h-6 w-6 border-r-2 border-t-2 border-gold/50" />
      <div className="pointer-events-none absolute bottom-4 left-4 h-6 w-6 border-b-2 border-l-2 border-gold/50" />
      <div className="pointer-events-none absolute bottom-4 right-4 h-6 w-6 border-b-2 border-r-2 border-gold/50" />

      <div className="relative z-10 flex flex-col items-center text-center">
        
        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 text-lg text-gold">
          <Trophy />
        </div>

        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-text">
          Certificate of Completion
        </p>

        <p className="mt-3 text-[11px] text-muted-text">
          This is to certify that
        </p>

        <h3 className="mt-1 text-2xl font-bold tracking-tight text-primary-text sm:text-3xl">
          {cert.recipientName}
        </h3>

        <p className="mt-2 max-w-sm text-[11px] text-muted-text sm:text-xs">
          has successfully completed
        </p>

        <p className="mt-1 text-sm font-semibold tracking-tight text-primary-text sm:text-base">
          {cert.phaseName}
        </p>

        <p className="mt-1 text-[11px] text-muted-text">
          as part of {cert.cohortName}
        </p>

        {/* Grade + score */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <Badge
            variant="outline"
            className="rounded-full border-gold/40 bg-gold/10 px-3 py-0.5 text-[10px] font-semibold text-gold"
          >
            <StarCheckIcon /> {cert.grade}
          </Badge>
          <Badge
            variant="outline"
            className="rounded-full border-green-500/30 bg-green-500/10 px-3 py-0.5 text-[10px] font-semibold text-green-600"
          >
            <ChartArea /> {cert.score}%
          </Badge>
        </div>

        {/* Skills chips */}
        {cert.skills?.length > 0 && (
          <div className="mt-4 flex flex-wrap items-center justify-center gap-1.5">
            {cert.skills.map((s) => (
              <span
                key={s}
                className="rounded-full border border-border-brand bg-surface2 px-2 py-0.5 text-[10px] font-medium text-muted-strong"
              >
                {s}
              </span>
            ))}
          </div>
        )}

        {/* Divider */}
        <div className="my-5 h-px w-3/4 bg-border-brand" />

        {/* Footer meta */}
        <div className="grid w-full max-w-md grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="flex flex-col items-center">
            <span className="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-muted-text">
              <Calendar1 /> Issued
            </span>
            <span className="mt-0.5 text-xs font-medium text-primary-text">
              {new Date(cert.issuedDate).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-muted-text">
               Credential ID
            </span>
            <span className="mt-0.5 truncate text-xs font-medium text-primary-text">
              {cert.credentialId}
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-text">
              ✍️ Issued By
            </span>
            <span className="mt-0.5 text-xs font-medium text-primary-text">
              Ejaztech LMS
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificatePreview;