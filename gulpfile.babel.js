'use strict';
import gulp from 'gulp';
import browserSync from 'browser-sync';
gulp.task("browserSync",()=>{
  browserSync({
    server:{
      baseDir:""
    }
  })
})
gulp.task("default",["browserSync"],()=>{
  gulp.watch("*",browserSync.reload);
  gulp.watch("js/*",browserSync.reload);
  gulp.watch("css/*",browserSync.reload);
})
