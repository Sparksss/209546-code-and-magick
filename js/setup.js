'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColor = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandomNumber = function (max) {
  return Math.floor(Math.random() * max);
};

var getRandomWizards = function (randomNumber) {
  var number = randomNumber(WIZARD_NAMES.length);
  return {name: WIZARD_NAMES[number] + ' ' + WIZARD_LAST_NAMES[number], coat: coatColor[randomNumber(coatColor.length)], eyes: eyesColor[randomNumber(eyesColor.length)]};
};

var renderWizards = function (template) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < 4; i++) {
    var wizardElement = template.cloneNode(true);
    var wizard = getRandomWizards(getRandomNumber);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard['name'];
    wizardElement.querySelector('.wizard-coat').style.fill = wizard['coat'];
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard['eyes'];
    fragment.appendChild(wizardElement);
  }
  return fragment;
};

similarListElement.appendChild(renderWizards(similarWizardTemplate));

userDialog.querySelector('.setup-similar').classList.remove('hidden');
