import React, {useState} from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";

const useAxios = (base) =>{
    const [responses, setResponses] = useState([]);
    const addResponse = async(path) => {
        const response = await axios.get(base + path);
        setResponses((resp) => 
            [...resp, {...response.data, id: uuid()}]
        );
    };
    return [responses, addResponse]

};

export default useAxios;