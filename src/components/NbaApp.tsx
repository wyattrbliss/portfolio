import { NbaStandings } from "./NbaStandings"
import { NbaTodaysGames } from "./NbaTodaysGames"
export function NbaApp() {

    return (
        <div>
            <NbaStandings />
            <NbaTodaysGames />
        </div>
    )
}