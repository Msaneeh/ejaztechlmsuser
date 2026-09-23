import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Accordion } from "@/components/ui/accordion";
import PhaseHeader from "@/components/PhaseHeader";
import PhaseAccordionItem from "@/components/PhaseAccordionItem";
import CapstoneProjectCard from "@/components/CapstoneProjectCard";
import EvaluationModal from "@/components/EvaluationModal";
import WeekDetailModal from "@/components/WeekDetailModal";
import { phasesData, capstoneProject } from "@/mockdata/phasesData";

const Phase = () => {
  const navigate = useNavigate();

  // Modal state
  const [evalLink, setEvalLink] = useState(null);
  const [selectedWeek, setSelectedWeek] = useState(null);      // week object
  const [selectedPhase, setSelectedPhase] = useState(null);    // phase name

  const handleOpenWeek = (week, phaseName) => {
    setSelectedWeek(week);
    setSelectedPhase(phaseName);
  };

  const handleCloseWeek = () => {
    setSelectedWeek(null);
    setSelectedPhase(null);
  };

  const handleStartLesson = (link) => {
    // Option 1: navigate inside the app
    // navigate(`/lesson/${...}`);

    // Option 2: open external URL
    window.open(link, "_blank");

    handleCloseWeek();
  };

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
              onOpenWeek={handleOpenWeek}
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

      <WeekDetailModal
        open={!!selectedWeek}
        week={selectedWeek}
        phaseName={selectedPhase}
        onClose={handleCloseWeek}
        onStartLesson={handleStartLesson}
      />
    </div>
  );
};

export default Phase;