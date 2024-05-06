const getStorage = require('./db').get;
const allLocales = require('../locales.json');
const defTemplate = require('../templates/utils/defaultTemplate');

const STATUS_SUCCESSFUL = 'ok';
const STATUS_ERRORED = 'error';
const DEFAULT_LOCALE = 'en';

// Temporal dummy storage accessor methods
const defaultSettingsResponse = {
  template: defTemplate,
  locale: DEFAULT_LOCALE,
  status: STATUS_SUCCESSFUL,
  color: '#007B34',
  title: 'Link your accounts',
  logoPath: 'https://images.ctfassets.net/hjcv6wdwxsdz/7M2bRDJrfnseMjP87h67Id/4a04655ee954c5d817cd02baf0e5d15a/Hinge_Health_Logo_Horizontal.svg',
  removeOverlay: true
};

function getSettings() {
  return getStorage()
    .read()
    .then(data => data.settings || defaultSettingsResponse);
}

function setSettings(settings) {
  return getStorage()
    .write({
      settings
    })
    .then(() => ({ status: STATUS_SUCCESSFUL }));
}

function getLocales() {
  return getStorage()
    .read()
    .then(data => data.locales || allLocales);
}

function setLocales(locales) {
  return getStorage()
    .write({
      locales
    })
    .then(() => ({ status: STATUS_SUCCESSFUL }));
}

module.exports = {
  STATUS_SUCCESSFUL,
  STATUS_ERRORED,
  getSettings,
  setSettings,
  getLocales,
  setLocales
};
