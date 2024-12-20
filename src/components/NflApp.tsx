import './NflApp.less';
import { StandingsComponent } from './StandingsComponent';
import { useEffect, useState } from 'react';
import { scrapeNflStandings } from '../services/crawler';
import { TodaysGames } from './TodaysGames';

const HEADERS = ['', 'W', 'L', 'T', 'PCT', 'PF', 'PA', 'DIFF', 'HOME', 'ROAD', 'DIV', 'CONF', 'OCONF', 'STRK', 'W', 'DIV', 'POST'];
const DIVISIONS = ['EAST', 'NORTH', 'SOUTH', 'WEST'];

export function NflApp() {
    const [conf0, setConf0] = useState<string[][]>([]);
    const [conf1, setConf1] = useState<string[][]>([]);


    async function fetchStandings() {
        const resp = await scrapeNflStandings();

        setConf0(resp.slice(0, 16));
        setConf1(resp.slice(16, 32));
    };

    useEffect(() => {
        fetchStandings();
    }, []);
    
    return (
        <div className='nfl-app'>  
            <div className='beta-tag'>NFL api is still in beta - data may not be accurate</div>        
            <TodaysGames sport={'nfl'}/>

            <StandingsComponent
                sport={'NFL'}
                conferenceNames={['AMERICAN FOOTBALL CONFERENCE', 'NATIONAL FOOTBALL CONFERENCE']}
                conferences={[conf0, conf1]}
                headers={HEADERS}
                legend={renderLegend()} 
                divisions={DIVISIONS}
                />
        </div>
    )
}

function renderLegend() {
    return (
        <div className='legend'>
            * Legend: 
            <div>{'z - clinched home-field advantage and first-round bye'}</div>
            <div>{'y - clinched division'}</div>
            <div>{'x - clinched playoff berth'}</div>
            <div>{'e - eliminated from playoffs'}</div> 
        </div>
    );
}
