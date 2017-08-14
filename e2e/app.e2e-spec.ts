import { BenWebPage } from './app.po';

describe('ben-web App', () => {
  let page: BenWebPage;

  beforeEach(() => {
    page = new BenWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
