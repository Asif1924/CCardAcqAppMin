// Karma configuration
// Generated on Thu Sep 03 2015 11:22:29 GMT+0300 (FLE Daylight Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ["jasmine-jquery", "jasmine", "sinon"],


    // list of files / patterns to load in the browser
    files: [
        {
            pattern: 'testJs/unit/fixtures/**/*.html', included: false
        },

      'WebContent/app/lib/*.js',
      "WebContent/app/view/ext/*.js",
	  "WebContent/app/namespaceExists.js",
	  "WebContent/app/*.js",
	  "WebContent/app/controller/*.js",
	  "WebContent/app/controller/device/*.js",	  
	  "WebContent/app/controller/helpers/*.js",
	  "WebContent/app/controller/models/*.js",
	  "WebContent/app/controller/network/*.js",
	  "WebContent/app/controller/flow/*.js",
	  "WebContent/app/controller/increase/*.js",
	  "WebContent/app/bundles/*.js",

      "testJs/unit/app/*.js",
	  "testJs/unit/flowTests/*.js",  										//66.51%
	  "testJs/unit/helperTests/*.js",  										//66.51%
      "testJs/unit/networkTests/*.js",  									//66.51%
      "testJs/unit/modelTests/*.js",  										//66.51%
      "testJs/unit/controllerTest/*.js"
    ],

    
    //cd C:\Dev\Projects\EasyFinanical\IndirectWebApp && karma start karma.config.js

    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
      //"coverage"
    preprocessors: {
        '**/*.html': [],
    	'WebContent/app/*.js': ["coverage"],
    	'WebContent/app/bundles/*.js': ["coverage"],
        'WebContent/app/controller/**/*.js': ["coverage"]
    },

    client: {
      captureConsole: false
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage', 'junit'],
    
    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    loggers     : [
                   {
                       type: 'console'
                   }
               ],
    
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // optionally, configure the reporter
    coverageReporter: {
        type : 'html',
        dir : 'reports/karma/coverage/'
    },

     //the default configuration
     junitReporter: {
       outputDir: 'reports/karma/junit_style/', // results will be saved as $outputDir/$browserName.xml
       outputFile: undefined, // if included, results will be saved as $outputDir/$browserName/$outputFile
       suite: '', // suite will become the package name attribute in xml testsuite element
       useBrowserName: true, // add browser name to report and classes names
       nameFormatter: undefined, // function (browser, result) to customize the name attribute in xml testcase element
       classNameFormatter: undefined, // function (browser, result) to customize the classname attribute in xml testcase element,
       properties: {} // key value pair of properties to add to the <properties> section of the report
     },
    
    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    plugins: [
              'karma-phantomjs-launcher',
              'karma-chrome-launcher',
              'karma-jasmine-jquery',
              'karma-jasmine',
              'karma-sinon',
              'karma-coverage',
              'karma-junit-reporter',
            ],
            
    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  })
}
