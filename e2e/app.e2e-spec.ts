import { TestCenterFrontPage } from './app.po';

describe('test-center-front App', function() {
  let page: TestCenterFrontPage;

  beforeEach(() => {
    page = new TestCenterFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
