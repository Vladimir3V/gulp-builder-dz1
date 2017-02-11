'use strict';

module.exports = function() {
    $.gulp.task('sprite', function () {
        var spriteData = $.gulp.src('./source/images/icons/icons_png/*.*')
            .pipe($.gp.spritesmith({
            imgName: 'sprite_img.png',
            cssName: 'sprite_img.css'
            })),
             imgStream = spriteData.img
            .pipe($.gulp.dest('./build/assets/img/sprites')),
             cssStream = spriteData.css
            .pipe($.gulp.dest('./build/assets/css'));

        return $.merge(imgStream, cssStream);
    })
};