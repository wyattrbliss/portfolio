import './NbaGame.less';
import { NBAGame } from "@balldontlie/sdk";
import { NbaTeam } from './NbaTeam';

interface NbaGameProps {
    game: NBAGame;
}

export function NbaGame({ game }: NbaGameProps) {
    const live = game.period !== 0;

    return (
        <div className='game-container'>
            <div className={'game'}>
                <NbaTeam 
                    name={game.visitor_team.name}
                    fullName={game.visitor_team.full_name}
                    away={true} />

                <div className='score'>
                    {game.visitor_team_score}
                </div>
                
                <GameDivider 
                    time={game.time}
                    status={game.status}
                    date={game.date}
                    live={live} />

                <div className='score'>
                    {game.home_team_score} 
                </div>

                <NbaTeam 
                    name={game.home_team.name}
                    fullName={game.home_team.full_name}
                    away={false} />
            </div>
        </div>
    );
}

interface GameDividerProps {
    time: string;
    date: string;
    status: string;
    live: boolean
}

function GameDivider({time, date, status, live }: GameDividerProps) {
    return (
        <div>
            {live
            ?
            <div className='game-divider'>
                <div className='game-period'>
                    {time == '' ? '' : time + ' - '} 
                    {status}
                </div>
                {(status !== 'Halftime' && status !== 'Final' && time !== '') &&
                <div className='live-game-indicator' />
                }
                <div className='at-sign'>@</div>
            </div>
            :
            <div className='game-divider'>
                <div className='game-status'>{date}</div>
                <div className='at-sign'>@</div>
            </div>
            }
        </div>
        
    );
}
