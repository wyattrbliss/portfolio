import axios from 'axios';
import * as cheerio from 'cheerio';

const STANDINGS_URL = 'https://www.cbssports.com/nba/standings/';

// scrape cbs sports standings page
export async function scrapeStandings() {
    const rows: string[][] = [];

	try {
		const response = await axios(STANDINGS_URL);
		const html = response.data;
		const $ = cheerio.load(html);

		// parse table rows
		$('tr').each((_idx, el) => {
			const row = $(el);
			const values = $(row).find('td').text();
			if (values !== '') {
				let valuesSplit = values.split('\n')
				let noSpaces = valuesSplit.filter(value => value !== '' && value !== '\n');
				rows.push(noSpaces);
			}
		});
	} catch (error) {
        alert('Error fetching NBA standings');
	}
    
    return rows;
};
