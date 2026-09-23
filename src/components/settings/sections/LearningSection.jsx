import SettingsSection from "../ui/SettingsSection";
import SettingsToggle from "../ui/SettingsToggle";
import SettingsRadioOption from "../ui/SettingsRadioOption";
import { studyTimeOptions, playbackSpeedOptions } from "@/mockdata/settingsData";

const LearningSection = ({ settings, update }) => (
  <div className="mt-0 space-y-4">
    <SettingsSection
      title="Daily Goal"
      description="How much XP do you want to earn each day?"
    >
      <div className="flex items-center gap-4">
        <input
          type="range"
          min="20"
          max="500"
          step="20"
          value={settings.learning.dailyGoalXp}
          onChange={(e) =>
            update("learning.dailyGoalXp", Number(e.target.value))
          }
          className="h-1.5 w-full max-w-sm cursor-pointer appearance-none rounded-full bg-surface2 accent-primary-text"
        />
        <span className="shrink-0 text-sm font-semibold text-primary-text">
          {settings.learning.dailyGoalXp} XP
        </span>
      </div>
    </SettingsSection>

    <SettingsSection
      title="Weekly Study Days"
      description="Target number of days to study each week."
    >
      <div className="flex flex-wrap items-center gap-2">
        {[3, 4, 5, 6, 7].map((n) => (
          <button
            key={n}
            onClick={() => update("learning.weeklyGoalDays", n)}
            className={`h-9 min-w-[40px] rounded-full border px-3 text-xs font-medium transition-colors ${
              settings.learning.weeklyGoalDays === n
                ? "border-primary-text bg-primary-text text-bg"
                : "border-border-brand bg-surface2 text-muted-strong hover:border-primary-text/40"
            }`}
          >
            {n} days
          </button>
        ))}
      </div>
    </SettingsSection>

    <SettingsSection
      title="Preferred Study Time"
      description="When do you usually learn best?"
    >
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {studyTimeOptions.map((opt) => (
          <SettingsRadioOption
            key={opt.value}
            selected={settings.learning.preferredStudyTime === opt.value}
            label={opt.label}
            onClick={() => update("learning.preferredStudyTime", opt.value)}
          />
        ))}
      </div>
    </SettingsSection>

    <SettingsSection
      title="Video Playback"
      description="Adjust how lesson videos play."
    >
      <div className="space-y-2">
        <SettingsToggle
          label="Auto-play videos"
          description="Start playing the next video automatically."
          checked={settings.learning.autoPlayVideos}
          onChange={() =>
            update(
              "learning.autoPlayVideos",
              !settings.learning.autoPlayVideos
            )
          }
        />
        <SettingsToggle
          label="Show subtitles by default"
          description="Display captions when available."
          checked={settings.learning.showSubtitles}
          onChange={() =>
            update("learning.showSubtitles", !settings.learning.showSubtitles)
          }
        />
        <div className="flex items-center justify-between gap-3 rounded-2xl border border-border-brand bg-surface2/60 p-3">
          <div>
            <p className="text-sm font-medium text-primary-text">
              Playback speed
            </p>
            <p className="text-[11px] text-muted-text">
              Default speed for lesson videos.
            </p>
          </div>
          <select
            value={settings.learning.playbackSpeed}
            onChange={(e) =>
              update("learning.playbackSpeed", e.target.value)
            }
            className="rounded-xl border border-border-brand bg-surface2 px-3 py-1.5 text-xs font-medium text-primary-text outline-none focus:border-border"
          >
            {playbackSpeedOptions.map((s) => (
              <option key={s} value={s}>
                {s}x
              </option>
            ))}
          </select>
        </div>
      </div>
    </SettingsSection>
  </div>
);

export default LearningSection;