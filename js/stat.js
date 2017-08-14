'use strict';

var renderCloud = function (ctx, colorCloud, x, y) {
  ctx.fillStyle = colorCloud;
  ctx.fillRect(x, y, 420, 270);
};
var getMaxTime = function (times) {
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
var getRandomColor = function () {
  var charsAndNumbers = '0123456789ABCDEF';
  var color = '#0000';
  for (var i = 0; i < 2; i++) {
    color += charsAndNumbers[Math.floor(Math.random() * 16)];
  }
  return color;
};
var renderHistogram = function (ctx, names, badTime, times) {
  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 110, 50);
  ctx.fillText(' Худшее время: ' + badTime[0] + ' мс у игрока ' + names[badTime[1]], 110, 70);
  var positionX = 150;
  var histogramWidth = 40;
  var histogramHeight = 150;
  var histogramHeights = [];
  var maxTime = getMaxTime(times)[0];
  for (var j = 0; j < times.length; j++) {
    histogramHeights.push(Math.floor((histogramHeight * times[j]) / maxTime));
  }
  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = 'black';
    ctx.font = '16px PT Mono';
    ctx.fillText(parseInt(times[i], 10), positionX, 245 - histogramHeights[i]);
    ctx.fillStyle = 'white';
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = getRandomColor();
    }
    ctx.fillRect(positionX, 250 - histogramHeights[i], histogramWidth, histogramHeights[i]);
    ctx.fillStyle = 'black';
    ctx.font = '16px PT Mono';
    ctx.fillText(names[i], positionX, 270);
    if (i !== names.length - 1) {
      positionX += 90;
    }
  }
};
window.renderStatistics = function (ctx, names, times) {
  var colorCloud = 'rgba(0, 0, 0, 0.7)';
  var positionXWindow = 110;
  var positionY = 20;
  renderCloud(ctx, colorCloud, positionXWindow, positionY);
  colorCloud = 'white';
  positionXWindow = 100;
  positionY = 10;
  renderCloud(ctx, colorCloud, positionXWindow, positionY);
  renderHistogram(ctx, names, getMaxTime(times), times);
};
