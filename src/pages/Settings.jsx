import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  settingsData,
  studyTimeOptions,
  playbackSpeedOptions,
  themeOptions,
} from "@/mockdata/settingsData";

const Settings = () => {
  const navigate = useNavigate();

  const [settings, setSettings] = useState(settingsData);
  const [tab, setTab] = useState("account");
  const [saved, setSaved] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [deleteInput, setDeleteInput] = useState("");
  const [showChangePassword, setShowChangePassword] = useState(false);

  const [passwordForm, setPasswordForm] = useState({
    current: "",
    next: "",
    confirm: "",
  });

  const tabs = [
    { key: "account", label: "Account", emoji: "👤" },
    { key: "learning", label: "Learning", emoji: "📚" },
    { key: "notifications", label: "Notifications", emoji: "🔔" },
    { key: "privacy", label: "Privacy", emoji: "🔒" },
    { key: "appearance", label: "Appearance", emoji: "🎨" },
  ];

  const flashSaved = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 1800);
  };

  // Generic updater for nested settings
  const update = (path, value) => {
    setSettings((prev) => {
      const next = { ...prev };
      const keys = path.split(".");
      let ref = next;
      for (let i = 0; i < keys.length - 1; i++) {
        ref[keys[i]] = { ...ref[keys[i]] };
        ref = ref[keys[i]];
      }
      ref[keys[keys.length - 1]] = value;
      return next;
    });
  };

  const handlePasswordSubmit = () => {
    if (
      !passwordForm.current ||
      !passwordForm.next ||
      passwordForm.next !== passwordForm.confirm
    ) {
      return;
    }
    // TODO: PATCH /api/users/me/password
    console.log("Password change requested");
    setShowChangePassword(false);
    setPasswordForm({ current: "", next: "", confirm: "" });
    flashSaved();
  };

  const handleDeleteAccount = () => {
    if (deleteInput !== "DELETE") return;
    // TODO: DELETE /api/users/me
    console.log("Account deleted");
    setShowDelete(false);
    navigate("/auth");
  };

  return (
    <div className="flex h-full flex-col gap-4 overflow-hidden p-4 sm:p-6 lg:p-8">
      {/* Page header */}
      <div className="shrink-0">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border-brand bg-surface2 text-muted-text transition-all hover:bg-surface2/70 hover:text-primary-text hover:border-border cursor-pointer"
            aria-label="Go back"
          >
            ←
          </button>
          <div className="flex items-center gap-2">
            <span className="text-xl">⚙️</span>
            <h1 className="text-2xl font-semibold tracking-tight text-primary-text">
              Settings
            </h1>
            {saved && (
              <Badge
                variant="outline"
                className="rounded-full border-green-500/30 bg-green-500/15 px-2.5 py-0.5 text-[10px] font-medium text-green-600"
              >
                ✓ Saved
              </Badge>
            )}
          </div>
        </div>
        <p className="mt-1 ml-12 text-sm text-muted-text">
          Manage your account, learning preferences, and privacy.
        </p>
      </div>

      {/* Tabs wrapper */}
      <div className="glass-panel relative flex min-h-0 flex-1 flex-col overflow-hidden rounded-[2rem] shadow-xs">
        <div className="pointer-events-none absolute -left-10 -top-16 h-48 w-48 rounded-full bg-accent-dim blur-[50px]" />
        <div className="pointer-events-none absolute -bottom-20 -right-12 h-60 w-60 rounded-full bg-gold-dim blur-[50px]" />

        <Tabs
          value={tab}
          onValueChange={setTab}
          className="relative z-10 flex h-full min-h-0 flex-col"
        >
          {/* Tab list — scrollable on small screens */}
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

          {/* Scrollable content */}
          <div className="min-h-0 flex-1 overflow-y-auto p-4 sm:p-5">
            {/* ---------- ACCOUNT ---------- */}
            <TabsContent value="account" className="mt-0 space-y-4">
              <Section
                title="Account Information"
                description="Update your email and username."
              >
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Field label="Email">
                    <input
                      type="email"
                      value={settings.account.email}
                      onChange={(e) => update("account.email", e.target.value)}
                      className="w-full rounded-xl border border-border-brand bg-surface2 px-3 py-2 text-sm text-primary-text outline-none focus:border-border"
                    />
                  </Field>
                  <Field label="Username">
                    <input
                      type="text"
                      value={settings.account.username}
                      onChange={(e) =>
                        update("account.username", e.target.value)
                      }
                      className="w-full rounded-xl border border-border-brand bg-surface2 px-3 py-2 text-sm text-primary-text outline-none focus:border-border"
                    />
                  </Field>
                </div>
              </Section>

              <Section
                title="Password"
                description={`Last changed on ${new Date(
                  settings.account.passwordLastChanged
                ).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}`}
              >
                <Button
                  onClick={() => setShowChangePassword(true)}
                  className="btn-glass h-9 rounded-full px-4 text-xs font-medium"
                >
                  🔑 Change Password
                </Button>
              </Section>

              <Section
                title="Two-Factor Authentication"
                description="Add an extra layer of security to your account."
              >
                <Toggle
                  label="Enable 2FA"
                  description={
                    settings.account.twoFactorEnabled
                      ? "Two-factor authentication is on."
                      : "Protect your account with a second verification step."
                  }
                  checked={settings.account.twoFactorEnabled}
                  onChange={() =>
                    update(
                      "account.twoFactorEnabled",
                      !settings.account.twoFactorEnabled
                    )
                  }
                />
              </Section>
            </TabsContent>

            {/* ---------- LEARNING ---------- */}
            <TabsContent value="learning" className="mt-0 space-y-4">
              <Section
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
              </Section>

              <Section
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
              </Section>

              <Section
                title="Preferred Study Time"
                description="When do you usually learn best?"
              >
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {studyTimeOptions.map((opt) => (
                    <RadioOption
                      key={opt.value}
                      selected={
                        settings.learning.preferredStudyTime === opt.value
                      }
                      label={opt.label}
                      onClick={() =>
                        update("learning.preferredStudyTime", opt.value)
                      }
                    />
                  ))}
                </div>
              </Section>

              <Section
                title="Video Playback"
                description="Adjust how lesson videos play."
              >
                <div className="space-y-2">
                  <Toggle
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
                  <Toggle
                    label="Show subtitles by default"
                    description="Display captions when available."
                    checked={settings.learning.showSubtitles}
                    onChange={() =>
                      update(
                        "learning.showSubtitles",
                        !settings.learning.showSubtitles
                      )
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
              </Section>
            </TabsContent>

            {/* ---------- NOTIFICATIONS ---------- */}
            <TabsContent value="notifications" className="mt-0 space-y-4">
              <Section
                title="Email Notifications"
                description="Choose what lands in your inbox."
              >
                <div className="space-y-2">
                  {Object.entries(settings.notifications.email).map(
                    ([key, value]) => (
                      <Toggle
                        key={key}
                        label={prettyLabel(key)}
                        checked={value}
                        onChange={() =>
                          update(`notifications.email.${key}`, !value)
                        }
                      />
                    )
                  )}
                </div>
              </Section>

              <Section
                title="Push Notifications"
                description="Real-time alerts on your device."
              >
                <div className="space-y-2">
                  {Object.entries(settings.notifications.push).map(
                    ([key, value]) => (
                      <Toggle
                        key={key}
                        label={prettyLabel(key)}
                        checked={value}
                        onChange={() =>
                          update(`notifications.push.${key}`, !value)
                        }
                      />
                    )
                  )}
                </div>
              </Section>
            </TabsContent>

            {/* ---------- PRIVACY ---------- */}
            <TabsContent value="privacy" className="mt-0 space-y-4">
              <Section
                title="Profile Visibility"
                description="Control who can see your profile and progress."
              >
                <div className="space-y-2">
                  <Toggle
                    label="Public profile"
                    description="Anyone with the link can view your profile."
                    checked={settings.privacy.publicProfile}
                    onChange={() =>
                      update(
                        "privacy.publicProfile",
                        !settings.privacy.publicProfile
                      )
                    }
                  />
                  <Toggle
                    label="Show XP publicly"
                    description="Display your XP on the public leaderboard."
                    checked={settings.privacy.showXpPublicly}
                    onChange={() =>
                      update(
                        "privacy.showXpPublicly",
                        !settings.privacy.showXpPublicly
                      )
                    }
                  />
                  <Toggle
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
                  <Toggle
                    label="Allow direct messages"
                    description="Other learners can send you messages."
                    checked={settings.privacy.allowMessages}
                    onChange={() =>
                      update(
                        "privacy.allowMessages",
                        !settings.privacy.allowMessages
                      )
                    }
                  />
                </div>
              </Section>
            </TabsContent>

            {/* ---------- APPEARANCE ---------- */}
            <TabsContent value="appearance" className="mt-0 space-y-4">
              <Section
                title="Theme"
                description="Choose how Ejaztech LMS looks to you."
              >
                <div className="grid grid-cols-3 gap-2">
                  {themeOptions.map((t) => (
                    <button
                      key={t.value}
                      onClick={() => update("appearance.theme", t.value)}
                      className={`flex flex-col items-center gap-1 rounded-2xl border p-3 text-xs font-medium transition-colors ${
                        settings.appearance.theme === t.value
                          ? "border-primary-text bg-surface2"
                          : "border-border-brand bg-surface2/60 hover:border-primary-text/40"
                      }`}
                    >
                      <span className="text-lg">{t.emoji}</span>
                      <span className="text-primary-text">{t.label}</span>
                    </button>
                  ))}
                </div>
              </Section>

              <Section
                title="Accessibility"
                description="Fine-tune motion and layout density."
              >
                <div className="space-y-2">
                  <Toggle
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
                  <Toggle
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
              </Section>
            </TabsContent>
          </div>

          {/* Footer save bar */}
          <div className="shrink-0 border-t border-border-brand p-3 sm:p-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-[11px] text-muted-text">
                Changes are saved locally for now. Hook up to your API when ready.
              </p>
              <div className="flex items-center gap-2">
                <Button
                  onClick={() => setSettings(settingsData)}
                  className="btn-glass h-9 rounded-full px-4 text-xs font-medium"
                >
                  Reset
                </Button>
                <Button
                  onClick={flashSaved}
                  className="btn-primary h-9 rounded-full px-4 text-xs font-medium"
                >
                  {saved ? "✓ Saved" : "Save Changes"}
                </Button>
              </div>
            </div>
          </div>
        </Tabs>

        {/* Danger zone — separated below tabs, always visible at bottom of content */}
      </div>

      {/* Danger zone card (outside the tabs shell for emphasis) */}
      <div className="glass-panel relative shrink-0 overflow-hidden rounded-[2rem] border border-red-500/20 p-4 shadow-xs sm:p-5">
        <div className="pointer-events-none absolute -left-10 -top-16 h-48 w-48 rounded-full bg-red-500/10 blur-[50px]" />

        <div className="relative z-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-sm font-semibold tracking-tight text-red-500">
              ⚠️ Danger Zone
            </h3>
            <p className="text-[11px] text-muted-text">
              Permanently delete your account and all associated data.
            </p>
          </div>
          <Button
            onClick={() => setShowDelete(true)}
            className="h-9 shrink-0 rounded-full border border-red-500/30 bg-red-500/10 px-4 text-xs font-medium text-red-500 transition-colors hover:bg-red-500/20"
          >
            Delete Account
          </Button>
        </div>
      </div>

      {/* Change Password dialog */}
      <Dialog open={showChangePassword} onOpenChange={setShowChangePassword}>
        <DialogContent className="glass-panel max-w-md rounded-[1.75rem] border-border-brand">
          <DialogHeader>
            <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-xl">
              🔑
            </div>
            <DialogTitle className="text-center text-lg font-semibold tracking-tight text-primary-text">
              Change Password
            </DialogTitle>
            <DialogDescription className="text-center text-sm text-muted-text">
              Enter your current password and choose a new one.
            </DialogDescription>
          </DialogHeader>

          <div className="mt-2 space-y-3">
            <Field label="Current Password">
              <input
                type="password"
                value={passwordForm.current}
                onChange={(e) =>
                  setPasswordForm((p) => ({ ...p, current: e.target.value }))
                }
                className="w-full rounded-xl border border-border-brand bg-surface2 px-3 py-2 text-sm text-primary-text outline-none focus:border-border"
              />
            </Field>
            <Field label="New Password">
              <input
                type="password"
                value={passwordForm.next}
                onChange={(e) =>
                  setPasswordForm((p) => ({ ...p, next: e.target.value }))
                }
                className="w-full rounded-xl border border-border-brand bg-surface2 px-3 py-2 text-sm text-primary-text outline-none focus:border-border"
              />
            </Field>
            <Field label="Confirm New Password">
              <input
                type="password"
                value={passwordForm.confirm}
                onChange={(e) =>
                  setPasswordForm((p) => ({ ...p, confirm: e.target.value }))
                }
                className="w-full rounded-xl border border-border-brand bg-surface2 px-3 py-2 text-sm text-primary-text outline-none focus:border-border"
              />
              {passwordForm.next &&
                passwordForm.confirm &&
                passwordForm.next !== passwordForm.confirm && (
                  <p className="mt-1 text-[11px] text-red-500">
                    Passwords do not match
                  </p>
                )}
            </Field>
          </div>

          <DialogFooter className="mt-4 flex-col gap-2 sm:flex-row sm:justify-center">
            <Button
              variant="ghost"
              onClick={() => setShowChangePassword(false)}
              className="btn-glass h-9 rounded-full px-4 text-xs font-medium"
            >
              Cancel
            </Button>
            <Button
              onClick={handlePasswordSubmit}
              disabled={
                !passwordForm.current ||
                !passwordForm.next ||
                passwordForm.next !== passwordForm.confirm
              }
              className="btn-primary h-9 rounded-full px-4 text-xs font-medium disabled:opacity-40"
            >
              Update Password
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Account dialog */}
      <Dialog open={showDelete} onOpenChange={setShowDelete}>
        <DialogContent className="glass-panel max-w-md rounded-[1.75rem] border-red-500/30">
          <DialogHeader>
            <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-red-500/15 text-xl">
              ⚠️
            </div>
            <DialogTitle className="text-center text-lg font-semibold tracking-tight text-primary-text">
              Delete your account?
            </DialogTitle>
            <DialogDescription className="text-center text-sm text-muted-text">
              This action is permanent and cannot be undone. All your progress,
              certificates, and submissions will be deleted.
            </DialogDescription>
          </DialogHeader>

          <div className="mt-2">
            <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-wider text-muted-text">
              Type <span className="text-red-500">DELETE</span> to confirm
            </label>
            <input
              type="text"
              value={deleteInput}
              onChange={(e) => setDeleteInput(e.target.value)}
              placeholder="DELETE"
              className="w-full rounded-xl border border-border-brand bg-surface2 px-3 py-2 text-sm text-primary-text outline-none focus:border-red-500/50"
            />
          </div>

          <DialogFooter className="mt-4 flex-col gap-2 sm:flex-row sm:justify-center">
            <Button
              variant="ghost"
              onClick={() => {
                setShowDelete(false);
                setDeleteInput("");
              }}
              className="btn-glass h-9 rounded-full px-4 text-xs font-medium"
            >
              Cancel
            </Button>
            <Button
              onClick={handleDeleteAccount}
              disabled={deleteInput !== "DELETE"}
              className="h-9 rounded-full bg-red-500 px-4 text-xs font-medium text-white hover:bg-red-600 disabled:opacity-40"
            >
              Permanently Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

/* ---------- Reusable components ---------- */

const Section = ({ title, description, children }) => (
  <div className="rounded-2xl border border-border-brand bg-surface2/40 p-4">
    <h3 className="text-sm font-semibold tracking-tight text-primary-text">
      {title}
    </h3>
    {description && (
      <p className="mt-0.5 text-[11px] text-muted-text">{description}</p>
    )}
    <div className="mt-3">{children}</div>
  </div>
);

const Field = ({ label, children }) => (
  <div>
    <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-wider text-muted-text">
      {label}
    </label>
    {children}
  </div>
);

const Toggle = ({ label, description, checked, onChange }) => (
  <button
    type="button"
    onClick={onChange}
    className="flex w-full items-center justify-between gap-3 rounded-2xl border border-border-brand bg-surface2/60 p-3 text-left transition-colors hover:bg-surface2"
  >
    <div className="min-w-0">
      <p className="text-sm font-medium text-primary-text">{label}</p>
      {description && (
        <p className="text-[11px] text-muted-text">{description}</p>
      )}
    </div>
    <span
      className={`relative flex h-5 w-9 shrink-0 items-center rounded-full transition-colors ${
        checked ? "bg-primary-text" : "bg-border-brand"
      }`}
    >
      <span
        className={`absolute h-4 w-4 rounded-full bg-bg shadow-sm transition-transform ${
          checked ? "translate-x-4" : "translate-x-0.5"
        }`}
      />
    </span>
  </button>
);

const RadioOption = ({ label, selected, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`flex w-full items-center gap-3 rounded-2xl border p-3 text-left transition-colors ${
      selected
        ? "border-primary-text bg-surface2"
        : "border-border-brand bg-surface2/60 hover:border-primary-text/40"
    }`}
  >
    <span
      className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${
        selected ? "border-primary-text" : "border-border-brand"
      }`}
    >
      {selected && (
        <span className="h-2 w-2 rounded-full bg-primary-text" />
      )}
    </span>
    <span className="text-sm text-primary-text">{label}</span>
  </button>
);

/* ---------- Helpers ---------- */

const prettyLabel = (key) =>
  key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (c) => c.toUpperCase())
    .trim();

export default Settings;