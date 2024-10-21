import { test, expect } from '@playwright/test';

const selectors = {
    emailInputField: '#Email',
    passwordInputField: '#Password',
    logInButtonAuthorization: 'div > input.button-1.login-button',
};

test('Authorization', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/');
    await expect(page).toHaveTitle(/Demo Web Shop/);

    await page.getByRole('link', { name: 'Log in' }).click();
    await page.fill(selectors.emailInputField, 'fcz-sbg@mail.ru');
    await page.fill(selectors.passwordInputField, 'adminpassword');
    await page.click(selectors.logInButtonAuthorization); 

    await expect(page).toHaveURL(/.demowebshop.tricentis.com/);
});