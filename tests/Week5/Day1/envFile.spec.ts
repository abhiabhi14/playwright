import dotenv from 'dotenv'
import {test} from '@playwright/test'

//set path where env file is present
dotenv.config({path:'Data/QA.env'})
//dotenv.config({path:'Data/PROD.env'}) - path can be changed to run data from diff env file for same test case


test("login with env file",async({page})=>{

//process.env.keyName
//process-> global object for node .js
//env-> Enviroment
//keyname-> SF_Username
 
let url=process.env.SF_Url as string
let uName=process.env.SF_Username as string
let pass=process.env.SF_Password as string
 
    await page.goto(url)
        await page.locator("#username").fill(uName)
        await page.locator("#password").fill(pass)
        await page.locator("#Login").click()
    
})