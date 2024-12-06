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
			<Nav/>
			<div className='container'>
				<header id='home'>
					<Header />
				</header>
				<section id='about'>
					<h1>About me</h1>
					<About />
				</section>
				<section id='resume'>
					<h1>My resume</h1>
					<Resume />
				</section>
				<section id='contact'>
					<h1>Contact information</h1>
					<Contact />
				</section>
			</div>
		</>
  );
}

export default App
