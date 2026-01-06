import test from '@playwright/test'
import {parse} from 'csv-parse/sync'
import fs from 'fs'

test.use({storageState:'Data/LeafTapsLogin.json'})

//test.describe.parallel("test execution in parallel",async()=>{
test.describe("test execution in parallel",async()=>{
let records:any[]

//test.beforeAll - before all - read data
test.beforeAll("Read the value from CSV file",async()=>{
    console.log("Before All")
    records=parse(fs.readFileSync("Data/LT.csv"),{columns:true})
    
})

// before each test - login - repeated steps
test.beforeEach("",async({page})=>{
    console.log("Before Each")
   

    /*need not use this if we are using storag space
    //Enter creds and login
     await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator("#username").fill("Demosalesmanager")
    await page.locator("#password").fill("crmsfa")
    await page.locator(".decorativeSubmit").click() 
    await page.locator("text=CRM/SFA").click()*/
    page.goto("http://leaftaps.com/crmsfa/control/main")
})

//for(let value of records){
//test(`Create Lead ${value.TCNo}`,async({page})=>{

//test
test(`Create Lead`,async({page})=>{
    console.log("Lead")
await page.click("//a[text()='Leads']")
await page.click("//a[text()='Create Lead']")
})
 
 
test(`Create Account`,async({page})=>{
    console.log("Account")
await page.click("//a[text()='Accounts']")
await page.click("//a[text()='Create Account']")
})

test.afterEach("Fetch the test result",async({},testinfo)=>{
console.log("After Each Test")
console.log(testinfo.title)
console.log(testinfo.status)
 
 
})
 
test.afterAll("Attachment",async()=>{
    console.log("after all Test is  Completed")
})
 


})