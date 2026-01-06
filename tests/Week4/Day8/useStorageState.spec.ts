import test from "@playwright/test"

test.use({storageState:"utils/SalesForce_Login.json"})
//use of storage state - skip login steps here  - reusable line of code
test("Use Storage State", async ({page}) => {
    await page.goto("https://testleaf.lightning.force.com/lightning/page/home")
    await page.locator("//span[text()='Accounts']").click()

})