import { AnimatePage } from './app.po';

describe('animate App', () => {
  let page: AnimatePage;

  beforeEach(() => {
    page = new AnimatePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
