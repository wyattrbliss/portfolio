import { Link } from 'react-router';
import './Nav.less';

export function Nav() {
    const tabs = ['home', 'about', 'resume', 'projects', 'contact'];

    const onTabSelect = (tab: string) => {
        const section = document.getElementById(tab);
        section?.scrollIntoView({behavior: 'smooth'});
    }

    return (
        <div className='nav'>
            {tabs.map((tab, i) => <Link to={'/'} className='tab' key={`${tab}-${i}`} onClick={() => onTabSelect(tab)}>{tab.toUpperCase()}</Link>)}
        </div>
    )
}