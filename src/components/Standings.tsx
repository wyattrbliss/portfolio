import { scrapeStandings } from '../services/crawler';
import { ReactNode, useEffect, useState } from 'react';
import { Conference } from './Conference';
import './Standings.less';

interface StandingsProps {
    sport: string;
    conferences: string[];
    legend?: ReactNode;
}

export function Standings({
    sport,
    conferences, 
}: StandingsProps) {
    const [conf0, setConf0] = useState<string[][]>([]);
    const [conf1, setConf1] = useState<string[][]>([]);
    const [conf, setConf] = useState(0);

    async function fetchStandings() {
        const resp = await scrapeStandings();
        setConf0(resp.slice(0, 15));
        setConf1(resp.slice(15, 30));
    };

    function toggleConf() {
        conf === 0 ? setConf(1) : setConf(0);
    };

    useEffect(() => {
        fetchStandings();
    }, []);

    return (
        <div className='standings-container'>
            <div className='conf-header'>
                <div>
                    {`Current ${sport} standings`}
                    {' - '}
                    {conf === 0 ? conferences[0] : conferences[1]}
                </div>
                <button onClick={toggleConf}>Change conference</button>
            </div>
            <div className='conf'>
                <Conference conference={conf === 0 ? conf0 : conf1} />
            </div>
            {renderLegend(sport)}
        </div>
    );
}

function renderLegend(sport: string) {
    return (
        <div className='legend'>
            * Legend: 
            <div>
                z - 
                {sport === 'NBA' 
                    ? 'clinched top seed in conference'
                    : 'clinched home-field advantage and first-round bye'
                }
            </div>
            <div>y - clinched division</div>
            <div>x - clinched playoff berth</div>
            <div>e - eliminated from playoffs</div> 
        </div>
    );
}
