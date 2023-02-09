import React from "react";
import { useState } from "react";

const Kontakt=({inHome})=>{

    const handleSubmit = (event) =>{
        event.preventDefault();
        alert("Uspešno poslato");
    }

    return(
        <div className="form-box">
            <form onSubmit={handleSubmit}>

                <div className="field1">
                    {inHome ===1?(<>
                        <label>Pišite nam vaša iskustva</label>                   
                    </>
                    ):(
                    <>
                        <label>Pišite nam predloge</label>
                    </>)}
                    <input placeholder="Ime" type="text" required/>
                    <input placeholder="Prezime" type="text" required/>
                    <input placeholder="E-mail" type="email" required/>
                </div>
                {inHome===1?(<>
                    <textarea placeholder="Iskustva..." type="textarea" required/>
                    </>):(<>
                        <textarea placeholder="Predlog za bogatiju ponudu" type="textarea" required/>
                    
                    </>)}

                    <button type="submit" id="submitBtn" className="submitBtn">Pošalji</button>

            </form>
        </div>
    )
}
export default Kontakt;