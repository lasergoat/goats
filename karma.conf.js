// Karma configuration

module.exports = function(config) {
  config.set({

	// base path that will be used to resolve all patterns (eg. files, exclude)
	basePath: '',


	// frameworks to use
	// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
	frameworks: ['jasmine'],


	// list of files / patterns to load in the browser
	files: [
		// these files must be loaded first
		'src/assets/angular.min.js',
		'src/assets/angular-mocks.js',
		'src/assets/angular-animate.min.js',
		'src/assets/angular-ui-router.min.js',
		'src/assets/lodash.min.js',
		'src/app.js',
		'src/**/*.js',
		'test/**/*.js',
		'src/**/*.html'
	],


	// list of files to exclude
	exclude: [
	],

	coverageReporter: {
		type: 'cobertura',
		dir: 'test/coverage',
		subdir: '.'
	},

	junitReporter: {
		outputFile: 'test/results/karma-results.xml'
	},

	// preprocess matching files before serving them to the browser
	// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
	preprocessors: {
		'src/**/*.html' : ['ng-html2js'],
		'src/**/*.js' : 'coverage'
	},

	ngHtml2JsPreprocessor: {
		prependPrefix: '../../',
		moduleName: 'templates'
	},

	// test results reporter to use
	// possible values: 'dots', 'progress'
	// available reporters: https://npmjs.org/browse/keyword/karma-reporter
	reporters: ['progress', 'junit', 'coverage'],

	// web server port
	port: 9876,


	// enable / disable colors in the output (reporters and logs)
	colors: true,


	// level of logging
	// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
	logLevel: config.LOG_INFO,


	// enable / disable watching file and executing tests whenever any file changes
	autoWatch: true,


	// start these browsers
	// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
	browsers: ['PhantomJS'],


	// Continuous Integration mode
	// if true, Karma captures browsers, runs the tests and exits
	singleRun: true
  });
};
