import { CityPage } from './app.po';

describe('city App', function() {
  let page: CityPage;

  beforeEach(() => {
    page = new CityPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
