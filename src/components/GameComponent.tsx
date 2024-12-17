import './GameComponent.less';
import { Team } from './Team';
import { GameDivider } from './GameDivider';
import { NBAGame } from '@balldontlie/sdk';

interface GameComponentProps {
    game: NBAGame;
}

export function GameComponent({ game }: GameComponentProps) {
    const live = game.status.charAt(game.status.length - 1) !== 'Z' && game.status !== 'Final';

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
