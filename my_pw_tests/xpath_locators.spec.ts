import { test, expect, Locator } from '@playwright/test'

test("Verify the title of the page ", async ({ page }) => {
    await page.goto("https://demo.nopcommerce.com/");

    await page.getByRole('textbox', { name: 'Search store' }).fill("shoe");
    //await page.locator("//input[@id='small-searchterms']").fill("shoe");


    await page.getByRole('button', { name: 'Search' }).click();
    //await page.getByRole('img', { name: "Picture of Nike Floral Roshe Customized Running Shoes" }).click();

    await page.getByAltText("Picture of Nike Floral Roshe Customized Running Shoes").click();
    console.log(await page.locator("//span[id='price-value-26']").innerText());

    

})