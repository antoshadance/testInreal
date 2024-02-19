import React, {useEffect} from "react";
import Contact from "../Contacts";
import Navbar from "../Navbar";
import Blocks from "../Blocks";
import Main2 from "../Main2";

export default function Home () {

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    return (
        <div>
            <Navbar/>
            <Main2/>
            <Blocks/>
            <Contact/>
        </div>
    )
}
