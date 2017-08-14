'use strict';

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
var sortByGreater = function (times, names) {
  var result = -1;
  var timesAndNames = [];
  for (var j = 0; j < times.length; j++) {
    if (times[j] > times[j + 1]) {
      result = times[j];
      times[j] = times[j + 1];
      times[j + 1] = result;
      result = names[j];
      names[j] = names[j + 1];
      names[j + 1] = result;
    }
  }
  timesAndNames.push(times);
  timesAndNames.push(names);
  return timesAndNames;
};
var getRandomColor = function () {
  var charsAndNumbers = '0123456789ABCDEF';
  var color = '#0000';
  for (var i = 0; i < 2; i++) {
    color += charsAndNumbers[Math.floor(Math.random() * 16)];
  }
  return color;
};
window.renderStatistics = function (ctx, names, times) {

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
  var positionX = 150;
  var histogramWidth = 40;
  var histogramHeight = 150;
  var getHistogramHeights = function () {
    var histogramHeights = [];
    var histogramHeight = 150;
    var maxTime = getMaxTime(times)[0];
    for (var j = 0; j < times.length; j++) {
      histogramHeights.push(Math.floor((histogramHeight * times[j]) / maxTime));
    }
    return histogramHeights;
  };
  var values = sortByGreater(times, names);
  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = 'black';
    ctx.font = '16px serif';
    ctx.fillText(parseInt(values[0][i], 10), positionX, 245 - getHistogramHeights(getMaxTime(times))[i]);
    ctx.fillStyle = 'white';
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = getRandomColor();
    }
    ctx.fillRect(positionX, 250 - getHistogramHeights(histogramHeight, getMaxTime(times))[i], histogramWidth, getHistogramHeights(getMaxTime(times))[i]);
    ctx.fillStyle = 'black';
    ctx.font = '16px serif';
    ctx.fillText(values[1][i], positionX, 270);
    if (i !== names.length - 1) {
      positionX += 90;
    }
  }

};
