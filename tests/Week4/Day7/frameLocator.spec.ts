import test from "@playwright/test"

test("Frame Locator", async ({page}) => {

await page.goto("https://www.leafground.com/frame.xhtml")
//even if it has multiple matches, picks the 1st match
await page.frameLocator("(//iframe)[1]").locator("#Click").click()

//nested frame
//outerframe((//iframe)[3]).innerframe("#frame2").locator().click()
await page.frameLocator("(//iframe)[3]").frameLocator("#frame2").locator("#Click").click()

})

