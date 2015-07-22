require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

grunt.initConfig({
    babel: {
        options: {
            sourceMap: true
        },
        dist: {
            files: {
                '../out/script.js': '../src/script.js'
            }
        }
    }
});

grunt.registerTask('default', ['babel']);