'use strict';

var renderCloud = function (ctx, colorCloud, x, y) {
  ctx.fillStyle = colorCloud;
  ctx.fillRect(x, y, 420, 270);
};

var getMaxTime = function (times, timesLength) {
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

  var color = 'rgba(11, 19, 181, ';
  color += Math.random().toFixed(1) + ')';
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
  var heightCalculation = histogramHeight * Math.floor(times) / badTime[0];
  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.fillText(Math.floor(times), positionX, 245 - heightCalculation);
  ctx.fillStyle = names === 'Вы' ? 'rgba(255, 0, 0, 1)' : getRandomColor();
  ctx.fillRect(positionX, 250 - heightCalculation, histogramWidth, heightCalculation);
  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.fillText(names, positionX, 270);
};

window.renderStatistics = function (ctx, names, times) {
  var positionXWindow = 110;
  var positionY = 20;
  var namesLength = names.length;
  var timesLength = times.length;
  renderCloud(ctx, 'rgba(0, 0, 0, 0.7)', positionXWindow, positionY);
  positionXWindow = 100;
  positionY = 10;
  var badTime = getMaxTime(times, timesLength);
  renderCloud(ctx, 'white', positionXWindow, positionY);
  renderMaxTime(ctx, names, badTime);
  var positionX = 150;
  for (var i = 0; i < namesLength; i++) {
    renderHistograms(ctx, badTime, names[i], times[i], positionX);
    positionX += 90;
  }
};
