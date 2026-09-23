import { KeyRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import SettingsSection from "../ui/SettingsSection";
import SettingsField from "../ui/SettingsField";
import SettingsToggle from "../ui/SettingsToggle";

const AccountSection = ({ settings, update, onChangePassword }) => (
  <div className="mt-0 space-y-4">
    <SettingsSection
      title="Account Information"
      description="Update your email and username."
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <SettingsField label="Email">
          <input
            type="email"
            value={settings.account.email}
            onChange={(e) => update("account.email", e.target.value)}
            className="w-full rounded-xl border border-border-brand bg-surface2 px-3 py-2 text-sm text-primary-text outline-none focus:border-border"
          />
        </SettingsField>
        <SettingsField label="Username">
          <input
            type="text"
            value={settings.account.username}
            onChange={(e) => update("account.username", e.target.value)}
            className="w-full rounded-xl border border-border-brand bg-surface2 px-3 py-2 text-sm text-primary-text outline-none focus:border-border"
          />
        </SettingsField>
      </div>
    </SettingsSection>

    <SettingsSection
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
        onClick={onChangePassword}
        className="btn-glass h-9 rounded-full px-4 text-xs font-medium"
      >
        <KeyRound className="mr-1.5 h-3.5 w-3.5" />
        Change Password
      </Button>
    </SettingsSection>

    <SettingsSection
      title="Two-Factor Authentication"
      description="Add an extra layer of security to your account."
    >
      <SettingsToggle
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
    </SettingsSection>
  </div>
);

export default AccountSection;