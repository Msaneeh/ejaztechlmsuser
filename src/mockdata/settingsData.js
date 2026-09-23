export const settingsData = {
  account: {
    email: "sani@example.com",
    username: "sani_ai",
    twoFactorEnabled: false,
    passwordLastChanged: "2026-07-12",
  },

  learning: {
    dailyGoalXp: 100,
    weeklyGoalDays: 5,
    preferredStudyTime: "evening", // "morning" | "afternoon" | "evening" | "night"
    autoPlayVideos: true,
    showSubtitles: true,
    playbackSpeed: "1.0",
  },

  notifications: {
    email: {
      newLessons: true,
      taskReminders: true,
      evaluationReminders: true,
      quizResults: true,
      leaderboardUpdates: false,
      weeklyDigest: true,
    },
    push: {
      newLessons: false,
      taskReminders: true,
      evaluationReminders: true,
      quizResults: false,
      leaderboardUpdates: false,
      weeklyDigest: false,
    },
  },

  privacy: {
    publicProfile: false,
    showXpPublicly: false,
    showStreakPublicly: true,
    allowMessages: true,
  },

  appearance: {
    theme: "system", // "light" | "dark" | "system"
    reducedMotion: false,
    compactMode: false,
  },
};

export const studyTimeOptions = [
  { value: "morning", label: "Morning (6 AM – 12 PM)" },
  { value: "afternoon", label: "Afternoon (12 PM – 5 PM)" },
  { value: "evening", label: "Evening (5 PM – 9 PM)" },
  { value: "night", label: "Night (9 PM – 12 AM)" },
];

export const playbackSpeedOptions = ["0.75", "1.0", "1.25", "1.5", "2.0"];

export const themeOptions = [
  { value: "light", label: "Light", emoji: "☀️" },
  { value: "dark", label: "Dark", emoji: "🌙" },
  { value: "system", label: "System", emoji: "💻" },
];