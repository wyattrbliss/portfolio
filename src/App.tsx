import './App.less';
import { Nav } from './components/Nav';
import { Resume } from './components/Resume';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Header } from './components/Header';

export interface SectionData {
    image: string;
    title: string;
}

function App() {
	return (
		<>
			<div className='nav-container'>
				<Nav/>
			</div>
			<div className='container'>
				<header id='home'>
					<Header />
				</header>
				<section id='about'>
					<h2>About me</h2>
					<About />
				</section>
				<section id='resume'>
					<h2>My resume</h2>
					<Resume />
				</section>
				<section id='contact'>
					<h2>Contact information</h2>
					<Contact />
				</section>
			</div>
		</>
  );
}

export default App
