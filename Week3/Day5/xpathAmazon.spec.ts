
/*
load the url : https://www.amazon.in/
1. Locate the search box using attribute based xpath -> Iphone
2. Click on storage -> 512 GB and above
3. Click on add to cart butto
*/

import test from "@playwright/test"

test("Login Page", async ({page}) => {
    await page.goto("https://www.amazon.ca/")
    await page.locator("//input[@id='twotabsearchtextbox']").fill("iphone")
    await page.locator("//span[@id='nav-search-submit-text']").click()
    await page.locator("//span[text()='512 GB & above']").click()
    await page.locator("(//a[text()='See options'])[1]").click()
    
})