import axios from 'axios';
import * as cheerio from 'cheerio';

const NBA_STANDINGS_URL = 'https://www.cbssports.com/nba/standings/';
const NFL_STANDINGS_URL = 'https://www.cbssports.com/nfl/standings/';

// scrape cbs sports standings page
export async function scrapeNbaStandings() {
    const rows: string[][] = [];

	try {
		const response = await axios(NBA_STANDINGS_URL);
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

export async function scrapeNflStandings() {
    const rows: string[][] = [];

	try {
		const response = await axios(NFL_STANDINGS_URL);
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
        alert('Error fetching NFL standings');
	}
    
    return rows;
};
