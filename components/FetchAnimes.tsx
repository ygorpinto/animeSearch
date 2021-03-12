import axios from "axios"
import { useEffect, useState } from "react";
import { FetchAnimesStyles } from "./FetchAnimesStyles";

export const FetchAnimes = () => {
    
    const [query,setQuery] = useState("");

    useEffect(()=>{
        BringAnimeData();
        console.log(query);
    },[]);

    const BringAnimeData = async () => {
        const res = await axios.get(`https://api.jikan.moe/v3/search/anime?q=naruto`);
        const data = await res.data;
    }

    return (
        <FetchAnimesStyles>
        <div className="mainContainer">
            <input 
            type="text"
            onChange={e=>setQuery(e.target.value)}
            />
        </div>
        </FetchAnimesStyles>
    )
}