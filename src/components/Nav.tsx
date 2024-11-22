import './Nav.less';

export function Nav() {
    const tabs = ['home', 'about', 'resume', 'contact'];

    const onTabSelect = (index: number) => {
        const section = document.getElementById(`section-${index}`);
        section?.scrollIntoView({behavior: 'smooth'});
    }

    return (
        <div className='nav'>
            {tabs.map((tab, i) => <div className='tab' key={`${tab}-${i}`} onClick={() => onTabSelect(i)}>{tab.toUpperCase()}</div>)}
        </div>
    )
}