// Watches files for changes and runs tasks based on the changed files
module.exports = {
  all: {
    options: { livereload: true },
    files: ['src/*.js']
  },
};
