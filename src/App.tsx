import './App.less';
import { Resume } from './components/Resume';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Header } from './components/Header';
import { Projects } from './components/Projects';

export interface SectionData {
    image: string;
    title: string;
}

export function App() {

	return (
		<>
			<div className='container'>
				<header id='home'>
					<Header />
				</header>
				<section id='about'>
					<h1>About me</h1>
					<About />
				</section>
				<section id='resume'>
					<Resume />
				</section>
				<section id='projects'>
					<h1>My projects</h1>
					<Projects />
				</section>
				<section id='contact'>
					<h1>Contact information</h1>
					<Contact />
				</section>
			</div>
		</>
  );
}
