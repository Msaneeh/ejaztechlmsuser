import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { settingsData } from "@/mockdata/settingsData";

import SettingsHeader from "@/components/settings/SettingsHeader";
import SettingsTabs from "@/components/settings/SettingsTabs";
import AccountSection from "@/components/settings/sections/AccountSection";
import LearningSection from "@/components/settings/sections/LearningSection";
import NotificationsSection from "@/components/settings/sections/NotificationsSection";
import PrivacySection from "@/components/settings/sections/PrivacySection";
import AppearanceSection from "@/components/settings/sections/AppearanceSection";
import DangerZone from "@/components/settings/DangerZone";
import ChangePasswordModal from "@/components/settings/ChangePasswordModal";
import DeleteAccountModal from "@/components/settings/DeleteAccountModal";

const Settings = () => {
  const navigate = useNavigate();

  const [settings, setSettings] = useState(settingsData);
  const [tab, setTab] = useState("account");
  const [saved, setSaved] = useState(false);

  const [showChangePassword, setShowChangePassword] = useState(false);
  const [passwordForm, setPasswordForm] = useState({
    current: "",
    next: "",
    confirm: "",
  });

  const [showDelete, setShowDelete] = useState(false);
  const [deleteInput, setDeleteInput] = useState("");

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
    // TODO: PATCH /api/users/me/password
    console.log("Password change requested");
    setShowChangePassword(false);
    setPasswordForm({ current: "", next: "", confirm: "" });
    flashSaved();
  };

  const handleDeleteAccount = () => {
    // TODO: DELETE /api/users/me
    console.log("Account deleted");
    setShowDelete(false);
    navigate("/auth");
  };

  return (
    <div className="flex h-full flex-col gap-4 overflow-hidden p-4 sm:p-6 lg:p-8">
      <SettingsHeader saved={saved} onBack={() => navigate(-1)} />

      {/* Tabs wrapper */}
      <div className="glass-panel relative flex min-h-0 flex-1 flex-col overflow-hidden rounded-[2rem] shadow-xs">
        <div className="pointer-events-none absolute -left-10 -top-16 h-48 w-48 rounded-full bg-accent-dim blur-[50px]" />
        <div className="pointer-events-none absolute -bottom-20 -right-12 h-60 w-60 rounded-full bg-gold-dim blur-[50px]" />

        <Tabs
          value={tab}
          onValueChange={setTab}
          className="relative z-10 flex h-full min-h-0 flex-col"
        >
          <SettingsTabs />

          {/* Scrollable content */}
          <div className="min-h-0 flex-1 overflow-y-auto p-4 sm:p-5">
            <TabsContent value="account" className="mt-0">
              <AccountSection
                settings={settings}
                update={update}
                onChangePassword={() => setShowChangePassword(true)}
              />
            </TabsContent>

            <TabsContent value="learning" className="mt-0">
              <LearningSection settings={settings} update={update} />
            </TabsContent>

            <TabsContent value="notifications" className="mt-0">
              <NotificationsSection settings={settings} update={update} />
            </TabsContent>

            <TabsContent value="privacy" className="mt-0">
              <PrivacySection settings={settings} update={update} />
            </TabsContent>

            <TabsContent value="appearance" className="mt-0">
              <AppearanceSection settings={settings} update={update} />
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
      </div>

      {/* Danger Zone */}
      <DangerZone onDeleteClick={() => setShowDelete(true)} />

      {/* Modals */}
      <ChangePasswordModal
        open={showChangePassword}
        onClose={() => setShowChangePassword(false)}
        form={passwordForm}
        setForm={setPasswordForm}
        onSubmit={handlePasswordSubmit}
      />

      <DeleteAccountModal
        open={showDelete}
        input={deleteInput}
        setInput={setDeleteInput}
        onClose={() => {
          setShowDelete(false);
          setDeleteInput("");
        }}
        onConfirm={handleDeleteAccount}
      />
    </div>
  );
};

export default Settings;