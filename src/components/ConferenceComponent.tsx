import './ConferenceComponent.less';

interface NbaConferenceProps {
    conference: string[][];
    headers: string[];
}

export function Conference({ conference, headers, }: NbaConferenceProps) {
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