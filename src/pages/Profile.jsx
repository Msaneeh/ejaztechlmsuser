import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { profileData } from "@/mockdata/profileData";

const Profile = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(profileData);
  const [editing, setEditing] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const [form, setForm] = useState({
    name: profile.name,
    username: profile.username,
    email: profile.email,
    location: profile.location,
    bio: profile.bio,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setProfile((prev) => ({ ...prev, ...form }));
    setEditing(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 1800);
  };

  const handleCancel = () => {
    setForm({
      name: profile.name,
      username: profile.username,
      email: profile.email,
      location: profile.location,
      bio: profile.bio,
    });
    setEditing(false);
  };

  const togglePref = (key) => {
    setProfile((prev) => ({
      ...prev,
      preferences: { ...prev.preferences, [key]: !prev.preferences[key] },
    }));
  };

  const statCards = [
    { label: "Total XP", value: profile.stats.totalXp.toLocaleString(), emoji: "⚡" },
    { label: "Rank", value: `#${profile.stats.rank}`, emoji: "🏆" },
    { label: "Streak", value: `${profile.stats.streak} days`, emoji: "🔥" },
    { label: "Phases Done", value: profile.stats.phasesCompleted, emoji: "📚" },
    { label: "Tasks", value: profile.stats.tasksSubmitted, emoji: "📝" },
    { label: "Certificates", value: profile.stats.certificatesEarned, emoji: "🎓" },
  ];

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
            <span className="text-xl">👤</span>
            <h1 className="text-2xl font-semibold tracking-tight text-primary-text">
              Profile
            </h1>
          </div>
        </div>
        <p className="mt-1 ml-12 text-sm text-muted-text">
          Manage your account info and view your learning stats.
        </p>
      </div>

      {/* Scrollable content */}
      <div className="min-h-0 flex-1 space-y-4 overflow-y-auto pr-1">
        {/* Hero card — avatar + name + main actions */}
        <div className="glass-panel relative overflow-hidden rounded-[2rem] p-5 shadow-xs sm:p-6">
          <div className="pointer-events-none absolute -left-10 -top-16 h-48 w-48 rounded-full bg-accent-dim blur-[50px]" />
          <div className="pointer-events-none absolute -bottom-20 -right-12 h-60 w-60 rounded-full bg-gold-dim blur-[50px]" />

          <div className="relative z-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              {/* Avatar */}
              <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary-text text-2xl font-bold text-bg sm:h-20 sm:w-20">
                {profile.name.charAt(0)}
                <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-bg bg-gold text-[10px] font-bold text-white">
                  {profile.stats.rank}
                </span>
              </div>

              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-xl font-semibold tracking-tight text-primary-text sm:text-2xl">
                    {profile.name}
                  </h2>
                  <Badge
                    variant="outline"
                    className="rounded-full border-border-brand bg-surface2 px-2.5 py-0.5 text-[10px] font-medium text-muted-strong"
                  >
                    {profile.role}
                  </Badge>
                </div>
                <p className="mt-0.5 text-xs text-muted-text sm:text-sm">
                  @{profile.username} • {profile.email}
                </p>
                <p className="mt-1 text-[11px] text-muted-text">
                  📍 {profile.location} • Joined{" "}
                  {new Date(profile.joinedDate).toLocaleDateString("en-US", {
                    month: "short",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-2">
              {!editing ? (
                <Button
                  onClick={() => setEditing(true)}
                  className="btn-primary h-9 rounded-full px-4 text-xs font-medium"
                >
                  ✏️ Edit Profile
                </Button>
              ) : (
                <>
                  <Button
                    onClick={handleCancel}
                    className="btn-glass h-9 rounded-full px-4 text-xs font-medium"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleSave}
                    className="btn-primary h-9 rounded-full px-4 text-xs font-medium"
                  >
                    {saved ? "✓ Saved" : "Save Changes"}
                  </Button>
                </>
              )}
            </div>
          </div>

          {/* Bio */}
          <div className="relative z-10 mt-4 rounded-2xl border border-border-brand bg-surface2/60 p-3">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-text">
              About
            </p>
            {editing ? (
              <textarea
                name="bio"
                value={form.bio}
                onChange={handleChange}
                rows={3}
                className="mt-1 w-full resize-none rounded-xl border border-border-brand bg-surface2 px-3 py-2 text-sm text-primary-text outline-none focus:border-border"
              />
            ) : (
              <p className="mt-1 text-sm text-muted-strong">
                {profile.bio || "No bio yet."}
              </p>
            )}
          </div>
        </div>

        {/* Stats grid */}
        <div className="glass-panel relative overflow-hidden rounded-[2rem] p-5 shadow-xs sm:p-6">
          <div className="pointer-events-none absolute -left-10 -top-16 h-48 w-48 rounded-full bg-accent-dim blur-[50px]" />
          <div className="pointer-events-none absolute -bottom-20 -right-12 h-60 w-60 rounded-full bg-gold-dim blur-[50px]" />

          <div className="relative z-10">
            <h3 className="text-sm font-semibold tracking-tight text-primary-text">
              Learning Stats
            </h3>
            <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {statCards.map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col items-start gap-1 rounded-2xl border border-border-brand bg-surface2/60 p-3"
                >
                  <span className="text-lg">{s.emoji}</span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-text">
                    {s.label}
                  </span>
                  <span className="text-base font-semibold text-primary-text">
                    {s.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Account info (editable) */}
        <div className="glass-panel relative overflow-hidden rounded-[2rem] p-5 shadow-xs sm:p-6">
          <div className="pointer-events-none absolute -left-10 -top-16 h-48 w-48 rounded-full bg-accent-dim blur-[50px]" />
          <div className="pointer-events-none absolute -bottom-20 -right-12 h-60 w-60 rounded-full bg-gold-dim blur-[50px]" />

          <div className="relative z-10">
            <h3 className="text-sm font-semibold tracking-tight text-primary-text">
              Account Information
            </h3>

            <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field
                label="Full Name"
                name="name"
                value={form.name}
                editing={editing}
                onChange={handleChange}
              />
              <Field
                label="Username"
                name="username"
                value={form.username}
                editing={editing}
                onChange={handleChange}
              />
              <Field
                label="Email"
                name="email"
                type="email"
                value={form.email}
                editing={editing}
                onChange={handleChange}
              />
              <Field
                label="Location"
                name="location"
                value={form.location}
                editing={editing}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* Preferences */}
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
              checked={profile.preferences.emailNotifications}
              onChange={() => togglePref("emailNotifications")}
            />
            <Toggle
              label="Weekly digest"
              description="Receive a weekly summary of your progress."
              checked={profile.preferences.weeklyDigest}
              onChange={() => togglePref("weeklyDigest")}
            />
            <Toggle
              label="Public profile"
              description="Let other learners view your profile and stats."
              checked={profile.preferences.publicProfile}
              onChange={() => togglePref("publicProfile")}
            />
          </div>
        </div>

        {/* Danger zone */}
        <div className="glass-panel relative overflow-hidden rounded-[2rem] p-5 shadow-xs sm:p-6">
          <div className="pointer-events-none absolute -left-10 -top-16 h-48 w-48 rounded-full bg-accent-dim blur-[50px]" />
          <div className="pointer-events-none absolute -bottom-20 -right-12 h-60 w-60 rounded-full bg-gold-dim blur-[50px]" />

          <div className="relative z-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-sm font-semibold tracking-tight text-primary-text">
                Account Actions
              </h3>
              <p className="text-[11px] text-muted-text">
                Sign out of your account or manage advanced settings.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <Button
                onClick={() => navigate("/settings")}
                className="btn-glass h-9 rounded-full px-4 text-xs font-medium"
              >
                ⚙️ Settings
              </Button>
              <Button
                onClick={() => setShowLogout(true)}
                className="h-9 rounded-full border border-red-500/30 bg-red-500/10 px-4 text-xs font-medium text-red-500 transition-colors hover:bg-red-500/20"
              >
                🚪 Logout
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Logout confirmation */}
      <Dialog open={showLogout} onOpenChange={setShowLogout}>
        <DialogContent className="glass-panel max-w-md rounded-[1.75rem] border-border-brand">
          <DialogHeader>
            <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-red-500/15 text-xl">
              🚪
            </div>
            <DialogTitle className="text-center text-lg font-semibold tracking-tight text-primary-text">
              Log out?
            </DialogTitle>
            <DialogDescription className="text-center text-sm text-muted-text">
              You'll need to sign in again to access your dashboard.
            </DialogDescription>
          </DialogHeader>

          <DialogFooter className="mt-4 flex-col gap-2 sm:flex-row sm:justify-center">
            <Button
              variant="ghost"
              onClick={() => setShowLogout(false)}
              className="btn-glass h-9 rounded-full px-4 text-xs font-medium"
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                setShowLogout(false);
                navigate("/auth");
              }}
              className="h-9 rounded-full bg-red-500 px-4 text-xs font-medium text-white hover:bg-red-600"
            >
              Yes, Log Out
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

/* ---------- Reusable Field ---------- */
const Field = ({ label, name, value, editing, onChange, type = "text" }) => (
  <div>
    <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-wider text-muted-text">
      {label}
    </label>
    {editing ? (
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className="w-full rounded-xl border border-border-brand bg-surface2 px-3 py-2 text-sm text-primary-text outline-none transition-colors focus:border-border"
      />
    ) : (
      <p className="rounded-xl border border-transparent px-3 py-2 text-sm text-primary-text">
        {value || "—"}
      </p>
    )}
  </div>
);

/* ---------- Reusable Toggle ---------- */
const Toggle = ({ label, description, checked, onChange }) => (
  <button
    type="button"
    onClick={onChange}
    className="flex w-full items-center justify-between gap-3 rounded-2xl border border-border-brand bg-surface2/60 p-3 text-left transition-colors hover:bg-surface2"
  >
    <div className="min-w-0">
      <p className="text-sm font-medium text-primary-text">{label}</p>
      <p className="text-[11px] text-muted-text">{description}</p>
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

export default Profile;