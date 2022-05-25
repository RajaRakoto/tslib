/**
 * @author: Raja
 * @description: gruntfile for tslib project
 * @requires: grunt load-grunt-tasks grunt-contrib-compress
 */
module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  // all files destination (example)
  const backupsDestination = './backups/';

  // node-glob syntax
  const includeAllFiles = ['**/*', '.*/**/*', '**/.*', '**/.*/**/*'];

  /**
   * ~ ALL GRUNT PLUGINS CONFIG ~
   */
  grunt.initConfig({
    pkg: grunt.file.readJSON('./package.json'),

    /**
     * Compress files and folders (incremental backup)
     */
    compress: {
      main: {
        options: {
          archive: backupsDestination + 'main.tar.gz',
        },
        files: [{ src: ['./*', './.*'] }],
        filter: 'isFile',
      },
      node_modules: {
        options: {
          archive: backupsDestination + 'node_modules.tar.gz',
        },
        expand: true,
        cwd: './node_modules/',
        src: includeAllFiles,
        dest: 'node_modules',
      },
      build: {
        options: {
          archive: backupsDestination + 'build.tar.gz',
        },
        expand: true,
        cwd: './build/',
        src: includeAllFiles,
        dest: 'build',
      },
      src: {
        options: {
          archive: backupsDestination + 'src.tar.gz',
        },
        expand: true,
        cwd: './src/',
        src: includeAllFiles,
        dest: 'src',
      },
    },
  });

  // all grunt register tasks
  grunt.registerTask('compress-all', [
    'compress:node_modules',
    'compress:main',
    'compress:build',
    'compress:src',
  ]);
  grunt.registerTask('compress-quick', [
    'compress:main',
    'compress:build',
    'compress:src',
  ]);

  // all tasks lists
  const myTasksNames = ['compress-all', 'compress-quick'];

  // tasks status (description)
  const myTasksStatus = [
    'compress: main | node_modules | build | src',
    'compress: main | build | src',
  ];

  // default tasks
  grunt.registerTask('default', () => {
    console.log(
      '\nHere are the lists of plugins (tasks) you can run with grunt:'.green,
    );

    /**
     *
     * @param {string} taskTitle - task title (Eg: basics tasks)
     * @param {array} taskNames - task names (Eg: basicsTaskNames)
     * @param {array} taskStatus - task status (Eg: basicsTaskStatus)
     * @param {string} taskTheme - colors of theme (Eg: black ,red ,green ,yellow ,blue ,magenta ,cyan ,white ,gray ,grey)
     */
    function getTaskResume(taskTitle, taskNames, taskStatus, taskTheme) {
      switch (taskTheme) {
        case 'cyan':
          console.log(`\n${taskTitle}`.cyan.inverse.bold);
          taskNames.forEach((taskNames, index) => {
            console.log(taskNames.cyan + ` -> ${taskStatus[index]}`);
          });
          break;
        case 'magenta':
          console.log(`\n${taskTitle}`.magenta.inverse.bold);
          taskNames.forEach((taskNames, index) => {
            console.log(taskNames.magenta + ` -> ${taskStatus[index]}`);
          });
          break;
        case 'yellow':
          console.log(`\n${taskTitle}`.yellow.inverse.bold);
          taskNames.forEach((taskNames, index) => {
            console.log(taskNames.yellow + ` -> ${taskStatus[index]}`);
          });
          break;
        case 'blue':
          console.log(`\n${taskTitle}`.blue.inverse.bold);
          taskNames.forEach((taskNames, index) => {
            console.log(taskNames.blue + ` -> ${taskStatus[index]}`);
          });
          break;

        default:
          null;
          break;
      }
    }

    // task resume
    getTaskResume('~ TSLIB TASKS ~', myTasksNames, myTasksStatus, 'yellow');
  });
};
