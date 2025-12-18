import test from "@playwright/test"

test("Login Page", async ({page}) => {
    await page.goto("http://leaftaps.com/opentaps/control/main")

    //Enter creds and login
    await page.locator("#username").fill("Demosalesmanager")
    await page.locator("#password").fill("crmsfa")
    await page.locator(".decorativeSubmit").click() 
    await page.locator("text=CRM/SFA").click()
    //click leads
    await page.locator("text='Leads'").click()
    //click create lead
    await page.locator("text='Create Lead'").click()
    //fill details
    await page.locator("#createLeadForm_companyName").fill("SOTI")
    await page.locator("#createLeadForm_firstName").fill("first")
    await page.locator("#createLeadForm_lastName").fill("last")
    await page.locator("#createLeadForm_personalTitle").fill("Ms")
    await page.locator("#createLeadForm_generalProfTitle").fill("QA2")
    //click create lead
    await page.locator("[value='Create Lead']").click()
    //verify
   /*  let compName = await page.getByText("#viewLead_companyName_sp")
    let compName1='SOTI'
    if(compName.to('SOTI')){
    console.log("Company Name is validated")
    }
    else{
    console.log("Company Name is incorrect")
    }*/
    //get title
   // let title =await page.getByTitle("http://leaftaps.com/opentaps/control/main").
   // console.log(title)
    

}
)