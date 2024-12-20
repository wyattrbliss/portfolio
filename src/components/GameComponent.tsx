import './GameComponent.less';
import { TeamComponent } from './TeamComponent';
import { GameDivider } from './GameDivider';
import { Game } from '../types';

interface GameComponentProps {
    game: Game;
}

export function GameComponent({ game }: GameComponentProps) {
    const { status, visitor_team, home_team, visitor_team_score, home_team_score } = game;
    const statusLastChar = game.status.charAt(game.status.length - 1);
    const live = statusLastChar !== 'Z' && statusLastChar !== 'T' && game.status !== 'Final';

    return (
        <div className='game-container'>
            <div className={'game'}>
                <TeamComponent
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

                <TeamComponent
                    name={home_team.name}
                    fullName={home_team.full_name}
                    away={false} />
            </div>
        </div>
    );
}
