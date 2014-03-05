# gulp-cssfont64 [![Build Status](https://travis-ci.org/247even/gulp-cssfont64.png?branch=master)](https://travis-ci.org/247even/gulp-cssfont64)

Encode base64 data from font-files and store the result in a css file.

## Example


#### gulpfile.js

```js
var gulp = require('gulp');
var cssfont64 = require('gulp-cssfont64');

gulp.task('default', function () {
	gulp.src('myfonts/*.ttf')
		.pipe(cssfont64())
		.pipe(gulp.dest('path'));
});
```

#### content of "myfonts"-folder:

```html
	Roboto-Regular.ttf
```

#### output: path/Roboto-Regular.css

```html
	@font-face {font-family: Roboto-Regular; src: url(data:application/x-font-ttf;base64,AABdboAvwAOAAFzugAvAA4AAXS6AJ8ADgABdLoAvwAOAAF0ugAPAA4AAXW6AC8ADgABdboALwAQAAFzugBfABAAAXO6AP8AEAABc7oAzwAQAAF0ugA/ABIAAXO6AA8AEgABc7oAsAASAAFzugB/ABIAAXO6AA8AEgABdLoAXwASAAF0ugB/ABIAAXW6AN8AEgABdLoAbwASAAF1ugAvABIAAXW6AD8AEgABdboA7wASAAF0ugCfABIAAXS6AB8AEgABdLoA7wASAAFzugAPABQAAXO6AB8AFAABc7oALwAUAAFzugA/ABQAAXO6AF8AFAABc7oAbwAUAAFzugB/ABQAAXO6AK8AFAABc7oAjwAUAAF0ugCvABQAAXS6AL8AFAABdLoAzwAUAAF0ugAvABQAAXW6AD8AFAABdQAA);}
```


### License

MIT © 247even
