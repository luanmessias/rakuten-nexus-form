 module.exports = function (grunt) {

     grunt.config('sass', {

        sass: {
            options: {
                style: 'compressed',
                sourcemap: 'auto'
            },
            files: [{
                expand: true,
                cwd: '../sass/',
                src: ["**/*.scss"],
                dest: '../../dist/project/css/',
                ext: '.css'
            }]
        },

     });

     grunt.loadNpmTasks('grunt-contrib-sass');

 };


