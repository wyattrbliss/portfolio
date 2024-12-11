import './NbaTeam.less';

interface NbaTeamProps {
    name: string;
    fullName: string;
    away: boolean;
}

export function NbaTeam({ name, fullName, away}: NbaTeamProps) {

    return (
        <div className='team-container'>
            <a href={`https://www.nba.com/${name}/`}
               target='_blank'>
                <div className={`team ${away ? 'away' : 'home'}-team`}>
                    {fullName} 
                </div>
            </a>
        </div>
    );
}