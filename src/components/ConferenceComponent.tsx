import './ConferenceComponent.less';
import { DivisionComponent } from './DivisionComponent';

interface NbaConferenceProps {
    conference: string[][];
    headers: string[];
    divisions?: string[];
}

export function Conference({ conference, headers, divisions }: NbaConferenceProps) {
    console.log(conference);
    if (divisions) {
        return (
            <div>
                {divisions.map((division, i) => {
                    const leftIndex = i * 4;
                    const rightIndex = i * 4 + 4;
                    return (
                        <DivisionComponent 
                            key={`division-${i}`}
                            name={division}
                            teams={conference.slice(leftIndex, rightIndex)}
                            headers={headers}/>
                    )
                })}
            </div>
        );
    }

    return (
        <table>
            <tbody>
            <tr className='standing-row standing-header'>
                {headers.map((header, i) => {
                    return (
                        <th key={`header-${i}`} className='header-col'>{header}</th>
                    )
                })}
            </tr>
            {conference.length > 0 && conference.map((row, i) => {
                return (
                    <tr className='standing-row' key={i}>
                        {row.map((col, j) => {
                            return (
                                <td className='standing-col' key={j}>{col}</td>
                            )
                        })}
                    </tr>
                )})
            }
            </tbody>
        </table>
    );
}