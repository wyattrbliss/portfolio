import resumeFile from '../assets/wyatt_resume.pdf';

export function Resume() {
    return (
        <div className='resume-content'>
        <iframe src={resumeFile} width={'100%'} height={'1150px'}/>
        </div>
    );
}
