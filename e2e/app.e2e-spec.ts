import { VoyEnBusPOCPage } from './app.po';

describe('voy-en-bus-poc App', () => {
  let page: VoyEnBusPOCPage;

  beforeEach(() => {
    page = new VoyEnBusPOCPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
