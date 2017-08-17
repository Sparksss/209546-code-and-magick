'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var generateNames = function () {
  return Math.round(1 + Math.random() * (9 + 1 - 1));
};

var getRandomWizards = function (number) {
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)',
    'rgb(56, 159, 117)', 'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'];

  var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
  return {name: WIZARD_NAMES[number] + ' ' + WIZARD_LAST_NAMES[number], coat: coatColor[number], eyes: eyesColor[number]};
};

var renderWizards = function (template) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < 4; i++) {
    var wizardElement = template.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = getRandomWizards(generateNames())['name'];
    wizardElement.querySelector('.wizard-coat').style.fill = getRandomWizards(generateNames())['coat'];
    wizardElement.querySelector('.wizard-eyes').style.fill = getRandomWizards(generateNames())['eyes'];
    fragment.appendChild(wizardElement);
  }
  return fragment;
};


similarListElement.appendChild(renderWizards(similarWizardTemplate));

userDialog.querySelector('.setup-similar').classList.remove('hidden');
