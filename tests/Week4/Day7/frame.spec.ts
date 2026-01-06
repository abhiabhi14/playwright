import test from "@playwright/test"

test("Handle frame with index", async ({page}) => {

await page.goto("https://www.leafground.com/frame.xhtml")
const totalFrame=page.frames()
console.log(totalFrame.length)

//main page as 1st frame 
//index starts from 0
//mp-[0],f1[1],f2[2]...

const frame1=totalFrame[1]
await frame1.locator("#Click").click()

//nested frame
const frame4=totalFrame[4]
await frame4.locator("#Click").click()
})