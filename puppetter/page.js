const puppeteer=require("puppeteer");

let page = async (val,url) => {
    
    const browser = await puppeteer.launch({ headless: true,
        args: ['--no-sandbox','--disable-setuid-sandbox']});
    const page = await browser.newPage();

    await page.goto(url+ "page/" + val,{waitUntil:'domcontentloaded'});
    var results = [];
  
    results = results.concat(await extractedEvaluateCall(page));
    
            browser.close();
            return results;
    }
    async function extractedEvaluateCall(page) {
        return page.evaluate(() => {

        let data = []
        
        let elements = document.querySelectorAll("#content_box article") 
        let page=document.querySelector("#content_box" )
        let pageno=page.lastElementChild.lastElementChild.lastElementChild.previousElementSibling.innerText
        data.push({pageno})
        for (element of elements){
            let title=element.children[1].children[0].innerText
            let link=element.children[1].children[0].children[0].href.slice(20,)
            let image=element.children[0].children[0].children[0].src
            data.push({title,link,image})
        }
   
        return data; 
    });}


module.exports=page