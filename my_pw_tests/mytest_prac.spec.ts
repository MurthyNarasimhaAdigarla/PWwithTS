import { test,expect } from "@playwright/test";


test("Verify the title of the page ",async ({page})=>{
await page.goto("https://www.microsoft.com/en-in")
console.log("Title is " , await page.title());
await expect(page).toHaveTitle("Microsoft – AI, Cloud, Productivity, Computing, Gaming & Apps")

})