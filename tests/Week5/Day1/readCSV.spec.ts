import {test} from '@playwright/test'
import {parse} from 'csv-parse/sync'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

//read the value from csv file - set the path where file is located
//use file system

//.. - 2 dots to come out of current folder
/*const value:any[] =parse(fs.readFileSync(path.join(__dirname,"../../../Data/salesforce.csv"),'utf-8'),{
columns:true
})*/

const a:any[] =parse(fs.readFileSync("Data/salesforce.csv"),{columns:true})

for(let data of a ){
test(`Read from csv ${data.TCNo}`,async({page})=>{
    console.log(data.Username)
    console.log(data.Password)

  /*  await page.goto("https://login.salesforce.com/?locale=ca")
    await page.locator("#username").fill(data.Username)
    await page.locator("#password").fill(data.Password)
    await page.locator("#Login").click()*/

    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.getByLabel("Username").fill(data.Username)
   await page.getByLabel("Password").fill(data.Password)
   await page.getByRole('button',{name:"Login"}).click()

}
)

}