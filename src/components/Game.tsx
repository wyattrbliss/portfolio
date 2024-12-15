import './Game.less';
import { NBAGame } from "@balldontlie/sdk";
import { Team } from './Team';
import { formatStatus } from '../services/utils';

interface NbaGameProps {
    game: NBAGame;
}

export function Game({ game }: NbaGameProps) {
    const live = game.period !== 0 && game.status !== 'Final';

    return (
        <div className='game-container'>
            <div className={'game'}>
                <Team 
                    name={game.visitor_team.name}
                    fullName={game.visitor_team.full_name}
                    away={true} />

                <div className='score'>
                    {game.visitor_team_score}
                </div>
                
                <GameDivider 
                    time={game.time}
                    status={game.status}
                    live={live} />

                <div className='score'>
                    {game.home_team_score} 
                </div>

                <Team 
                    name={game.home_team.name}
                    fullName={game.home_team.full_name}
                    away={false} />
            </div>
        </div>
    );
}

interface GameDividerProps {
    time: string;
    status: string;
    live: boolean
}

function GameDivider({time, status, live }: GameDividerProps) {
    return (
        <div className='game-divider'>
            {live ? (
                <>
                    <div className='game-period'>
                        {time == '' ? '' : time.split(' ')[1] + ' - '} 
                        {status}
                    </div>
                    {(status !== 'Halftime' && time !== '') &&
                        <div className='live-game-indicator' />
                    }
                </>
            ): (
                <div className='game-status'>{formatStatus(status)}</div>
            )}
            <div className='at-sign'>@</div>
        </div>
    );
}
