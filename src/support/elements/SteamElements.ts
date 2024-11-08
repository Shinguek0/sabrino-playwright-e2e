import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class CadastroElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getBotaoMenu(): Locator {
    return this.page.locator('button[id="js-header-hamburger"]');
  }

  getMenuCalculator(): Locator {
    return this.page.locator('text=Calculator').nth(0);
  }

  getCalculatorSearchBar(): Locator {
    return this.page.locator('input[name="player"]');
  }

  getButtonDisappoiment(): Locator {
    return this.page.locator('text=Get disappointed in your life');
  }

  getNameProfile(): Locator {
    return this.page.locator('text=(Aka)Clone do alan ◕o◕');
  }

  getBotaoNovoCadastro(): Locator {
    return this.page.locator('text=Cadastre-se para fazer entregas');
  }

  getMostPlayedGames(): Locator {
    return this.page.locator('text=Most Played');
  }

  getButtonCompare(): Locator {
    return this.page.locator('text=Click to compare 2 games');
  }

  getComparisonTwoApps(): Locator {
    return this.page.locator('text=Comparing Steam charts for 2 apps');
  }

  getCounterStrike2(): Locator {
    const row = this.page.locator('tr:has(td >> text="Counter-Strike 2"');
    return row.locator('td.add:has-text("+")');
  }

  getCounterStrike22(): Locator {
    return this.page.locator(
      'tr:has(td:text("Counter-Strike 2")) td.add:has-text("+")'
    );
  }
}
