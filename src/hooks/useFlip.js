import React, {useState} from "react";

const useFlip = () => {
    const [state, setState] = useState(true)
    const flipCard = () =>{
        setState(card => !card)
    };
    return [state, flipCard]
};

export default useFlip;