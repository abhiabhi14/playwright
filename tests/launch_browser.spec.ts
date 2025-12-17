

import { chromium, test } from "@playwright/test";

//default nature browser-headless: true
test("To launch a browser", async () => {
//launch browser
const browserInstance = await chromium.launch({ headless: false, channel:
"chrome" });
//launch window - context
const browserContext = await browserInstance.newContext();
//open page
const page = await browserContext.newPage();
//load URL -goto
await page.goto("http://leaftaps.com/opentaps/control/main");

await page.waitForTimeout(5000);
});