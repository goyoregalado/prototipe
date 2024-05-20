
interface PersonalCardProps {
    fullName: string
    jobPosition: string
    company?: string
    summary: string
}


export function PersonalCard({fullName, jobPosition, company, summary} : PersonalCardProps) {
    return (
        <>
            <h1>{fullName}</h1>
            <h2>{jobPosition}</h2>
            { company && <h3>{company}</h3> } 
            <p>{summary}</p>
        </>
    )
}