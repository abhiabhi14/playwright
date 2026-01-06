import loginInfo from '../../../Data/Salesforce.json'
import {test} from '@playwright/test'

for (let js of loginInfo){

    test(`Read from json ${js.tcName}`,async({page})=>{

        console.log(js.Username)
        console.log(js.Password)

         await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.getByLabel("Username").fill(js.Username)
   await page.getByLabel("Password").fill(js.Password)
   await page.getByRole('button',{name:"Login"}).click()

    })
}