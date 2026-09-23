import SettingsSection from "../ui/SettingsSection";
import SettingsToggle from "../ui/SettingsToggle";
import { prettyLabel } from "@/lib/prettyLabel";

const NotificationsSection = ({ settings, update }) => (
  <div className="mt-0 space-y-4">
    <SettingsSection
      title="Email Notifications"
      description="Choose what lands in your inbox."
    >
      <div className="space-y-2">
        {Object.entries(settings.notifications.email).map(([key, value]) => (
          <SettingsToggle
            key={key}
            label={prettyLabel(key)}
            checked={value}
            onChange={() =>
              update(`notifications.email.${key}`, !value)
            }
          />
        ))}
      </div>
    </SettingsSection>

    <SettingsSection
      title="Push Notifications"
      description="Real-time alerts on your device."
    >
      <div className="space-y-2">
        {Object.entries(settings.notifications.push).map(([key, value]) => (
          <SettingsToggle
            key={key}
            label={prettyLabel(key)}
            checked={value}
            onChange={() =>
              update(`notifications.push.${key}`, !value)
            }
          />
        ))}
      </div>
    </SettingsSection>
  </div>
);

export default NotificationsSection;