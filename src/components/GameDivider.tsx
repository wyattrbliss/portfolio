import './GameDivider.less'
import { formatStatus } from '../services/utils';

interface GameDividerProps {
    time: string;
    status: string;
    live: boolean
}

export function GameDivider({time, status, live }: GameDividerProps) {
    return (
        <div className='game-divider'>
            {live ? (
                <>
                    <div className='game-period'>
                        {time && time.split(' ')[1] ? time.split(' ')[1] + ' - ' : ''} 
                        {status}
                    </div>
                    {(status !== 'Halftime') &&
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