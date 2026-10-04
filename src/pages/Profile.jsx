import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { profileData } from "@/mockdata/profileData";
import ProfileHeader from "@/components/ProfileHeader";
import ProfileHero from "@/components/ProfileHero";
import LearningStats from "@/components/LearningStats";
import AccountInfo from "@/components/AccountInfo";
import Preferences from "@/components/Preferences";
import DangerZone from "@/components/DangerZone";
import LogoutDialog from "@/components/LogoutDialog";

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

  const editProfileHandler = (event) => {
    const { name, value } = event.target;
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

  const backHandler = () => navigate(-1);
  const logOutHandler = () => setShowLogout(true);

  const confirmLogOutHandler = () => {
    setShowLogout(false);
    navigate("/auth");
  };

  return (
    <div className="flex h-full flex-col gap-4 overflow-hidden p-4 sm:p-6 lg:p-8">
      <ProfileHeader onBack={backHandler} />

      <div className="min-h-0 flex-1 space-y-4 overflow-y-auto pr-1">
        <ProfileHero
          profile={profile}
          form={form}
          editing={editing}
          saved={saved}
          onEdit={() => setEditing(true)}
          onCancel={handleCancel}
          onSave={handleSave}
          onChange={editProfileHandler}
        />

        <LearningStats stats={profile.stats} />

        <AccountInfo
          form={form}
          editing={editing}
          onEditProfileHandler={editProfileHandler}
        />

        <Preferences
          preferences={profile.preferences}
          togglePref={togglePref}
        />

        <DangerZone
          onOpenSettings={() => navigate("/settings")}
          onLogOut={logOutHandler}
        />
      </div>

      <LogoutDialog
        open={showLogout}
        onOpenChange={setShowLogout}
        onConfirm={confirmLogOutHandler}
      />
    </div>
  );
};

export default Profile;