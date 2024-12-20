import { ReactNode, useState } from 'react';
import { Conference } from './ConferenceComponent';
import './StandingsComponent.less';

interface StandingsComponentProps {
    sport: string;
    conferenceNames: string[];
    conferences: string[][][];
    headers: string[];
    legend: ReactNode;
    divisions?: string[];
}

export function StandingsComponent({
    sport,
    conferenceNames,
    conferences,
    headers,
    legend,
    divisions,
}: StandingsComponentProps) {
    const [conf, setConf] = useState(0);

    function toggleConf() {
        conf === 0 ? setConf(1) : setConf(0);
    };

    return (
        <div className='standings-container'>
            <div className='conf-header'>
                <div>
                    {`Current ${sport} standings`}
                    {' - '}
                    {conf === 0 ? conferenceNames[0] : conferenceNames[1]}
                </div>
                <button onClick={toggleConf}>Change conference</button>
            </div>
            <div className='conf'>
                <Conference 
                    conference={conf === 0 ? conferences[0] : conferences[1]}
                    headers={headers}
                    divisions={divisions} />
            </div>
            {legend}
        </div>
    );
}
