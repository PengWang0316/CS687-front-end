import axios from 'axios';

import { I18nURI } from '../config';

export default class I18n {
  private static dict: string;
  private static language: string;
  static defaultLanguage: string;

  static setLanguage(language: string) {
    I18n.language = language;
  }

  static setDefaultLanguage(defaultLanguage: string) {
    I18n.defaultLanguage = defaultLanguage;
  }

  static async init() {
    if (!I18n.language) I18n.language = navigator.language;
    let { data } = await axios.get(I18nURI, { params: { language: I18n.language } });
    // If this language was not found, try to fetch the default language.
    if (data === null && I18n.defaultLanguage) ({ data } = await axios.get(I18nURI, { params: { language: I18n.defaultLanguage } }));
    // I18n.dict = JSON.parse(data);
    I18n.dict = data;
  }

  static get(key: string) {
    // Get users' default language if it has not been set.
    if (!I18n.dict) {
      console.info('The dictionary has not been set up. Please define a dictionary and call I18n.setDictionary(dictionary)');
      return key;
    }
    if (!I18n.dict[key]) console.info(`The key ${key} is not found in the dictionary.`);
    else return I18n.dict[key];
    return key;
  }
}
