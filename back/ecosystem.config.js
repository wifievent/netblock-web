module.exports = {
  apps: [{
    name: "dev",
    script: "./app.js",
    watch: true,
    ignoreWatch: [ "data/*", "uploads/*"]
  }]
}
