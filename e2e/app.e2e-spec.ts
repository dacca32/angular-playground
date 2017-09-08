import { Local.Angular.Xstorm.DevPage } from './app.po';

describe('local.angular.xstorm.dev App', () => {
  let page: Local.Angular.Xstorm.DevPage;

  beforeEach(() => {
    page = new Local.Angular.Xstorm.DevPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
