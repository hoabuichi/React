module.exports = function (grunt) {
	require('time-grunt')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		browserify: {
			dev: {
				files: {
					'build/app.js': ['app/app.jsx']
				},
				options: {
					transform: [
						'babelify', 'reactify'
					]
				}
			}
		},
		watch: {
			src: {
				files: ['app/**/*.js', 'app/**/*.jsx', '!source/build/app.js','*.html', 'app/**/*.less'],
				tasks: ['default'],
				options: {
					livereload: true
				}
			}
		},
		less: {
			dev: {
				files: {
					'build/app.css': 'app/app.less'
				}
			}
		},
		connect: {
			dev: {
				options: {
					hostname: 'localhost',
					port: 9000,
					open: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-react');

	grunt.registerTask('start', ['browserify', 'less', 'connect', 'watch']);

	grunt.registerTask('default', ['browserify', 'less']);
};
