import './Projects.less';
import basketballIcon from '../assets/basketball.png';
import footballIcon from '../assets/american-football.png';
import { Link } from 'react-router';

const ATTRIBUTION_LINK = 'https://www.flaticon.com/free-icons/';

export function Projects() {
    return (
        <div className='projects-list'>
                <Link to='/nba'>
                    <div className='project'>
                        <div className='project-title'>
                            NBA app
                            <a className='project-icon' href={ATTRIBUTION_LINK + 'basketball'}>
                                <img src={basketballIcon} />
                            </a>
                        </div>
                        <div className='project-description'>
                            One of the projects I did for fun was creating an NBA app to display the current NBA standings and live game data.
                            The standings data is scraped from CBS sports standings page and The live game data is updated every {'~10'} minutes from Balldontlie.io API.
                        </div>
                    </div>
                </Link>
                <Link to={'/nfl'}>
                    <div className='project'>
                        
                            <div className='project-title'>
                                NFL app 
                                <a className='project-icon' href={ATTRIBUTION_LINK + 'football'}>
                                    <img src={footballIcon} />
                                </a>
                            </div>
                        <div className='project-description'>
                            I recently started working on expanding the NBA App to work with other sports. I've started refactoring the NBA app components to support NFL data.
                            I've currently used the same scraper to pull NFL standings, however I still need to make some changes in order to show today's games.
                        </div>
                    </div>
                </Link>
            </div>
    )
}