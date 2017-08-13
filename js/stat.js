'use strict';

window.renderStatistics = function (ctx, names, times) {
  var getMaxTime = function () {
    var max = -1;
    var maxIndex = -1;
    var indexMaxTime = [];
    for (var i = 0; i < times.length; i++) {
      var time = times[i];
      if (time > max) {
        max = time;
        maxIndex = i;
      }
    }
    indexMaxTime.push(parseInt(max, 10));
    indexMaxTime.push(maxIndex);
    return indexMaxTime;
  };
  ctx.fillStyle = 'white';
  ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
  ctx.shadowOffsetX = 10;
  ctx.shadowOffsetY = 10;
  ctx.fillRect(100, 10, 420, 270);
  ctx.shadowColor = 'black';
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  ctx.fillStyle = 'black';
  ctx.font = '16px serif';
  ctx.fillText('Ура вы победили!', 110, 50);
  ctx.fillText(' Худшее время: ' + getMaxTime(times)[0] + ' мс у игрока ' + names[getMaxTime(times)[1]], 110, 70);


  var getRandomColor = function () {
    var charsAndNumbers = '0123456789ABCDEF';
    var color = '#0000';
    for (var i = 0; i < 2; i++) {
      color += charsAndNumbers[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  var positionX = 150;
  var positionY = 100;
  var widthSize = 40;
  var heightSize = 150;
  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = 'black';
    ctx.font = '16px serif';
    ctx.fillText(parseInt(times[i], 10), positionX, 90);
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = getRandomColor();
    }
    ctx.fillRect(positionX, positionY, widthSize, heightSize);
    ctx.fillStyle = 'black';
    ctx.font = '16px serif';
    ctx.fillText(names[i], positionX, 270);
    if (i !== names.length - 1) {
      positionX += 90;
    }
  }

};
