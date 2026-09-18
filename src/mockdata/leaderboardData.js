// Mock leaderboard data — swap this with an API call later
export const leaderboardData = [
  { id: 1, rank: 1, name: "Aisha Bello", xp: 4820, avatar: null, isUser: false, streak: 28 },
  { id: 2, rank: 2, name: "Chinedu Okafor", xp: 4510, avatar: null, isUser: false, streak: 24 },
  { id: 3, rank: 3, name: "Fatima Yusuf", xp: 4180, avatar: null, isUser: false, streak: 21 },
  { id: 4, rank: 4, name: "Sani", xp: 3920, avatar: null, isUser: true, streak: 12 },
  { id: 5, rank: 5, name: "Tunde Adeyemi", xp: 3740, avatar: null, isUser: false, streak: 15 },
  { id: 6, rank: 6, name: "Ngozi Kalu", xp: 3510, avatar: null, isUser: false, streak: 9 },
  { id: 7, rank: 7, name: "Ibrahim Musa", xp: 3280, avatar: null, isUser: false, streak: 7 },
  { id: 8, rank: 8, name: "Blessing Eze", xp: 3050, avatar: null, isUser: false, streak: 11 },
  { id: 9, rank: 9, name: "Yusuf Bello", xp: 2870, avatar: null, isUser: false, streak: 5 },
  { id: 10, rank: 10, name: "Amaka Obi", xp: 2640, avatar: null, isUser: false, streak: 8 },
  { id: 11, rank: 11, name: "Kelechi Nwosu", xp: 2410, avatar: null, isUser: false, streak: 3 },
  { id: 12, rank: 12, name: "Zainab Ahmed", xp: 2180, avatar: null, isUser: false, streak: 6 },
];

// Current user's stats (used for the highlight card at the top)
export const currentUser = {
  id: 4,
  rank: 4,
  name: "Sani",
  xp: 3920,
  streak: 12,
  xpToNextRank: 260, // XP needed to move up one rank
  totalUsers: 248,
};