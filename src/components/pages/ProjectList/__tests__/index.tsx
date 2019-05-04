import { Builder, By, Capabilities, until } from 'selenium-webdriver';

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

  it.only('Display Project list item', async () => {
    const capabilities = Capabilities.chrome();
    capabilities.set('chromeOptions', {
      args: ['--headless', '--no-sandbox', `--window-size=1280,700`],
    });
    const driver = await new Builder().withCapabilities(capabilities).build();
    await driver.get('http://localhost:3000/projects');
    const elements = await driver.wait(
      until.elementsLocated(By.css('a')),
      5000
    );

    expect(await elements[0].getText()).toEqual('テストプロジェクト１');
    expect(await elements[1].getText()).toEqual('テストプロジェクト２');

    await driver.quit();
  });
});
