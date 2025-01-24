module.exports = {
  types: [
    {
      value: "feat: ✨",
      name: "✨  feat:\tA new feature",
    },
    {
      value: "fix: 🐛",
      name: "🐛  fix:\tA bug fix",
    },
    {
      value: "refactor: 🛠️",
      name: "🛠️  refactor:\tA code change that neither fixes a bug or adds a feature",
    },
    {
      value: "style: 🎨",
      name: "🎨  style:\tMarkup, white-space, formatting, missing semi-colons...",
    },
    {
      value: "chore: 🤖",
      name: "🤖  chore:\tBuild process or auxiliary tool changes",
    },
    {
      value: "docs: 📝",
      name: "📝  docs:\tDocumentation only changes",
    },
    {
      value: "ci: 🎡",
      name: "🎡  ci:\tCI related changes",
    },
    {
      value: "perf: 🚀",
      name: "🚀  perf:\tA code change that improves performance",
    },
    {
      value: "release: 🎉",
      name: "🎉  release:\tCreate a release commit",
    },
    {
      value: "test: 🧪",
      name: "🧪  test:\tAdding missing tests",
    },
    {
      value: "rollback 🔙",
      name: "🔙  rollback:\tRevert to a previous commit",
    },
  ],
  subjectSeparator: " ",
  scopes: [],
  skipEmptyScopes: true,
  allowBreakingChanges: [
    "feat: ✨",
    "fix: 🐛",
    "refactor: 🛠️",
    "perf: 🚀",
    "rollback: 🔙",
  ],
  breakingPrefix: "BREAKING CHANGE 🧨",
  messages: {
    type: "Select the type of change that you're committing:",
    scope: "\nSelect the scope this component affects: (optional)",
    subject: "Write a SHORT, IMPERATIVE tense description of the change\n",
    body: 'Provide a LONGER description of the change (Use "|" to break new line) (optional)\n',
    breaking: "List any BREAKING CHANGES (optional)\n",
    footer: "List any ISSUES CLOSED by this change. E.g.: #123 (optional)\n",
    confirmCommit: "Are you sure you want to proceed with the commit above?",
  },
};
