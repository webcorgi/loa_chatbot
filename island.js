/* 프로키온의 나침반 */
function response(room, msg, sender, isGroupChat, reply, imageDB, packageName) {
    const apiUrl = "https://kloa.gg"; // The URL of the website you want to crawl
    const data = callApi(apiUrl);
    if (data) {
        // You can now process the 'data' variable containing the information from the website
        // For example, you can extract the content within the specified elements
        const contentArray = extractContent(data);
        if (contentArray.length === 3) {
            reply.reply(room, "Content Array: " + JSON.stringify(contentArray));
        } else {
            reply.reply(room, "Couldn't extract content");
        }
    }
}

const apiKey = ""; // You may need to provide an API key if the website requires one

const callApi = (url) => {
    try {
        const response = org.jsoup.Jsoup.connect(url)
            .ignoreContentType(true)
            .get();

        const data = response.toString();
        return data;
    } catch (err) {
        console.log(err);
    }
}

// Function to extract content within the specified HTML element
const extractContent = (html) => {
    try {
        const document = org.jsoup.Jsoup.parse(html); // Parse the HTML
        const targetElement = document.select('#schedule-box_cards'); // Select the element by class

        if (targetElement.size() > 0) {
            const pElements = targetElement.select('span'); // Select all <p> elements within the div
            const contentArray = [];

            pElements.each(function(index, pElement) {
                const spans = pElement.select('label');
                if (spans.size() === 2) {
                    const name = spans.get(0).text();
                    const item = spans.get(1).text();
                    contentArray.push({ name, item });
                }
            });

            return contentArray;
        }
    } catch (err) {
        console.log(err);
    }
    return []; // Return an empty array if extraction fails
}
