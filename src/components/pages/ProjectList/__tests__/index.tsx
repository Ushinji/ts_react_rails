import { Builder, By, Capabilities } from 'selenium-webdriver';

describe('pages/ProjectList', () => {
  it('Display page title', async () => {
    const capabilities = Capabilities.chrome();
    capabilities.set('chromeOptions', {
      args: ['--headless', '--no-sandbox', `--window-size=1280,700`],
    });
    const driver = await new Builder().withCapabilities(capabilities).build();
    await driver.get('http://localhost:3000/projects');
    const title = await driver.findElement(By.css('h1')).getText();

    expect(title).toEqual('プロジェクト一覧');

    await driver.quit();
  });
});
