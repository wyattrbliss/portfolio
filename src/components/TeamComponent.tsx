import './TeamComponent.less';

interface NbaTeamProps {
    name: string;
    fullName: string;
    away: boolean;
}

export function TeamComponent({ name, fullName, away}: NbaTeamProps) {

    return (
        <div className='team-container'>
            <a href={`https://www.nba.com/${name}/`}
               target='_blank'>
                <div className={`team ${away ? 'away' : 'home'}-team`}>
                    <div className='team-full-name'>{fullName}</div>
                    <div className='team-name-abbv'>{name}</div>
                </div>
            </a>
        </div>
    ); 
}