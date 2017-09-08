import { browser, by, element } from 'protractor';

export class Local.Angular.Xstorm.DevPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
