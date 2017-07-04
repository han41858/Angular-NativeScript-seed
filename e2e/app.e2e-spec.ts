import { AngularNativeScriptSeedPage } from './app.po';

describe('angular-native-script-seed App', () => {
  let page: AngularNativeScriptSeedPage;

  beforeEach(() => {
    page = new AngularNativeScriptSeedPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
