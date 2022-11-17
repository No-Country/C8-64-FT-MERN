import { useState } from "react";

export function BoolHook(initialValue = true){
    const [activeLanguage, setactiveLanguage] = useState(initialValue);

    const switchLanguage = ()=>{activeLanguage? setactiveLanguage(!activeLanguage): setactiveLanguage(!activeLanguage)};

    

    return[activeLanguage, switchLanguage]
}