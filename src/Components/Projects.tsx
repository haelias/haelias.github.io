import {useState, useEffect, ReactChild, ReactFragment, ReactPortal} from 'react'

interface gitApi {
    name:string,
    html_url:string,
    description:string,
    created_at:string,
    updated_at:string,
    homepage:string,
    language:string,
}

export default function Projects()
{
    const [apiData, setApiData] = useState<any|gitApi>()
    const [show, setShow] = useState<gitApi>();

    const doTheThing = async () => {
       await fetch('https://api.github.com/users/haelias/repos').then(Projects => Projects.json()).then((aids) => {
           setApiData(aids)
       })
    }

    useEffect(() => {doTheThing()},[])

    if (!apiData)
    {
        return <h1>LOADING MAN</h1>
    }


    return (
        <div>
        {apiData.map((proj: gitApi) => {
            return (
                <div>
                    <h1 onMouseEnter={() => {
                        setShow(proj)
                        console.log(proj)
                    }}>{proj.name}</h1>
                </div>
            )
        })}
        {show? <div>
            <h1>{show.name}</h1>
            <h1>{show.description}</h1>
            <h1>{show.language}</h1>
            <h1>{show.homepage}</h1>
        </div>:null}
        </div>
    )
}