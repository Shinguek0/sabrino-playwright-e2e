import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import SteamPage from '../support/pages/SteamPage';

test.describe('Teste SteamDB', () => {
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  let steamPage: SteamPage;
  const BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.steamDB')
    .retrieveData();

  test.beforeEach(async ({ page }) => {
    steamPage = new SteamPage(page);
    await page.goto(BASE_URL);
  });

  test('Abrir Calculadora', async () => {
    await steamPage.buscarValorConta();
    await steamPage.validarValorConta();
  });
});
