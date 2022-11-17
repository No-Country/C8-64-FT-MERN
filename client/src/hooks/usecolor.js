import { useState } from "react";

export function useColor(){
    const [activeColor, setActiveColor] = useState({
        primario: "#06283D",
        secundario: "#256D85",
        titulo: "#47B5FF",
        texto: "#DFF6FF"
    });

    const switchColor = (props)=>{setActiveColor(props)};

    

    return[activeColor, switchColor]
}