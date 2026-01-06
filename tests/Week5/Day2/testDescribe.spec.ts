//test.describe - to execute group of test cases in sequential or parallell
//overrides the config file - fullyParallel: value,

import test from '@playwright/test'

test.describe("Test Describe",()=>{

    //test.describe.configure({mode:'default'}) //- default means sequential mode
   // test.describe.configure({mode:'parallel'}) // runs in parallel
//test.describe.configure({mode:'serial'}) - depends on method - runs in sequential - if 1 test case fails - it will not proceed with other test cases

// retry in serial- used to retry all test cases(including passed) from start even if 1 test case fails
// test.describe.configure({mode:'serial',retries:1})

 // retry in default or parallel - used to retry only failed test case
 test.describe.configure({mode:'parallel',retries:1})

    test("testcase 1",async({page})=>{
         await page.goto("http://leaftaps.com/opentaps/control/main")
   //getbylabel
   await page.getByLabel("Username").fill("Demosalesmanager")
   await page.getByLabel("Password").fill("crmsfa")
   await page.getByRole('button',{name:"Login"}).click()
    })

     test("testcase 2",async({page})=>{
            await page.goto("https://www.amazon.ca/")
    })

     test("testcase 3",async({page})=>{
          await page.goto("https://login.salesforce.com/?locale=in")

    await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com")
    await page.locator("#password").fill("TestLeaf@2025")
    await page.click("#Login")
    })

})