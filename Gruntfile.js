module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: ["src/main/webapp/resources/dist/"],
        jshint: {
            files: ['Gruntfile.js', 'src/main/resources/static/js/**/*.js'],
            options: {
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['src/main/resources/static/js/**/*.js'],
                dest: 'src/main/resources/static/dist/<%= pkg.name %>.js'
            }
        },
        ngAnnotate: {
            options: {
                singleQuotes: true
            },
            app: {
                files: [
                    {
                        '<%= concat.dist.dest %>': ['<%= concat.dist.dest %>']
                    }
                ]
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'src/main/resources/static/dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },
        env: {
            options: {
                //Shared Options Hash
            },
            dev: {
                NODE_ENV: 'dev'
            },
            prod: {
                NODE_ENV: 'prod'
            }
        },
        includeSource: {
            options: {
                basePath: 'src/main/resources/static',
                baseUrl: '/'
            },
            myTarget: {
                files: {
                    './src/main/resources/static/grunt/generated_include.html': './src/main/resources/static/grunt/generated_include_template.html'
                }
            }
        },
        preprocess: {
            dev: {
                src: './src/main/resources/static/grunt/generated_include.html',
                dest: './src/main/resources/templates/includes/grunt/include.html'
            },
            prod: {
                src: './src/main/resources/static/grunt/generated_include.html',
                dest: './src/main/resources/templates/includes/grunt/include.html'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-ng-annotate');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-env');
    grunt.loadNpmTasks('grunt-preprocess');
    grunt.loadNpmTasks('grunt-include-source');

    grunt.registerTask('dev', ['clean', 'jshint', 'env:dev', 'includeSource', 'preprocess:dev']);
    grunt.registerTask('prod', ['clean', 'jshint', 'concat', 'ngAnnotate', 'uglify', 'env:prod', 'includeSource', 'preprocess:prod']);

};