import test, { expect } from "@playwright/test";


test("Assertions in Playwright", async ({ page }) => {
  
    await page.goto("https://leafground.com/input.xhtml");

    let enabledBox = page.getByPlaceholder("Babu Manickam")
    //hard assert - expect is failed it will not run next line of code
    //soft assert - will run all lines of code even if one expect fails
    //await expect(enabledBox).toBeDisabled()
    await expect.soft(enabledBox).toBeDisabled({timeout:10000})
    console.log("Assertion is passed");
})

//test.only - to run only this test
test.only ("Non retry Assertions", async ({ page }) => {

    await page.goto("https://leaftaps.com/opentaps/control/main")

    const expectTitle = await page.title()
    console.log("Title is: " + expectTitle)
    const actualTitle = "Leaftaps"
   
    expect(expectTitle).toEqual(actualTitle)



})