module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        expand: true, // set to true to enable options following options:
        cwd: "css/", // all sources relative to this path
        src: "*.less", // source folder patterns to match, relative to cwd
        dest: "css/", // destination folder path prefix
        ext: ".min.css", // replace any existing extension with this value in dest folder
        flatten: true  // flatten folder structure to single level
      }
    },
    devserver: {
      server: { options: { port: 8881 }}
    },
    watch: {
      styles: {
        files: ['css/**/*.less'], // which files to watch
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    },
    concurrent: {
      options: {
        logConcurrentOutput: true
      },
      default: {
          tasks: ['devserver', 'less', 'watch']
      }

    }
  });

  grunt.registerTask('default', ['concurrent:default']);
};