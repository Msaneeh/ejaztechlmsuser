import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { File, Bell, LockKeyhole, Palette, User } from "lucide-react";

const tabs = [
  { key: "account", label: "Account", emoji: <User /> },
  { key: "learning", label: "Learning", emoji: <File /> },
  { key: "notifications", label: "Notifications", emoji: <Bell /> },
  { key: "privacy", label: "Privacy", emoji: <LockKeyhole /> },
  { key: "appearance", label: "Appearance", emoji: <Palette /> },
];

const SettingsTabs = () => (
  <div className="shrink-0 border-b border-border-brand px-3 pt-3 sm:px-4 sm:pt-4">
    <TabsList className="h-auto w-full justify-start gap-1 overflow-x-auto rounded-full bg-surface2 p-1">
      {tabs.map((t) => (
        <TabsTrigger
          key={t.key}
          value={t.key}
          className="shrink-0 rounded-full px-3 py-1.5 text-xs font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm"
        >
          <span className="mr-1.5">{t.emoji}</span>
          {t.label}
        </TabsTrigger>
      ))}
    </TabsList>
  </div>
);

export default SettingsTabs;