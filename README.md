geomicon
========

javascript lib for drawing geometry icon

生成一些常用的小图标，可以设置小图标的类型，大小，颜色，和旋转角度。前端可以省略一些图片。

目前的图片类型有三角形，原型，正方形，五角星，阴阳图。

调用方式：
```js
new GeomIcon({
  container: $('.square')[0],
  type: 'square',
  size: 15,
  color: 'red',
  rotateDegree: 45
}).render();
```


todo:
add more svg geometry icon.
