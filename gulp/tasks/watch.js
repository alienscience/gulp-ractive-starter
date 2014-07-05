var gulp = require('gulp');

gulp.task('watch', ['setWatch', 'browserSync'], function() {
	gulp.watch('src/images/**', ['images']);
	gulp.watch('src/htdocs/**', ['copy']);
	// Note: The browserify task handles js recompiling with watchify
});
