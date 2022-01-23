import { test, expect } from '@playwright/test';
import { HomePage } from '../PageObjects/home.page';

test('Amazon', async ({ page }) => {
  await page.goto('https://amazon.com/');
  let homePage = new HomePage(page);
  await homePage.clickSignIn();
  await homePage.clickEmail();
  await homePage.typeEmailSearchText();
  await homePage.clickSubmit();

  const content = await page.textContent('div.a-alert-content:nth-child(3)');
  
  expect(content).toContain('We cannot find an account with that email address');
});