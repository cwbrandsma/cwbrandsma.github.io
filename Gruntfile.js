module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		copy: {
			main: {
				files: [
					{expand: true, cwd: 'bower_components/jquery/', src:['**/*.js'], dest:'js/ven'},
					{expand: true, cwd: 'bower_components/twitter/dist/js/', src:['**/*.js'], dest:'js/ven'},
					{expand: true, cwd: 'bower_components/twitter/dist/css/', src:['**/*.css'], dest:'css/ven', filter:'isFile'},
					{expand: true, cwd: 'bower_components/twitter/dist/fonts/', src:['*.*'], dest:'fonts/ven', filter:'isFile'},
				]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask('default', ['copy']);
};
