import './Resume.less';
import resumeFile from '../assets/wyatt_resume.pdf';

export function Resume() {
    const handleClick = () => {
        window.open(resumeFile); 
        return false;
    }

    return (
        <div className='resume-content' onClick={handleClick}>
            <h1 className='resume-header'>My resume</h1>
            <div className='iframe-container'>
                <iframe 
                    src={resumeFile}
                    loading='lazy'
                    allowFullScreen
                    width={'100%'}
                    height={'1000px'}
                />
            </div>
        </div>
    );
}
