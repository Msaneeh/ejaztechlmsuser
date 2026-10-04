import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Pen } from "lucide-react";

const ProfileHero = ({
  profile,
  form,
  editing,
  saved,
  onEdit,
  onCancel,
  onSave,
  onChange,
}) => {
  return (
    <div className="glass-panel relative overflow-hidden rounded-[2rem] p-5 shadow-xs sm:p-6">
      <div className="pointer-events-none absolute -left-10 -top-16 h-48 w-48 rounded-full bg-accent-dim blur-[50px]" />
      <div className="pointer-events-none absolute -bottom-20 -right-12 h-60 w-60 rounded-full bg-gold-dim blur-[50px]" />

      <div className="relative z-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          
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
              {profile.location} • Joined{" "}
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
              onClick={onEdit}
              className="btn-primary h-9 rounded-full px-4 text-xs font-medium"
            >
              <Pen /> Edit Profile
            </Button>
          ) : (
            <>
              <Button
                onClick={onCancel}
                className="btn-glass h-9 rounded-full px-4 text-xs font-medium"
              >
                Cancel
              </Button>
              <Button
                onClick={onSave}
                className="btn-primary h-9 rounded-full px-4 text-xs font-medium"
              >
                {saved ? "✓ Saved" : "Save Changes"}
              </Button>
            </>
          )}
        </div>
      </div>

      
      <div className="relative z-10 mt-4 rounded-2xl border border-border-brand bg-surface2/60 p-3">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-text">
          About
        </p>
        {editing ? (
          <textarea
            name="bio"
            value={form.bio}
            onChange={onChange}
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
  );
};

export default ProfileHero;