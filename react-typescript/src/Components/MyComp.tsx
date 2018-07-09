import * as React from 'react';
import '../App.css';

export interface IMyCompProps {name?: string };



const MyComp =(props : IMyCompProps) =>{
    
    return(
        <div className ="mydiv">
        <h1 className="h1">
            {props.name}
        </h1>
        </div>
    );
};


export default MyComp;