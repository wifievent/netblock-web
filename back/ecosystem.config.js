module.exports = {
  apps: [{
    name: "dev",
    script: "./app.js",
    watch: true,
    ignore_watch: [ "data/*", "uploads/*"],
  }]
}
