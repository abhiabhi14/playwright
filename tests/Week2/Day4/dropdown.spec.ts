import test from "@playwright/test"

/*test("Dropdown handling", async ({page})=>{
    await page.goto("https://leafground.com/select.xhtml")

    //await page.locator("..ui-selectonemenu").first().click()
    await page.selectOption(".ui-selectonemenu",{index:3})

await page.locator("[id='j_idt87:country_label']").click()
await page.locator("[id='j_idt87:country_2']").click()
})*/
/*
ClassRoom:
Use PageFixture
Url:https://www.telerik.com/contact
1st dropdown -> index
2nd dropdown -> value
3rd dropdown -> label*/


test("Dropdown handling", async ({page})=>{

    await page.goto("https://www.telerik.com/contact")
    //1st dropdown -> index
    await page.selectOption("[id='Dropdown-1']",{index:2})
    //2nd dropdown -> value
    await page.selectOption("[id='Dropdown-2']",{value:'DevCraft'})
    //3rd dropdown -> label
    await page.selectOption("[id='Country-1']",{label:'Algeria'})
})
        