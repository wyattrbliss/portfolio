import './NbaTodaysGames.less';
import { useState, useEffect, useCallback } from "react";
import { sortByStatus, formatDate} from '../services/utils';
import { Game } from "./Game";
import { BalldontlieAPI, NBAGame } from "@balldontlie/sdk";

const API_KEY = 'ca342780-942d-46a6-8db5-c65c6752f088';

export function NbaTodaysGames() {
    const api = new BalldontlieAPI({ apiKey: API_KEY });
    const [games, setGames] = useState<NBAGame[]>([]);
    const today = (new Date).toDateString();
    const [date, setDate] = useState<Date>(new Date);
    const [isLoading, setIsLoading] = useState(true);

    // fetch today's games
    const fetchGames = useCallback((async () => {
        try {
            const resp = await api.nba.getGames({dates: [formatDate(date, false)]});
            setGames(resp.data);
            setIsLoading(false);
        } catch (error) {
            alert('Unable to fetch games. Error: ' + error);
        };
    }), [date, api]);

    const handleDayChange = useCallback((days: number) => {
        setIsLoading(true);
        const result = new Date(date)
        result.setDate(date.getDate() + days);
        setDate(result);
    }, [date]);

    useEffect(() => {        
        fetchGames();
      }, [date]
    );

    return (
        <div className='todays-games-container'>
            <div className='pagination-container'>
                <div className='pagination'>
                    <button className='page-button' onClick={() => handleDayChange(-1)}>previous day</button>
                    <div className='todays-games-header'>NBA{date.toDateString() == today && ' today'}: {formatDate(date, true)}</div>
                    <button className='page-button' onClick={() => handleDayChange(1)}>next day</button>
                </div>
            </div>
            <div className={`games-container ${isLoading && 'loading'}`}>
                {games.length > 0
                ?
                games.sort(sortByStatus).map(function(game, i) {
                    return (
                        <div key={i}>
                            <Game game={game} />
                        </div>
                    );
                })
                :
                'No games today'
                }
            </div>
        </div>
    )

}
