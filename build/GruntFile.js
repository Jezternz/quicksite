module.exports = function(grunt) 
{

	// Project configuration.
	grunt.initConfig({
		browserify: 
		{
			dist: 
			{
				options: 
				{
					browserifyOptions: {
						debug: true
					},
					transform: [["babelify", { "stage": 0 }]]
				},
				files: 
				{
					"../out/script.js": "../src/script.js"
				}
			}
		},
		copy: 
		{
			main:
			{
				files: 
				[
					{ cwd: "../src/", src: ['**/*.*', '!**/*.js', '!script/**/*.js', '!script/'], dest: '../out/', expand: true },
				]
			}
		},
		watch: 
		{
			main: 
			{
				files: '../src/**/*.*',
				tasks: ['default'],
				options: 
				{
					debounceDelay: 50,
				},
			},
		},
	});

	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', [
		'browserify', 
		'copy:main'
	]);
	grunt.registerTask('watch-dev', [
		'default', 
		'watch:main'
	]);

};