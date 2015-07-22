module.exports = function(grunt) 
{

	// Project configuration.
	grunt.initConfig({
		babel:
		{
			options:
			{
				sourceMap: true
			},
			dist:
			{
				files:
				{
					'../out/script.js': '../src/script.js'
				}
			}
		},
		copy: 
		{
			main:
			{
				files: 
				[
					{ cwd: "../src/", src: ['**/*.html'], dest: '../out/', expand: true },
				]
			}
		}
	});

	grunt.loadNpmTasks('grunt-babel');
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask('default', [
		'babel', 
		'copy:main'
	]);

};