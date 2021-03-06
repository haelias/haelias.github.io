import { useState } from "react"
import style from '../Pages/CSS/NavBar.module.css'
import Projects from "./Projects"
import About from "./About"
import Blog from './Blog'
import Contact from "./Contact"
const arr = ['about me', 'projects','contact','page info']

const newArr = [
    {
        text:'about me',
        tooltip:'Basically an autobiography',
        component:<About/>
    },
    {
        text:'projects',
        tooltip:'I am creative sometimes',
        component:<Projects/>
    },
    {
        text:'contact',
        tooltip:'hit me up broh',
        component:<Contact/>
    },
    {
        text:'blog',
        tooltip:'personal blog because I wanted one',
        component:<Blog/>
    }
]

const NavBar = () => {
    const [selected, setSelected] = useState<string>()
    const [tooltip, setTooltip] = useState<string>();
    const [component, setComponent] = useState<any>()
    const RenderToolTip = () => {
        return (
            <>
            <div className={style.toolTip}>
                <h1>{tooltip}</h1>
                </div>
            </>
        )
    }

    const ExitComponent = () => {
        return (
            <>
            <div className={style.killComp} onClick={()=>{
                setComponent(undefined)
            }}/>
            {component}
            </>
        )
    }

    return (
        <>
        <div className={style.wrapper}>
            {newArr.map(nav => {
                return <>
                {/* <div className={style.tooltip}> */}
                {/* <h2>a</h2> */}
                <h1 onMouseEnter={() => {
                    setTooltip(nav.tooltip)
                }}
                onMouseLeave={() => {
                    setTooltip(undefined)
                }}
                onMouseDown={() => {
                    setComponent(nav.component)
                }}
                >{nav.text}</h1>
                </>
            })}
        </div>
        {tooltip ? <RenderToolTip/>:null}
        {component ? <div className={style.Component}>
            <ExitComponent/>
            {/* {component} */}
        </div>:null}
        {/* <RenderToolTip/> */}
        </>
    )
}

export default NavBar
