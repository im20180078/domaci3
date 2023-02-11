import React from "react";
import Kontakt from "./Kontakt";
import Utisci from "./Utisci";


const Forma = ({inHome})=>{
    return(
        <div className="all-movies">
            <Kontakt inHome={inHome}/>
        </div>
    )
};

export default Forma;