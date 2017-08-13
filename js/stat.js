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
  ctx.fillText('Список результатов:', 110, 70);

  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillRect(110, 100, 40,150);
  ctx.fillStyle = 'black';
  ctx.font = '16px serif';
  ctx.fillText(names[0], 110, 270);
};
