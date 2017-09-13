var gulp = require('gulp');
var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task("babel", function(){
    return gulp.src("src/components/*.jsx").
        pipe(babel({
            plugins: ['transform-react-jsx']
        })).
        pipe(gulp.dest("src/js/"));
});

gulp.task('default', ['babel']);