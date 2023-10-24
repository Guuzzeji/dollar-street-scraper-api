import puppeteer from 'puppeteer';

// TODO []: Add hashset for better random ids, make sure random ids are not bias
// TODO []: Allow for range random ids to be generated
// Optional: Export to CSV https://www.npmjs.com/package/export-to-csv

async function getIdsFromPage(page, pageNumber) {
    const FAMILY_WEB_PAGE = "https://www.gapminder.org/dollar-street?active=";

    await page.goto('https://www.gapminder.org/dollar-street?p=' + pageNumber);
    const idList = await page.evaluate(() => {
        let htmlData = document
            .querySelector('.breakpoint__medium-up.row')
            .querySelectorAll(".col-4.col-md-3.Matrix_Thing__3EaRd");

        let ids = [];

        for (let itemCards of htmlData) {
            ids.push(itemCards
                .querySelector("button")
                .className
                .replaceAll("btn p-0 m-", "")
                .replaceAll(" Media_Container__l2PkG", ""));
        }

        return ids;
    });

    for (let x = 0; x < idList.length; x++) {
        idList[x] = FAMILY_WEB_PAGE + idList[x];
    }

    return idList;
}

async function getRandomFamilies(page) {
    const PAGE_NUMBER = 7; // min is 0, max is 7, total pages = 8
    const randomPage = Math.floor(Math.random() * PAGE_NUMBER);
    let familyIds = await getIdsFromPage(page, randomPage);

    let randomIndex = Math.floor(Math.random() * familyIds.length);

    return familyIds[randomIndex];
}


async function main() {

    // Launch the browser
    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
        waitForInitialPage: true
    });

    let setIds = new Set();

    const page = await browser.newPage();

    // Make sure random is not bias in anyway, every id is unique
    for (let x = 0; x < 30; x++) {
        while (true) {
            let familyId = await getRandomFamilies(page);

            if (!setIds.has(familyId)) {
                setIds.add(familyId);
                break;
            }
        }
    }

    let num = 0;
    setIds.forEach(function (familyId) {
        num += 1;
        console.log(num, familyId);
    });

    // Close browser.
    await browser.close();
}

main();