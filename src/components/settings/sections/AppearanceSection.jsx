import SettingsSection from "../ui/SettingsSection";
import SettingsToggle from "../ui/SettingsToggle";
import { themeOptions } from "@/mockdata/settingsData";
import { useTheme } from "@/store/ThemeContext";

const AppearanceSection = ({ settings, update }) => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="mt-0 space-y-4">
      <SettingsSection
        title="Theme"
        description="Choose how Ejaztech LMS looks to you."
      >
        <div className="grid grid-cols-3 gap-2">
          {themeOptions.map((t) => (
            <button
              key={t.value}
              onClick={() => setTheme(t.value)}
              className={`flex flex-col items-center gap-1 rounded-2xl border p-3 text-xs font-medium transition-colors ${
                theme === t.value
                  ? "border-primary-text bg-surface2"
                  : "border-border-brand bg-surface2/60 hover:border-primary-text/40"
              }`}
            >
              <span className="text-lg">{t.emoji}</span>
              <span className="text-primary-text">{t.label}</span>
            </button>
          ))}
        </div>
      </SettingsSection>

      <SettingsSection
        title="Accessibility"
        description="Fine-tune motion and layout density."
      >
        <div className="space-y-2">
          <SettingsToggle
            label="Reduced motion"
            description="Minimize animations across the app."
            checked={settings.appearance.reducedMotion}
            onChange={() =>
              update(
                "appearance.reducedMotion",
                !settings.appearance.reducedMotion
              )
            }
          />
          <SettingsToggle
            label="Compact mode"
            description="Fit more content on screen with tighter spacing."
            checked={settings.appearance.compactMode}
            onChange={() =>
              update(
                "appearance.compactMode",
                !settings.appearance.compactMode
              )
            }
          />
        </div>
      </SettingsSection>
    </div>
  );
};

export default AppearanceSection;