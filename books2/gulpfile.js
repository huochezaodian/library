const gulp = require('gulp');
const babel = require('gulp-babel');
const watch = require('gulp-watch');
const rollup = require('gulp-rollup');
const replace = require('rollup-plugin-replace');
const eslint = require('gulp-eslint');

const pathConfig = {
  entry: './src/server/**/*.js',
  output: './dist',
  serverConfig: './src/server/config/index.js'
};

// 开发环境
function buildDev(){
  return watch(pathConfig.entry, {
    ignoreInitial: false
  }, function () {
    gulp.src(pathConfig.entry)
      .pipe(babel({
        babelrc: false,
        "plugins": [
          ["transform-es2015-modules-commonjs", {
            "allowTopLevelThis": true
          }]
        ]
      }))
      .pipe(gulp.dest(pathConfig.output));
  })
}

//上线环境
function buildProd(){
  return gulp.src(pathConfig.entry)
    .pipe(babel({
      babelrc: false,
      ignore: [pathConfig.serverConfig],
      "plugins": [
        ["transform-es2015-modules-commonjs", {
          "allowTopLevelThis": true
        }]
      ]
    }))
  .pipe(gulp.dest(pathConfig.output));
}

//对代码进行检查的环境
function buildLint(){
  return gulp.src(pathConfig.entry)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
}

//清洗环境
function buildConfig(){
  return gulp.src(pathConfig.entry)
    .pipe(rollup({
      output: {
        format: 'cjs'
      },
      plugins: [
        replace({
          'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
      ],
      input: pathConfig.serverConfig
    }))
  .pipe(gulp.dest(pathConfig.output));
}

// 默认是开发环境
let build = gulp.series(buildDev);

if (process.env.NODE_ENV === 'production') {
  build = gulp.series(buildProd, buildConfig);
}

if (process.env.NODE_ENV === 'lint') {
  build = gulp.series(buildLint, buildConfig);
}

gulp.task('default', build);