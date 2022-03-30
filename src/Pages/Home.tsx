import NavBar from '../Components/NavBar'
import Style from './CSS/Home.module.css'
import {useState} from 'react'

const RenderHomePage = () => {
    return (
        <div>
            <div className = {Style.wrapper}>
                <h1>Håkon stensvoll</h1>
                <img src = 'https://images.theconversation.com/files/443350/original/file-20220131-15-1ndq1m6.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C3354%2C2464&q=45&auto=format&w=926&fit=clip'/>
                <h2>Web utvikler</h2>
            </div>
                <NavBar/>
        </div>
    )
}

export default RenderHomePage