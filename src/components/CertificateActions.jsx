import { Button } from "@/components/ui/button";
import { Download, Link, Verified } from "lucide-react";

const CertificateActions = ({ onDownload, onShare, onVerify }) => {
  return (
    <div className="mt-4 flex flex-wrap items-center gap-2">
      <Button
        onClick={onDownload}
        className="btn-primary h-9 rounded-full px-4 text-xs font-medium"
      >
        <Download /> Download PDF
      </Button>

      <Button
        onClick={onShare}
        className="btn-glass h-9 rounded-full px-4 text-xs font-medium"
      >
        <Link /> Share
      </Button>

      <Button
        variant="ghost"
        onClick={onVerify}
        className="btn-glass h-9 rounded-full px-4 text-xs font-medium"
      >
        <Verified /> Verify
      </Button>
    </div>
  );
};

export default CertificateActions;