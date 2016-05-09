/**
 * @file babel.js
 * @author Albert Cyberhulk
 * @date 09/06/16
 */

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

// Transpiles ES6 and JSX
module.exports = {
  options: {
    sourceMap: true,
    presets: ['es2015', 'react']
  },
  dev: {
    files: [
      {
        expand: true,
        dot: true,
        cwd: '<%= project.src %>',
        dest: '<%= project.temp %>',
        src: [
          '!bower_components/',
          '**/*.js'
        ]
      }
    ]
  }
};
