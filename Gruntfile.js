module.exports = function(grunt) {

  grunt.initConfig({

	sass: {

		local: {
			options: {
				compass:        true,
				style:          'compressed',
				lineNumbers:    false,
				update:         false,
				sourcemap:      'none'
			},
			files: {
				'src/styles.css': 'src/scss/**/*.scss'
			}
		}
	},

     watch : {

         css: {
         	files: '**/*.scss',
			tasks: 'sass:local'
         }

     }

  });

  require('load-grunt-tasks')(grunt);

  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('dev', [
      'watch'
  ]);

};
