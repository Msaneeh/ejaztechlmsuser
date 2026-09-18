import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const DashboardCard = () => {
  const currentHour = new Date().getHours();
  const user = "Sani";

  const getGreeting = () => {
    if (currentHour < 12) return "Good morning";
    if (currentHour < 18) return "Good afternoon";
    return "Good evening";
  };

  return (
    <div className="glass-panel relative w-full overflow-hidden rounded-[2rem] p-4 sm:p-5 shadow-xs">
      <div className="pointer-events-none absolute -left-10 -top-16 h-48 w-48 rounded-full bg-accent-dim blur-[50px]" />
      <div className="pointer-events-none absolute -bottom-20 -right-12 h-60 w-60 rounded-full bg-gold-dim blur-[50px]" />

      <Card className="relative z-10 card-glass rounded-2xl py-3 gap-3">
        <CardHeader className="space-y-0.5 pb-0">
          <CardTitle className="text-2xl font-semibold tracking-tight text-primary-text">
            {getGreeting()}, <span className="text-muted-text">{user}</span>
          </CardTitle>
          <CardDescription className="border-l-[3px] border-border-brand pl-3 text-xs font-normal tracking-wide text-muted-text">
            Keep going, you're making progress
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-3 pt-0">
          <div className="space-y-1.5">
            <h2 className="text-lg font-semibold leading-tight text-primary-text">
              AI From Zero To Hero — Cohort 3
            </h2>
            <Badge
              variant="outline"
              className="rounded-full border-border-brand bg-surface2 px-3 py-0.5 text-[11px] font-medium tracking-wide text-muted-strong"
            >
              Phase 2: Supervised Machine Learning
            </Badge>
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs font-medium text-muted-text">
              <span>Progress</span>
              <span>50%</span>
            </div>
            <Progress
              value={50}
              className="h-3 bg-surface2 [&>div]:bg-green-500 [&>div]:rounded-full"
            />
            <p className="text-left text-[11px] font-normal tracking-wide text-muted-text">
              2/4 weeks completed
            </p>
          </div>

          <div className="flex justify-start">
            <Button className="btn-primary px-5 py-3.5 text-xs font-semibold tracking-wide">
              Continue Learning
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardCard;