import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CertificateHeader from "@/components/CertificateHeader";
import CertificateCard from "@/components/CertificateCard";
import ShareCertificateModal from "@/components/ShareCertificateModal";
import { certificatesData } from "@/mockdata/certificatesData";

const Certificates = () => {
  const navigate = useNavigate();

  const [shareCert, setShareCert] = useState(null);
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(1); // Phase 1 open by default

  const toggle = (id) => setExpanded((prev) => (prev === id ? null : id));

  const handleCopy = (url) => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = (cert) => {
    // Placeholder — hook up to a real PDF generator later
    console.log("Downloading certificate:", cert.credentialId);
  };

  return (
    <div className="flex h-full flex-col gap-4 overflow-hidden p-4 sm:p-6 lg:p-8">
      <CertificateHeader Back={() => navigate(-1)} />

      <div className="min-h-0 flex-1 space-y-4 overflow-y-auto pr-1">
        {certificatesData.map((cert) => (
          <CertificateCard
            key={cert.id}
            cert={cert}
            isOpen={expanded === cert.id}
            onToggle={toggle}
            onDownload={handleDownload}
            onShare={setShareCert}
            onVerify={(url) => window.open(url, "_blank")}
          />
        ))}
      </div>

      <ShareCertificateModal
        open={!!shareCert}
        cert={shareCert}
        copied={copied}
        onCopy={handleCopy}
        onClose={() => setShareCert(null)}
      />
    </div>
  );
};

export default Certificates;