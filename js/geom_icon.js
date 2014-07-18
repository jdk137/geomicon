// 气泡图 绝对值 比例两种状态， 以及图例组件
var GeomIcon = function (config) {
  this.config = config || {};
  //  4 params must need
  var container = $(config.container);
  var type = config.type;
  var color = config.color;
  var size = config.size || container.height();

  this.setOptions = function (config) {
    this.config = config;
    type = config.type || type;
    color = config.color || color;
    size = config.size || size;
    return this;
  };

  var render = this.render = function () {
    container.empty();
    this.box = $('<div class="geom-icon"></div>').appendTo(container);
    if (type === 'yinYang') {
      this.renderYinYang();
    }
    if (type === 'square') {
      this.renderSquare();
    }
    if (type === 'circle') {
      this.renderCircle();
    }
    if (type === 'triangle') {
      this.renderTriangle();
    }
    if (type === 'starFive') {
      this.renderStarFive();
    }
  };





  var renderYinYang = this.renderYinYang = function () {
    var defaultConfig = {
      backgroundColor: '#000',
      foregroundColor: '#eee',
      size: 100
    };
    var box = this.box;
    box.append('<div class="yin-yang">\
        <div class="yin-yang-before"/>\
        <div class="yin-yang-after"/>\
      </div>');
    var y = box.find('.yin-yang');
    var yb = box.find('.yin-yang-before');
    var ya = box.find('.yin-yang-after');

    //color
    color = color || {};
    var backgroundColor = color.backgroundColor || defaultConfig.backgroundColor;
    var foregroundColor = color.foregroundColor || defaultConfig.foregroundColor;
    y.css({
      'backgroundColor': foregroundColor,
      'border-color': backgroundColor
    });
    yb.css({
      'backgroundColor': foregroundColor,
      'border-color': backgroundColor
    });
    ya.css({
      'backgroundColor': backgroundColor,
      'border-color': foregroundColor
    });

    //center
    var zoom = size / defaultConfig.size;
    box.css({
      'margin-top': Math.max(0, (container.height() - size) / 2 / zoom),
      'margin-left': Math.max(0, (container.width() - size) / 2 / zoom),
      'zoom': zoom
    });

    //rotate
    var degree = config.rotateDegree || 0;
    y.css({
      '-webkit-transform': 'rotate(' + degree + 'deg)',
      '-moz-transform': 'rotate(' + degree + 'deg)',
      '-ms-transform': 'rotate(' + degree + 'deg)',
      '-o-transform': 'rotate(' + degree + 'deg)',
      'transform': 'rotate(' + degree + 'deg)',
    });
  };

  var renderSquare = this.renderSquare = function () {
    var defaultConfig = {
      backgroundColor: 'red',
      size: 100
    };
    var box = this.box;
    box.append('<div class="square"></div>');
    var square = box.find('.square');

    //color
    color = color || defaultConfig.backgroundColor;
    square.css({
      'backgroundColor': color
    });

    //center
    var zoom = size / defaultConfig.size;
    box.css({
      'margin-top': Math.max(0, (container.height() - size) / 2 / zoom),
      'margin-left': Math.max(0, (container.width() - size) / 2 / zoom),
      'zoom': zoom
    });

    //rotate
    var degree = config.rotateDegree || 0;
    square.css({
      '-webkit-transform': 'rotate(' + degree + 'deg)',
      '-moz-transform': 'rotate(' + degree + 'deg)',
      '-ms-transform': 'rotate(' + degree + 'deg)',
      '-o-transform': 'rotate(' + degree + 'deg)',
      'transform': 'rotate(' + degree + 'deg)',
    });
  };

  var renderCircle = this.renderCircle = function () {
    var defaultConfig = {
      backgroundColor: 'red',
      size: 100
    };
    var box = this.box;
    box.append('<div class="circle"></div>');
    var circle = box.find('.circle');

    //color
    color = color || defaultConfig.backgroundColor;
    circle.css({
      'backgroundColor': color
    });

    //center
    var zoom = size / defaultConfig.size;
    box.css({
      'margin-top': Math.max(0, (container.height() - size) / 2 / zoom),
      'margin-left': Math.max(0, (container.width() - size) / 2 / zoom),
      'zoom': zoom
    });
  };

  var renderTriangle = this.renderTriangle = function () {
    var defaultConfig = {
      backgroundColor: 'red',
      size: 100
    };
    var box = this.box;
    box.append('<div class="triangle"></div>');
    var triangle = box.find('.triangle');

    //color
    color = color || defaultConfig.backgroundColor;
    triangle.css({
      'border-bottom-color': color
    });

    //center
    var zoom = size / defaultConfig.size;
    box.css({
      'margin-top': Math.max(0, (container.height() - size) / 2 / zoom),
      'margin-left': Math.max(0, (container.width() - size) / 2 / zoom),
      'zoom': zoom
    });

    //rotate
    var degree = config.rotateDegree || 0;
    triangle.css({
      '-webkit-transform': 'rotate(' + degree + 'deg)',
      '-moz-transform': 'rotate(' + degree + 'deg)',
      '-ms-transform': 'rotate(' + degree + 'deg)',
      '-o-transform': 'rotate(' + degree + 'deg)',
      'transform': 'rotate(' + degree + 'deg)',
    });
  };

  var renderStarFive = this.renderStarFive = function () {
    var defaultConfig = {
      backgroundColor: 'red',
      //initRotateDegree: 35,
      size: 200
    };
    var box = this.box;
    box.append('<div class="star-five-box2">\
        <div class="star-five-box">\
          <div class="star-five">\
            <div class="star-five-before"/>\
            <div class="star-five-after"/>\
          </div>\
        </div>\
      </div>');
    var sbox = box.find('.star-five-box');
    var sbox2 = box.find('.star-five-box2');
    var s = box.find('.star-five');
    var sb = box.find('.star-five-before');
    var sa = box.find('.star-five-after');

    //color
    color = color || defaultConfig.backgroundColor;
    s.css({
      'border-bottom-color': color
    });
    sb.css({
      'border-bottom-color': color
    });
    sa.css({
      'border-bottom-color': color
    });

    //center
    var zoom = size / defaultConfig.size;
    sbox.css({
      width: defaultConfig.size,
      height: defaultConfig.size
    });
    box.css({
      'margin-top': Math.max(0, (container.height() - size) / 2 / zoom),
      'margin-left': Math.max(0, (container.width() - size) / 2 / zoom),
      'zoom': zoom
    });

    //rotate
    var degree = config.rotateDegree || 0;
    sbox2.css({
      '-webkit-transform': 'rotate(' + degree + 'deg)',
      '-moz-transform': 'rotate(' + degree + 'deg)',
      '-ms-transform': 'rotate(' + degree + 'deg)',
      '-o-transform': 'rotate(' + degree + 'deg)',
      'transform': 'rotate(' + degree + 'deg)'
    });
  };
};
