module.exports = function (grunt) {

    grunt.initConfig({
        responsive_images: {
            dev: {
                options: {
                    engine: 'gm',
                    sizes: [{
                        width: 1200,
                        height: 600,
                        quality: 60
                    }, {
                        width: 500,
                        height: 250,
                        quality: 60
                    }, {
                        width: 360,
                        height: 180,
                        quality: 60
                    }]
                },

                files: [{
                    expand: true,
                    src: ['*.{gif,jpg,png,JPG,PNG}'],
                    cwd: 'img/',
                    dest: 'images/'
                }]
            }
        },

        clean: {
            dev: {
                src: ['images'],
            },
        },

        mkdir: {
            dev: {
                options: {
                    create: ['images']
                },
            },
        },

        imagemin: {
            dynami: {
                files: [{
                    expand: true,
                    cwd: 'img/',
                    src: ['**/*.{png,jpg,PNG,JPG'],
                    dest: 'images/'
                }]
            }
        }

    });

    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-mkdir');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.registerTask('default', ['clean', 'mkdir', 'imagemin', 'responsive_images']);
};