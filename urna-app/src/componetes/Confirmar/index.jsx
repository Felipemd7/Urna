import * as React from 'react';
import  './index.css';


function ButtonUrna(props){

    return(
       <div className={props.className}>
        {props.name}
       </div>      
       
    )
      
    
}

export default ButtonUrna;