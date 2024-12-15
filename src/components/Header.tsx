import './Header.less';
import sky from '../assets/beautiful-night-sky-with-shiny-stars.jpg';
import clouds from '../assets/purple-clouds.png';
import mountains from '../assets/colorful-mountains-dark.png';
import { ImageWithBlur } from './ImageWithBlur';

export function Header() {
	
    return (
        <>
			<ImageWithBlur 
				src={sky}
				hash='L126gP4T?wIT8^-;M{t6s8S$adof'
				alt='Night sky' 
				className='background' />
			<ImageWithBlur 
				src={mountains}
				hash='L126gP4T?wIT8^-;M{t6s8S$adof' 
				alt='Dark mountains' 
				className='foreground' />
			<ImageWithBlur 
				src={clouds}
				hash='L126gP4T?wIT8^-;M{t6s8S$adof'
				alt='Purple clouds' 
				className='foreground-1' />
          	<div className='intro-text'>
           		<h1>Hi, I'm Wyatt Bliss</h1>
            	<h2>I'm a web-developer who loves to travel, meet new people, play video games, and play/watch all kinds of sports</h2>
          	</div>
        </>
    )
}