import DashboardCard from "@/components/DashboardCard";
import LeaderBordList from "@/components/LeaderBordList";
import Streak from "@/components/Streak";
import React from "react";

const DashBord = () => {
  return (
    <div className="flex h-[calc(100vh-64px)] flex-col gap-4 p-4 sm:p-5 overflow-hidden">
      <div className="shrink-0">
        <DashboardCard />
      </div>

      <div className="grid min-h-0 flex-1 grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="min-h-0">
          <LeaderBordList />
        </div>
        <div className="min-h-0">
          <Streak />
        </div>
      </div>
    </div>
  );
};

export default DashBord;