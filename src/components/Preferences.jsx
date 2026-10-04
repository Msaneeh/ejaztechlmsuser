import Toggle from "./Toggle";

const Preferences = ({ preferences, togglePref }) => {
  return (
    <div className="glass-panel relative overflow-hidden rounded-[2rem] p-5 shadow-xs sm:p-6">
      <div className="pointer-events-none absolute -left-10 -top-16 h-48 w-48 rounded-full bg-accent-dim blur-[50px]" />
      <div className="pointer-events-none absolute -bottom-20 -right-12 h-60 w-60 rounded-full bg-gold-dim blur-[50px]" />

      <div className="relative z-10 space-y-3">
        <h3 className="text-sm font-semibold tracking-tight text-primary-text">
          Preferences
        </h3>

        <Toggle
          label="Email notifications"
          description="Get notified when new lessons or tasks are assigned."
          checked={preferences.emailNotifications}
          onChange={() => togglePref("emailNotifications")}
        />
        <Toggle
          label="Weekly digest"
          description="Receive a weekly summary of your progress."
          checked={preferences.weeklyDigest}
          onChange={() => togglePref("weeklyDigest")}
        />
        <Toggle
          label="Public profile"
          description="Let other learners view your profile and stats."
          checked={preferences.publicProfile}
          onChange={() => togglePref("publicProfile")}
        />
      </div>
    </div>
  );
};

export default Preferences;