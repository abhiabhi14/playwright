import test from "@playwright/test"

test("playwrightLocators", async ({page}) => {
    await page.goto("http://leaftaps.com/opentaps/control/main")
   //getbylabel
   await page.getByLabel("Username").fill("Demosalesmanager")
   await page.getByLabel("Password").fill("crmsfa")
   await page.getByRole('button',{name:"Login"}).click()
   
}
)