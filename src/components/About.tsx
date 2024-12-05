import './About.less';
import headshot from '../assets/headshot.jpg';

export function About() {
    return (
        <div className='about-content'>
            <div className='headshot-wrapper'>
                <img src={headshot} alt='My headshot photo' />
            </div>

            <p>
                I was born and raised in Las Vegas, NV, and lived there for about 11 years. 
                My family then moved to St. Paul, MN, and I completed the rest of my pre-collegiate education there.
                Once I graduated high school, I joined Northeastern's NU.in program and studied abroad in Berlin my very first semester.
                I always knew I wanted to work with computers, ever since I built my first PC when I was a kid.
                My older sister worked as a web developer, so I thought I could do the same.
                When I enrolled in the web development elective my love for the web was only reinforced, and I knew what I wanted to do.
                After graduating, I started an internship at KAYAK, and learned how to work professionally on a complex web app alongside many other teams.
                After working full-time there for over 2 years, I decided to move back to Minnesota to be closer to my family.
                I'm always ready to dive into my next adventure.
            </p>
        </div>
    );
}