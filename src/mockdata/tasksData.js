export const tasksData = [
  {
    id: "build-linear-regression",
    title: "Build a Linear Regression Model",
    description:
      "Implement linear regression from scratch using NumPy on the provided housing dataset. Compare your results with scikit-learn's implementation.",
    phase: "Phase 2",
    week: "Week 1",
    dueDate: "2026-09-30",
    xp: 150,
    status: "pending", // "pending" | "submitted" | "graded"
    requirements: [
      "Implement gradient descent manually",
      "Visualize the loss curve",
      "Compare with scikit-learn's LinearRegression",
    ],
    submission: null, // filled in after the user submits
  },
  {
    id: "decision-tree-classifier",
    title: "Decision Tree Classifier",
    description:
      "Train a decision tree classifier on the Titanic dataset and evaluate its accuracy using cross-validation.",
    phase: "Phase 2",
    week: "Week 2",
    dueDate: "2026-10-07",
    xp: 200,
    status: "pending",
    requirements: [
      "Handle missing values appropriately",
      "Use 5-fold cross-validation",
      "Report precision, recall, and F1 score",
    ],
    submission: null,
  },
  {
    id: "eda-report",
    title: "Exploratory Data Analysis Report",
    description:
      "Perform EDA on the given sales dataset and produce a written report with at least 5 insights.",
    phase: "Phase 1",
    week: "Week 4",
    dueDate: "2026-09-15",
    xp: 100,
    status: "submitted",
    requirements: [
      "Use pandas and matplotlib",
      "Minimum 5 visualizations",
      "Write clear insights for each",
    ],
    submission: {
      title: "EDA Report — Sales Dataset",
      description:
        "Analyzed 12 months of sales data. Found strong seasonality in Q4 and identified 3 underperforming regions.",
      repoLink: "https://github.com/sani/eda-sales-report",
      demoLink: "https://sani-eda-report.vercel.app",
      submittedAt: "2026-09-14T10:30:00Z",
    },
  },
];