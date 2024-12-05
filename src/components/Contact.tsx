import './Contact.less';

export function Contact() {
    return (
        <div className='contact-content'>
            <h3>
            	{'Email: '}
            	<a href='https://mailto:wyattrbliss@gmail.com' target='_blank'>wyattrbliss@gmail.com</a>
          	</h3>
          	<h3>Phone: 612-998-2157</h3>
          	<h3>
          	    {'Github: '}
          	    <a href='https://github.com/wyattrbliss' target='_blank'>github.com/wyattrbliss</a>
            </h3>
        </div> 
    );
}