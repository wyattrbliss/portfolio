interface NbaConferenceProps {
    name: string;
    teams: string[][];
    headers: string[];
}

export function DivisionComponent({ name, teams, headers, }: NbaConferenceProps) {
    return (
        <table>
            <tbody>
            <tr>{name}</tr>
            <tr className='standing-row standing-header'>
                {headers.map((header, i) => {
                    return (
                        <th key={`header-${i}`} className='header-col'>{header}</th>
                    )
                })}
            </tr>
            {teams.length > 0 && teams.map((row, i) => {
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