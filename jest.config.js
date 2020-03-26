module.exports = {
  testMatch: [
    "**/spec/**/*-spec.js"
  ],
  collectCoverageFrom: [
    "source/**",
    "lib/**"
  ],
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "env.js",
    "logger.js",
    "server.js"
  ]
};
