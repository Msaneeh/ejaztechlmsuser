import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Accordion } from "@/components/ui/accordion";
import PhaseHeader from "@/components/PhaseHeader";
import PhaseAccordionItem from "@/components/PhaseAccordionItem";
import CapstoneProjectCard from "@/components/CapstoneProjectCard";
import EvaluationModal from "@/components/EvaluationModal";
import { phasesData, capstoneProject } from "@/mockdata/phasesData";

const Phase = () => {
  const navigate = useNavigate();
  const [evalLink, setEvalLink] = useState(null);

  return (
    <div className="flex h-full flex-col gap-4 overflow-hidden p-4 sm:p-6 lg:p-8">
      <PhaseHeader />

      <div className="min-h-0 flex-1 overflow-y-auto pr-1 space-y-4">
        <Accordion type="single" collapsible defaultValue="phase-2">
          {phasesData.map((phase) => (
            <PhaseAccordionItem
              key={phase.id}
              phase={phase}
              onJoinEvaluation={setEvalLink}
            />
          ))}
        </Accordion>

        <CapstoneProjectCard
          project={capstoneProject}
          onView={() => navigate("/project")}
        />
      </div>

      <EvaluationModal
        open={!!evalLink}
        link={evalLink}
        onClose={() => setEvalLink(null)}
      />
    </div>
  );
};

export default Phase;