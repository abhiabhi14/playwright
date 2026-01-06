import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3Dleaftaps%26oq%3Dleaftaps%26gs_lcrp%3DEgZjaHJvbWUyBggAEEUYOdIBCDI2NjBqMGoyqAIAsAIB%26sourceid%3Dchrome%26ie%3DUTF-8%26sei%3Dsg1aabO9Ed6A5OMP4ebH0Q0&q=EgStIQQfGLKb6MoGIjBAgncuv0ETErHCGkXB01usB3PSmEvb8UjbW0QmwXzpVhnNUNvqZ1r1rqHi1tXUKqAyAVJaAUM');
  await page.getByRole('link', { name: 'Leaftaps - TestLeaf Automation Platform leaftaps.com http://leaftaps.com › opentaps › control', exact: true }).click();
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('demosalesmanager');
  await page.getByRole('textbox', { name: 'Username' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('crmsfa');
  await page.getByRole('textbox', { name: 'Password' }).press('Enter');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'CRM/SFA' }).click();
});