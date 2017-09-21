import { RwdLoginPage } from './app.po';

describe('rwd-login App', () => {
  let page: RwdLoginPage;

  beforeEach(() => {
    page = new RwdLoginPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
