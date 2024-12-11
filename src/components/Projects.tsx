import { NbaApp } from "./NbaApp";

export function Projects() {
    return (
        <div>
            <h3>
                One of the projects I did for fun was creating an NBA app to display the current NBA standings and live game data.
                The standings data is scraped from CBS sports standings page and The live game data is updated every {'~10'} minutes from Balldontlie.io API.
            </h3>
            <NbaApp />
        </div>
    )
}