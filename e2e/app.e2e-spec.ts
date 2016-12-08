import { TestCLI2Page } from './app.po';

describe('test-cli2 App', function() {
  let page: TestCLI2Page;

  beforeEach(() => {
    page = new TestCLI2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
