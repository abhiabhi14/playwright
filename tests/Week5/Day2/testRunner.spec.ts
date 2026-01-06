import test from '@playwright/test'

/*
Test Annotation - configure behavior of test
test.only - to run this particular testcase
test.use - used in storage state - override context
test.skip - it will not come for execution
test.fail - mark test as expected to fail
test.fixme - it will not execute in cases when dev or data issue - code needs to be fixed
test.info - give information inside test function
*/

test.skip("test skip",async({page})=>{
        await page.goto("https://www.gmail.com/")
    

})
test("test",async({page})=>{
        await page.goto("https://www.google.com/")
    

})
test.fail("test fail",async({page})=>{
        await page.goto("https://www.amazon.in/")
    

})
test.fixme("test fixme",async({page})=>{
        await page.goto("https://www.amazon.ca/")
    

})
test("test info",async({page})=>{
    test.info().annotations.push({type:'Smoke Testing',description:'testing login'},{type:'Author',description:'abi'})
    //1 type,1 description
         await page.goto("http://leaftaps.com/opentaps/control/main")
   //getbylabel
   await page.getByLabel("Username").fill("Demosalesmanager")
   await page.getByLabel("Password").fill("crmsfa")
   await page.getByRole('button',{name:"Login"}).click()
    

})