import './NoPage.less';
import { Link } from 'react-router';

export function NoPage() {
    return (
        <div className='no-page'>
            <h1>Sorry, the page you were looking for does not exist</h1>
            <Link to='/' className='no-page-link'>Click here to navigate to the home page</Link>
        </div>
    )
}