'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

var WIZARD_lAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];


var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var namesLenght = WIZARD_NAMES.length;

userDialog.querySelector('.setup-similar').classList.remove('hidden');

var generateNames = function (max) {
  return Math.floor(Math.random() * (max - 1));
};

for (var i = 0; i < 4; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent =  WIZARD_NAMES[generateNames(namesLenght)] +
    ' ' + WIZARD_lAST_NAMES[generateNames(namesLenght)];
  console.log(generateNames(namesLenght));
  similarListElement.appendChild(wizardElement);
}


