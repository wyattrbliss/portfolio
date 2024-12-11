import './NbaConference.less';

const HEADERS = ['TEAM', 'W', 'L', 'pct', 'GB', 'PPG', 'OPPG', 'DIFF', 'HOME', 'ROAD', 'DIV', 'CONF', 'STRK', 'L10', 'W', 'DIV', 'POST']

interface NbaConferenceProps {
    conference: string[][]
}

export function NbaConference({ conference }: NbaConferenceProps) {
    return (
        <table>
            <tbody>
            <tr className='standing-row standing-header'>
                {HEADERS.map((header, i) => {
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