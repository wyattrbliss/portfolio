import './NbaTodaysGames.less';
import { useState, useEffect, useCallback } from 'react';
import { sortByStatus, formatDate} from '../services/utils';
import { GameComponent } from './GameComponent';
import { BalldontlieAPI, NBAGame } from '@balldontlie/sdk';

const API_KEY = 'ca342780-942d-46a6-8db5-c65c6752f088';

const FETCH_INTERVAL = 20000;

export function NbaTodaysGames() {
    const api = new BalldontlieAPI({ apiKey: API_KEY });

    const [games, setGames] = useState<NBAGame[]>([]);
    const [date, setDate] = useState<Date>(new Date);
    const [isLoading, setIsLoading] = useState(true);

    // fetch today's games
    const fetchGames = useCallback((async () => {
        try {
            const resp = await api.nba.getGames({dates: [formatDate(date, false)]});
            setGames(resp.data);
            setIsLoading(false);
        } catch (error) {
            alert(error);
        };
    }), [date, api]);

    const handleDayChange = useCallback((days: number) => {
        setIsLoading(true);
        const result = new Date(date)
        result.setDate(date.getDate() + days);
        setDate(result);
    }, [date]);

    const setDateToday = () => {
        setIsLoading(true);
        setDate(new Date);
    }

    useEffect(() => {
        fetchGames();
        const interval = setInterval(fetchGames, FETCH_INTERVAL);
        return () => {
            clearInterval(interval);
        }
      }, [date]
    );

    const isDateToday = () => {
        const today = new Date();
        return date.getDay() === today.getDay() 
            && date.getMonth() === today.getMonth();
    }

    return (
        <div className='todays-games-container' id='todays-games'>
            <div className='pagination-container'>
                        {!isDateToday() && (
                                <button onClick={setDateToday}>Return to today</button>
                        )}
                        <div className='pagination'>
                            <button className='page-button' onClick={() => handleDayChange(-1)}>previous day</button>
                            <div className='todays-games-header'>
                                NBA{isDateToday() && ' today'}: {formatDate(date, true)}
                            </div>
                            <button className='page-button' onClick={() => handleDayChange(1)}>next day</button>
                        </div>
                    </div>
            {isLoading ? (
                <>{'LOADING...'}</>
            ) : (
                <div className={`games-container ${isLoading && 'loading'}`}>
                    {games.length > 0
                        ? (
                            games.sort(sortByStatus).map(function(game, i) {
                                return (
                                    <div key={i}>
                                        <GameComponent game={game} />
                                    </div>
                                );
                            })
                        ) : (
                            'No games today'
                        )
                    }
            </div>
            )}
        </div>
    )

}
