import './NbaApp.less';
import { StandingsComponent } from './StandingsComponent';
import { TodaysGames } from './TodaysGames';
import { scrapeNbaStandings } from '../services/crawler';
import { useEffect, useState } from 'react';

const HEADERS = ['TEAM', 'W', 'L', 'pct', 'GB', 'PPG', 'OPPG', 'DIFF', 'HOME', 'ROAD', 'DIV', 'CONF', 'STRK', 'L10', 'W', 'DIV', 'POST'];
// const DIVISIONS = [['ATLANTIC', 'CENTRAL', 'SOUTHEAST'], ['NORTHWEST', 'PACIFIC', 'SOUTHWEST']];

export function NbaApp() {
    const [conf0, setConf0] = useState<string[][]>([]);
    const [conf1, setConf1] = useState<string[][]>([]);

    async function fetchStandings() {
        const resp = await scrapeNbaStandings();
        setConf0(resp.slice(0, 15));
        setConf1(resp.slice(15, 30));
    };

    useEffect(() => {
        fetchStandings();
    }, []);

    return (
        <div className='nba-app'>
            <TodaysGames sport={'nba'}/>
            <StandingsComponent 
                sport={'NBA'} 
                conferenceNames={['EASTERN CONFERENCE', 'WESTERN CONFERENCE']} 
                conferences={[conf0, conf1]}
                headers={HEADERS}
                legend={renderLegend()} />
        </div>
    )
}

function renderLegend() {
    return (
        <div className='legend'>
            * Legend: 
            <div>{'z - clinched top seed in conference'}</div>
            <div>{'y - clinched division'}</div>
            <div>{'x - clinched playoff berth'}</div>
            <div>{'e - eliminated from playoffs'}</div> 
        </div>
    );
}
