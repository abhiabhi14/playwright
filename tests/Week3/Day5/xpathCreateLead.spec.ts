import test from "@playwright/test"

test("Login Page", async ({page}) => {
    await page.goto("http://leaftaps.com/opentaps/control/main")

    //Enter creds and login
    await page.locator("input[@id='username']").fill("Demosalesmanager")
    //another method to fill
   // await page.fill("input[@id='username']", "Demosalesmanager")
    await page.locator("input[@id='password']").fill("crmsfa")
    await page.locator("input[@class='decorativeSubmit']").click() 
    await page.locator("//a[contains(text(),'CRM')]").click()
    
}
)
