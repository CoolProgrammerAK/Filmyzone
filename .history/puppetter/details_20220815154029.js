const puppeteer = require("puppeteer");

let get_details = async (val, url) => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();

  await page.goto(url + val, { waitUntil: "domcontentloaded" });
  var results = [];
  results = results.concat(await extractedEvaluateCall(page));

  browser.close();
  return results;
};

async function extractedEvaluateCall(page) {
  return page.evaluate(() => {
    let data = [];
    let related = [];
    let fname = "";
    let fsip = "";
    let element = document.querySelector("#content_box");
    let articles = document.querySelectorAll(
      "#content_box .post .related-posts .clear article"
    );

    let category =
      element.children[0].children[0].children[0].children[0].innerText;
    let heading =
      element.children[0].children[0].children[0].children[1].innerText;
    let time =
      element.children[0].children[0].children[0].children[2].innerText;
    let desc =
      element.children[0].children[0].children[1].children[2].children[0]
        .innerText;
    let title =
      element.children[0].children[0].children[1].children[2].children[2]
        .innerText;
    let photo =
      element.children[0].children[0].children[1].children[2].children[2]
        .children[0].srcset;
    let language =
      element.children[0].children[0].children[1].children[2].children[3].innerText.replace(
        "Language: ",
        ""
      );
    let size =
      element.children[0].children[0].children[1].children[2].children[4].innerText.replace(
        "Size: ",
        ""
      );
    let quality =
      element.children[0].children[0].children[1].children[2].children[5].innerText.replace(
        "Quality: ",
        ""
      );
    let genre =
      element.children[1].children[0].children[1].children[2].children[6].innerText.split(
        ":"
      )[1];
    let country =
      element.children[1].children[0].children[1].children[2].children[7].innerText.replace(
        "Country: ",
        ""
      );
    let actors =
      element.children[1].children[0].children[1].children[2].children[8].innerText.replace(
        "Actors: ",
        ""
      );
    let coming_soon =
      element.children[1].children[0].children[1].children[2].children[10]
        .innerText;
    let download_title =
      element.children[1].children[0].children[1].children[2].children[9]
        .innerText;

    fname = document.querySelector("form[method=post]").children[0].value;

    fsip = document.querySelector("form[method=post]").children[1].value;

    let review_default =
      element.children[1].children[0].children[1].children[2].children[11]
        .innerText;
    let review_heading =
      element.children[1].children[0].children[1].children[2].children[12]
        .innerText;
    let review_details =
      element.children[1].children[0].children[1].children[2].children[13]
        .innerText;
    for (let article of articles) {
      let article_photo = article.children[0].children[0].children[0].srcset;
      let article_text = article.children[1].innerText;
      let article_link = article.children[0].href.slice(20);
      related.push({ article_text, article_photo, article_link });
    }

    data.push({
      single_post: {
        category,
        heading,
        time,
        title,
        photo,
        language,
        size,
        quality,
        genre,
        country,
        actors,
        desc,
        fname,
        fsip,
        download_title,
        coming_soon,
        review_default,
        review_heading,
        review_details,
      },
      related_post: { related },
    });

    // let image=document.querySelector("#post-9710 > div.single_post > div > div.thecontent.clearfix > p:nth-child(3) > img").src
    // data.push({category,title,time,general,image})

    return data;
  });
}

module.exports = get_details;
