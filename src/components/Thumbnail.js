import { Link } from 'react-router-dom';

function Thumbnail(props) {
  return (
    <div className="thumbnail">
      <Link to={props.link}>
        <div className="thumbnail-image">
          <img src={props.image} alt="Thumbnail Image"/>
        </div>
        <div className="thumbnail-title">{props.title}</div>
        <div className="thumbnail-category">{props.category}</div>
            </Link>
    </div>
  )
}

export default Thumbnail;
