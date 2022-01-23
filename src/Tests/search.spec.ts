import { test, expect } from '@playwright/test';
import { SearchClass } from '../PageObjects/search.page';

test('Progressive', async ({ page }) => {
  await page.goto('https://google.com/');
  let searchtest = new SearchClass(page);
  await searchtest.typeSearchText();
  await searchtest.pressEnter();
  const text = await searchtest.searchResult();
  console.log(text);
  expect(text).toContain('Progressive: An Insurance Company You Can Rely On');
});