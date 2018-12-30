'use strict'; // use strict javascript code

module.exports = function(grunt) {
	// set up Grunt configuration for all the tasks

	require('time-grunt')(grunt);

	require('jit-grunt')(grunt);

	grunt.initConfig({
		// add in the configuration for the wheel's grunt tasks
		// it is a javascript object

		sass: {
			dist: {
				files: {
					'css/styles.css': 'css/styles.scss'
				}
			}
		}, 

		watch: {
			files: 'css/*.scss',
			tasks: ['sass']
		},
		browserSync: { 
			dev: {
				bsFiles: {
					src: [
						'css/*.css',
						'*.html',
						'js/*.js'
					]
				},
				options: {
					watchTask: true, 
					server: {
						baseDir: "./" 
					}
				}
			}	
		}

	});


	grunt.registerTask('css',['sass']);
	grunt.registerTask('default', ['browserSync', 'watch']); 
};