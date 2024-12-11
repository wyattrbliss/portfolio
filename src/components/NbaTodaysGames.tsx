import './NbaTodaysGames.less';
import { useState, useEffect, useCallback } from "react";
import { getTodaysDate, sortByStatus} from '../services/utils';
import { NbaGame } from "./NbaGame";
import { BalldontlieAPI, NBAGame } from "@balldontlie/sdk";

const API_KEY = 'ca342780-942d-46a6-8db5-c65c6752f088';

export function NbaTodaysGames() {
    const api = new BalldontlieAPI({ apiKey: API_KEY });
    const [games, setGames] = useState<NBAGame[]>([]);
    const [date, setDate] = useState(getTodaysDate(false));

    // fetch today's games
    async function fetchGames() {
        try {
            const resp = await api.nba.getGames({dates: [date]});
            setGames(resp.data);
        } catch (error) {
            alert('Unable to fetch games. Error: ' + error);
        };
    };

    const handlePagination = () => {
        alert('Date change coming soon.');
    };

    useEffect(() => {        
        fetchGames();
      }, []
    );

    return (
        <div className='todays-games-container'>
            <div className='pagination-container'>
                <div className='pagination'>
                    <button className='page-button' onClick={handlePagination}>previous day</button>
                    <div className='todays-games-header'>NBA{date === getTodaysDate(false) && ' today'}: {getTodaysDate(true)}</div>
                    <button className='page-button' onClick={handlePagination}>next day</button>
                </div>
            </div>
            <div>
                {games.length > 0
                ?
                games.sort(sortByStatus).map(function(game, i) {
                    return (
                        <div key={i}>
                            <NbaGame game={game} />
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
