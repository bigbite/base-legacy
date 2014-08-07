module.exports = function (config) {
  config.set({
    basePath : '../',
    action: 'run',
    frameworks: ['jasmine'],
    browsers : ['PhantomJS'],
    plugins : [
      'karma-spec-reporter',
      'karma-phantomjs-launcher',
      'karma-jasmine'
    ],
    reporters : ['spec']
  });
};
