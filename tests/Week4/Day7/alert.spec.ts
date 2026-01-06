//default nature in playwright is to auto dismiss
//cancel your alert

import test from "@playwright/test"

    test("Auto dismiss Alert", async ({page}) => {
await page.goto("https://www.leafground.com/alert.xhtml")

await page.locator("(//span[text()='Show'])[2]").click()
//await page.waitForTimeout(5000)

})

//page.once - handle only 1 alert
test("Handle Alert with page.once", async ({page}) => {

    page.once('dialog',alertType=>{
        //what type of alert 
        const type = alertType.type()
        console.log(type)

        //get message
        console.log(alertType.message())
if(type=='alert'){
    alertType.accept()
}
   else if(type=='confirm'){
        alertType.dismiss()
}
else if(type==='prompt'){
    alertType.accept("Test")
}
    })

    await page.goto("https://www.leafground.com/alert.xhtml")
    //simple
    await page.locator("//span[text()='Show']").first().click()
    await page.waitForTimeout(5000)
//confirm
await page.locator("(//span[text()='Show'])[2]").click()
await page.waitForTimeout(5000)
//promtp
await page.locator("(//span[text()='Show'])[5]").click()
await page.waitForTimeout(5000)
})


test.only("Sweet Alert",async({page})=>{
 await page.goto("https://www.leafground.com/alert.xhtml")
  //sweet
await page.locator("(//span[text()='Show'])[3]").first().click()
await page.waitForTimeout(3000)

})
