import './GameComponent.less';
import { Team } from './Team';
import { GameDivider } from './GameDivider';
import { Game } from '../types';

interface GameComponentProps {
    game: Game;
}

export function GameComponent({ game }: GameComponentProps) {
    const { status, visitor_team, home_team, visitor_team_score, home_team_score } = game;
    const live = game.status.charAt(game.status.length - 1) !== 'Z' && game.status !== 'Final';

    return (
        <div className='game-container'>
            <div className={'game'}>
                <Team
                    name={visitor_team.name}
                    fullName={visitor_team.full_name}
                    away={true} />

                <div className='score'>
                    {visitor_team_score}
                </div>
                
                <GameDivider 
                    time={live && 'time' in game ? game.time : ''}
                    status={status}
                    live={live} />

                <div className='score'>
                    {home_team_score}
                </div>

                <Team
                    name={home_team.name}
                    fullName={home_team.full_name}
                    away={false} />
            </div>
        </div>
    );
}
