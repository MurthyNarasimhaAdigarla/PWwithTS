import {test,expect,Locator} from "@playwright/test";

test("Verify the title of the page ",async ({page})=>{
await page.goto("https://demo.nopcommerce.com/")
console.log("Title is " , await page.title());
//const title1 : Locator= await page.title();
//await title1.click();




})