import React, {useState} from 'react';

function Pointer(props){
    const [angle, setAngle] = useState(props.angle);
    return(
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 107.54 23.51"><defs><style>.cls-1,.cls-2{fill:#231f20;stroke-miterlimit:10;}.cls-1{stroke:#df1f00;}.cls-2{stroke:#ee1f3c;}</style></defs><path class="cls-1" d="M343.11,306.15l94.06,3.67a.61.61,0,0,0,.64-.61v-7.35a.61.61,0,0,0-.64-.61l-94.06,3.67A.62.62,0,0,0,343.11,306.15Z" transform="translate(-342.02 -293.78)"/><circle class="cls-2" cx="95.79" cy="11.75" r="11.25"/></svg>
    );
}

export default Pointer;