'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

userDialog.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var WIZARD_NAMES = ['Волшебник_1', 'Волшебник_2', 'Волшебник_3', 'Волшебник_4'];

for (var i = 0; i < WIZARD_NAMES; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = WIZARD_NAMES[i];
  similarListElement.appendChild(wizardElement);
}
