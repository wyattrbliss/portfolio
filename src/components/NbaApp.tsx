import { Standings } from './Standings';
import { NbaTodaysGames } from './NbaTodaysGames';

const HEADERS = ['TEAM', 'W', 'L', 'pct', 'GB', 'PPG', 'OPPG', 'DIFF', 'HOME', 'ROAD', 'DIV', 'CONF', 'STRK', 'L10', 'W', 'DIV', 'POST'];

export function NbaApp() {
    return (
        <div>
            <Standings 
                sport={'NBA'} 
                conferences={['WESTERN CONFERENCE', 'EASTERN CONFERENCE']} 
                headers={HEADERS}/>
            <NbaTodaysGames />
        </div>
    )
}
