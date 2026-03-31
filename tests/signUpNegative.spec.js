import { test, expect } from '@playwright/test';

test('Assert error message for empty username in Sign up form', async ({ page }) => {
    await page.goto('https://conduit.mate.academy/user/register');
    await page.getByPlaceholder('Email').fill('kravchukqaruslan@gmail.com');
    await page.getByPlaceholder('Password').fill('123456');
    await page.getByRole('button',{name:'Sign up'}).click();
    expect(page.getByRole('list').nth(1)).toContainText('Username must start with a letter, have no spaces, and be 2 - 40 characters.');

});

test('Assert error message for empty email in Sign up form', async ({ page }) => {

});

test('Assert error message for empty password in Sign up form', async ({ page }) => {

});

