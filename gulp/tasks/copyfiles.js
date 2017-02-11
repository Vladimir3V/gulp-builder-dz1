/**
 * Created by vladimirvahrusev on 11.02.17.
 */

'use strict';

module.exports = function() {
    $.gulp.task('copy:files', function() {
        var copyImg = $.gulp.src([
                './source/images/**/*.*',
                '!./source/images/icons/**/*.*'
                ])
                .pipe($.gulp.dest($.config.root + '/assets/img')),
            copyFonts = $.gulp.src( './source/fonts/**/*.*')
                .pipe($.gulp.dest($.config.root + '/assets/fonts'))

        return $.merge(copyImg, copyFonts);
    })
};