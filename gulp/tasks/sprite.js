'use strict';

module.exports = function() {
    $.gulp.task('sprite', function () {
        return $.gulp.src('./source/images/*.*')
            .pipe ($.gp.spritesmith({
                imgName: 'sprite.png',
                cssName: 'sprite.css'
            }))
            .pipe (($.gulp.dest('./build/assets/sprites')))
    })
};