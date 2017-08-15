'use strict';

var renderCloud = function (ctx, colorCloud, x, y) {
  ctx.fillStyle = colorCloud;
  ctx.fillRect(x, y, 420, 270);
};

var getMaxTime = function (times) {
  var timesLength = times.length;
  var max = -1;
  var maxIndex = -1;
  var indexMaxTime = [];
  for (var i = 0; i < timesLength; i++) {
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
  return 'rgba(11, 19, 181,' + Math.floor(20 + Math.random() * (100 - 20 + 1)) / 100 + ')';
};

var renderMaxTime = function (ctx, names, maxTime) {
  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 110, 50);
  ctx.fillText(' Худшее время: ' + maxTime[0] + ' мс у игрока ' + names[maxTime[1]], 110, 70);
};

var renderHistograms = function (ctx, maxTime, names, times, positionX) {
  var histogramWidth = 40;
  var histogramHeight = 150;
  histogramHeight *= Math.floor(times) / maxTime[0];
  ctx.fillText(Math.floor(times), positionX, 245 - histogramHeight);
  ctx.fillStyle = names === 'Вы' ? 'rgba(255, 0, 0, 1)' : getRandomColor();
  ctx.fillRect(positionX, 250 - histogramHeight, histogramWidth, histogramHeight);
  ctx.fillStyle = 'black';
  ctx.fillText(names, positionX, 270);
};

window.renderStatistics = function (ctx, names, times) {
  var positionXWindow = 110;
  var positionY = 20;
  var namesLength = names.length;
  renderCloud(ctx, 'rgba(0, 0, 0, 0.7)', positionXWindow, positionY);
  positionXWindow = 100;
  positionY = 10;
  var maxTime = getMaxTime(times);
  renderCloud(ctx, 'white', positionXWindow, positionY);
  renderMaxTime(ctx, names, maxTime);
  var positionX = 150;
  for (var i = 0; i < namesLength; i++) {
    renderHistograms(ctx, maxTime, names[i], times[i], positionX);
    positionX += 90;
  }
};
