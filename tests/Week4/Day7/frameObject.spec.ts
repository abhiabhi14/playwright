import test from "@playwright/test"

test("Frame Object", async ({page}) => {

await page.goto("https://www.leafground.com/frame.xhtml")
//object - url or name - optional value
await page.frame({url:"https://www.leafground.com/default.xhtml"})?.locator("#Click").click()

//nested frame
await page.frame({url:"https://www.leafground.com/page.xhtml"})?.frameLocator("https://www.leafground.com/framebutton.xhtml").locator("#Click").click()
})
