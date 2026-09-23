import SettingsSection from "../ui/SettingsSection";
import SettingsToggle from "../ui/SettingsToggle";

const PrivacySection = ({ settings, update }) => (
  <div className="mt-0 space-y-4">
    <SettingsSection
      title="Profile Visibility"
      description="Control who can see your profile and progress."
    >
      <div className="space-y-2">
        <SettingsToggle
          label="Public profile"
          description="Anyone with the link can view your profile."
          checked={settings.privacy.publicProfile}
          onChange={() =>
            update("privacy.publicProfile", !settings.privacy.publicProfile)
          }
        />
        <SettingsToggle
          label="Show XP publicly"
          description="Display your XP on the public leaderboard."
          checked={settings.privacy.showXpPublicly}
          onChange={() =>
            update("privacy.showXpPublicly", !settings.privacy.showXpPublicly)
          }
        />
        <SettingsToggle
          label="Show streak publicly"
          description="Let others see your learning streak."
          checked={settings.privacy.showStreakPublicly}
          onChange={() =>
            update(
              "privacy.showStreakPublicly",
              !settings.privacy.showStreakPublicly
            )
          }
        />
        <SettingsToggle
          label="Allow direct messages"
          description="Other learners can send you messages."
          checked={settings.privacy.allowMessages}
          onChange={() =>
            update("privacy.allowMessages", !settings.privacy.allowMessages)
          }
        />
      </div>
    </SettingsSection>
  </div>
);

export default PrivacySection;