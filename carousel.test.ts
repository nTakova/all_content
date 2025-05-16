import { test, expect } from '@playwright/test';

test ('Add to card from Recommended items', async ({page}) => {
    await page.goto('https://automationexercise.com/');
    
//Accept coockies
    await page.getByRole('button', { name: 'Consent' }).click();

//Verify that home page is visible successfully
    await expect(page.locator('.navbar-nav')).toBeVisible();


//Verify that page is scrolled up and 'Full-Fledged practice website for Automation Engineers' text is visible on screen
 await expect(page.locator('.carousel-inner').filter({hasText:"Full-Fledged practice website for Automation Engineers"})).toBeVisible({ timeout: 5000 });
 
//.filter({hasText:"Full-Fledged practice website for Automation Engineers"})).
});
