import './App.css';
import { Nav } from './components/Nav';
import sky from './assets/beautiful-night-sky-with-shiny-stars.jpg';
import clouds from './assets/purple-clouds.png';
import mountains from './assets/colorful-mountains-cropped.png';

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
          <img src={sky} className='background'/>
          <img src={mountains} className='foreground'/>
          <img src={clouds} className='foreground-1'/>
          <div className='intro-text'>
            <h1>Hi, I'm Wyatt Bliss</h1>
            <h2>I'm a React developer who loves to travel, meet new people, game, and play/watch sports</h2>
          </div>
        </header>
        <section id='about'>
          <h2>About me</h2>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus vitae totam voluptatum repudiandae dicta, exercitationem id iure. Deserunt aspernatur id consequatur similique, ut repudiandae quidem quis corrupti molestiae? Natus magni blanditiis, molestias nesciunt voluptates assumenda illum ipsum laborum, quaerat rem provident vero asperiores dolorum sunt nulla animi quos officiis dolorem, eos corrupti architecto omnis quae nobis. Impedit labore sapiente corrupti et voluptate cum laudantium iste officia totam atque deserunt beatae ab, dignissimos similique. Tempora veritatis expedita molestias reprehenderit aliquam! Cupiditate perferendis minus accusamus quidem, sit eum sed repellat illum? Labore, error necessitatibus! Neque ratione tempore ea mollitia, quisquam enim iure fugit molestias explicabo facere molestiae adipisci esse, in quod vitae repellat placeat accusamus maxime sit incidunt, earum voluptates provident soluta? Nihil quis deleniti facere ab, magnam, amet error impedit qui rerum ducimus, dolorum provident incidunt repudiandae magni ea sapiente ratione! Pariatur fuga quisquam, quaerat, voluptate amet similique earum voluptas veritatis culpa facilis deserunt nam nesciunt maxime distinctio? Nulla dolorum praesentium dolore natus qui, sequi molestias ut explicabo voluptatem accusamus facere exercitationem. Debitis reiciendis dolores unde provident doloremque exercitationem mollitia tempore error laborum! Cumque a reiciendis pariatur provident officiis nam optio maxime fugit dolorum tempore culpa doloremque harum quia commodi iusto dolorem suscipit dolor molestiae, iste nesciunt quas esse nulla, aliquid perspiciatis. Vero cum illum aperiam. Maxime ab illum culpa doloremque quaerat ducimus, sapiente exercitationem tenetur tempore dolore nemo ipsam minus nam pariatur vel aut dignissimos ea, soluta at obcaecati reprehenderit! Ducimus, soluta exercitationem fugiat beatae voluptas maxime amet itaque facere cupiditate dignissimos, sequi esse mollitia officia debitis eum illo assumenda dolore aliquid, quibusdam facilis harum recusandae laboriosam! Architecto voluptates facere reprehenderit laboriosam aut? Nesciunt optio quas ratione exercitationem beatae quia odio non distinctio voluptates, labore voluptatum accusamus, necessitatibus cumque, nemo asperiores nihil! Sunt nulla debitis unde quas facilis voluptatem sequi!
        </section>
        <section id='resume'>
          <h2>My resume</h2>
          <iframe></iframe>
        </section>
        <section id='contact'>
          <h2>Contact information</h2>
          <h3>
            {'Email: '}
            <a href='https://mailto:wyattrbliss@gmail.com' target='_blank'>wyattrbliss@gmail.com</a>
          </h3>
          <h3>Phone: 612-998-2157</h3>
          <h3>
            {'Github: '}
            <a href='https://github.com/wyattrbliss' target='_blank'>github.com/wyattrbliss</a>
          </h3>
        </section>
      </div>
    </>
  )
}

export default App
