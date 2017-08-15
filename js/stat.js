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
var renderMaxTime = function (ctx, names, badTime) {
  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 110, 50);
  ctx.fillText(' Худшее время: ' + badTime[0] + ' мс у игрока ' + names[badTime[1]], 110, 70);
};
var renderHistograms = function (ctx, badTime, names, times, positionX) {
  var histogramWidth = 40;
  var histogramHeight = 150;
  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.fillText(Math.floor(times, 10), positionX, 245 - histogramHeight * Math.floor(times) / badTime[0]);
  ctx.fillStyle = 'white';
  ctx.fillStyle = names === 'Вы' ? 'rgba(255, 0, 0, 1)' : getRandomColor();
  ctx.fillRect(positionX, 250 - histogramHeight * Math.floor(times) / badTime[0], histogramWidth, histogramHeight * Math.floor(times) / badTime[0]);
  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.fillText(names, positionX, 270);
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
  renderMaxTime(ctx, names, getMaxTime(times), times);
  var positionX = 150;
  for (var i = 0; i < names.length; i++) {
    renderHistograms(ctx, getMaxTime(times), names[i], times[i], positionX);
    positionX += 90;
  }
};
