import './Header.less';
import sky from '../assets/beautiful-night-sky-with-shiny-stars.jpg';
import clouds from '../assets/purple-clouds.png';
import mountains from '../assets/colorful-mountains-dark.png';

export function Header() {
    return (
        <>
            <img src={sky} alt='Night sky' className='background'/>
         	<img src={mountains} alt='Dark mountains' className='foreground'/>
          	<img src={clouds} alt='Whispy clouds' className='foreground-1'/>
          	<div className='intro-text'>
           		<h1>Hi, I'm Wyatt Bliss</h1>
            	<h2>I'm a web-developer who loves to travel, meet new people, play video games, and play/watch any kind of sport</h2>
          	</div>
        </>
    )
}