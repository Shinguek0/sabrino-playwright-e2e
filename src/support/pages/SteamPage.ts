import { Page, expect } from '@playwright/test';
import SteamElements from '../elements/SteamElements';
import BasePage from './BasePage';

export default class CadastroPage extends BasePage {
  readonly steamElements: SteamElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.steamElements = new SteamElements(page);
  }

  async buscarValorConta(): Promise<void> {
    await this.steamElements.getBotaoMenu().click();
    await this.steamElements.getMenuCalculator().click();
    await this.steamElements.getCalculatorSearchBar().fill('76561198263062915');
    await this.steamElements.getButtonDisappoiment().click();
  }

  async compararJogos(): Promise<void> {
    await this.steamElements.getMostPlayedGames().click();
    await this.steamElements.getCounterStrike22().click();
  }

  async validarValorConta(): Promise<void> {
    await expect(this.steamElements.getNameProfile()).toBeVisible();
  }

  async validarComparacao(): Promise<void> {
    await expect(this.steamElements.getComparisonTwoApps()).toBeVisible();
  }
}
