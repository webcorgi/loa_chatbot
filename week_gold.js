
const url = 'https://kloa.gg/'; // Replace with your target URL


async function fetchContent(url) {
    try {
        const {default: fetch} = await import ('node-fetch');
        const response = await fetch(url);
        const body = await response('schedule-box_cards')
        let label = body.getElementsByTagName('label')
        let span = body.getElementsByTagName('span')
        body.text(); // or response.json() if the response is JSON
        return body;
    } catch (error) {
        console.error('Error fetching content:', error);
    }
}

fetchContent(url)
    .then(content => console.log(content))
    .catch(error => console.error('Error in fetchContent:', error));