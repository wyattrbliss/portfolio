import './About.less';
import headshot from '../assets/headshot.jpg';

export function About() {
    return (
        <div className='about-content'>
            <div className='headshot-wrapper'>
                <img src={headshot} alt='My headshot photo' />
            </div>
            <p>
                I was born and raised in Las Vegas, NV, where I lived for 11 years before moving to St. Paul, MN, to finish my pre-collegiate education. 
                After high school, I joined Northeastern's NU.in program, which took me abroad to Berlin for my first semester.
                I had known for a while that I wanted to pursue a career in computer science. 
                My passion for working with computers began early in my life, sparked by the excitement of building my first PC as a child.
                Taking a web development elective deepened my love for the field and solidified my career choice.
            </p>
            <p>
                After graduating, I landed an internship at KAYAK, where I gained hands-on experience working on a complex web application alongside cross-functional teams. 
                This role turned into a full-time position, and I spent over two years honing my skills in a professional environment. 
                Ultimately, I decided to return to Minnesota to be closer to my family.
                I’m always eager for the next opportunity and challenge in my career.
            </p>
        </div>
    );
}