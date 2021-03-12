import axios from "axios"
import { useState } from "react";
import { FetchAnimesStyles } from "./FetchAnimesStyles";

export const FetchAnimes = () => {
    
    const [query,setQuery] = useState("");

    const BringAnimeData = async (e) => {
        e.preventDefault();
        const res = await axios.get(`https://api.jikan.moe/v3/search/anime?q=${query}`);
        const data = await res.data;
        console.log(data); 
    }

    return (
        <FetchAnimesStyles>
        <div className="mainContainer">
            <form
            onSubmit={BringAnimeData}
            >
            <input 
            type="text"
            onChange={e=>setQuery(e.target.value)}
            />
            </form>
        </div>
        </FetchAnimesStyles>
    )
}