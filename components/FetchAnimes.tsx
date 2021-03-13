import axios from "axios"
import { useEffect, useState } from "react";
import { FetchAnimesStyles } from "./FetchAnimesStyles";


export const FetchAnimes = () => {
    
    const [query,setQuery] = useState("Naruto");
    const [response,setResponse] = useState([]); 
    const [isSearched,setIsSearched] = useState(false); 



    const BringAnimeData = async (e) => {
        e.preventDefault();
        const res = await axios.get(`https://api.jikan.moe/v3/search/anime?q=${query}`);
        const data = await res.data;
        setResponse(data);
        setIsSearched(true)
        console.log(response);
        
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
        {isSearched?(
            response.results.map(item=>(
                <div key={item.title}>
                {item.title}
                <img src={item.image_url}/>
                </div>
        ))
        ): null}
        </FetchAnimesStyles>
    )
}