import { scrapeStandings } from '../services/crawler';
import { useEffect, useState } from 'react';
import { NbaConference } from './NbaConference';
import './NbaStandings.less';

export function NbaStandings() {
    const [west, setWest] = useState<string[][]>([]);
    const [east, setEast] = useState<string[][]>([]);
    const [conf, setConf] = useState(0);

    async function fetchStandings() {
        const resp = await scrapeStandings();
        setEast(resp.slice(0, 15));
        setWest(resp.slice(15, 30));
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
                <h2>Current NBA standings</h2>
                {'-'}
                <div className='conf-title'>
                    {conf === 0 ? <h2>WESTERN CONFERENCE</h2> : <h2>EASTERN CONFERENCE</h2>}
                </div>
                <button onClick={toggleConf}>Change conference</button>
            </div>
            <div className='conf'>
                <NbaConference conference={conf === 0 ? west : east} />
            </div>
            <div className='legend'>
                * Legend: 
                <div>z - clinched top seed in conference</div>
                <div>y - clinched division</div>
                <div>x - clinched playoff berth</div>
                <div>e - eliminated from playoffs</div> 
            </div>
        </div>
    );
}