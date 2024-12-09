import { NbaApp } from "./NbaApp";

export function Projects() {
    return (
        <div>
            <h3>{'One of the projects I did for fun was creating an NBA app to display the current NBA standings (scraped from CBS) and live game data (updated every ~10 minutes from Balldontlie.io API)'}</h3>
            <NbaApp />
        </div>
    )
}