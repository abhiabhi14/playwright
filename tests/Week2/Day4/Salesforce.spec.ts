/*classRoom:
load url : https://login.salesforce.com/?locale=in
username : dilipkumar.rajendran@testleaf.com
password : TestLeaf@2025
click on login button
wait(12000)
gettitle of page 
click on applauncher or 9 dot icon*/

import test from "@playwright/test"

test("Salesforce", async ({page}) => {
    await page.goto("https://login.salesforce.com/?locale=in")

    await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com")
    await page.locator("#password").fill("TestLeaf@2025")
    await page.locator("#Login").click()    

    await page.waitForTimeout(12000)

    let title= await page.title()
    console.log("The title of the page is: " + title)
   await page.locator("[title='App Launcher']").click()
})
