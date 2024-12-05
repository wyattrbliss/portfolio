import './Nav.less';

export function Nav() {
    const tabs = ['home', 'about', 'resume', 'contact'];

    const onTabSelect = (tab: string) => {
        const section = document.getElementById(tab);
        section?.scrollIntoView({behavior: 'smooth'});
    }

    return (
        <div className='nav'>
            {tabs.map((tab, i) => <div className='tab' key={`${tab}-${i}`} onClick={() => onTabSelect(tab)}>{tab.toUpperCase()}</div>)}
        </div>
    )
}