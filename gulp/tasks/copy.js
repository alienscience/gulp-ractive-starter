var gulp = require('gulp');

gulp.task('copy', function() {
	return gulp.src(['src/htdocs/**','src/css/**'])
		.pipe(gulp.dest('build'));
});
