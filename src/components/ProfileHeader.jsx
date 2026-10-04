import { ArrowLeft, User2Icon } from "lucide-react";

const ProfileHeader = ({ onBack }) => {
  return (
    <>
    <div className="shrink-0">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onBack}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border-brand bg-surface2 text-muted-text transition-all hover:bg-surface2/70 hover:text-primary-text hover:border-border cursor-pointer"
            aria-label="Go back"
          >
            <ArrowLeft />
          </button>
          <div className="flex items-center gap-2">
            <span className="text-xl"><User2Icon /></span>
            <h1 className="text-2xl font-semibold tracking-tight text-primary-text">
              Profile
            </h1>
          </div>
        </div>
        <p className="mt-1 ml-12 text-sm text-muted-text">
          Manage your account info and view your learning stats.
        </p>
      </div>
    </>
  )
}

export default ProfileHeader