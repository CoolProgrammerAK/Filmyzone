const { request } = require("express");
const puppeteer = require("puppeteer");

let download_movie = async (fname, fsip, url) => {
  const browser = await puppeteer.launch({
    headless: true, acceptInsecureCerts: true, 
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
    ignoreHTTPSErrors: true,
  });
  const page = await browser.newPage();
  await page.setRequestInterception(true);

  page.on("request", (interceptedRequest) => {
    var data = {
      method: "POST",
      postData: `fname=${fname}&fsip=${fsip}`,
      headers: {
        ...interceptedRequest.headers,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };
    interceptedRequest.continue(data);
  });
  await page.goto("https://123mkv.pics/" + "start-downloading/", { waitUntil: "domcontentloaded" });

  var results = [];

  results = results.concat(await extractedEvaluateCall(page));

  browser.close();
  return results;
};
async function extractedEvaluateCall(page) {
  return page.evaluate(() => {
    let data = [];
    let elements = document.querySelector("#content_box");

    // let ss1 =
    //   elements.children[0].children[0].children[1].children[13].children[0].src
    // let ss2 =
    //   elements.children[0].children[0].children[1].children[14].children[0].src
    // let ss3 =
    //   elements.children[0].children[0].children[1].children[15].children[0].src;
    let link =
      elements.children[0].children[0].children[1].children[5].children[0].href

    data.push({ 
      // ss1,
      
      //  ss2,
        // ss3,
         link
         });
    return data;
  });
}

module.exports = download_movie;
