import axios from "axios"
import { useState } from "react";
import { FetchAnimesStyles } from "./FetchAnimesStyles";


export const FetchAnimes = () => {

    const [query, setQuery] = useState("Naruto");
    const [response, setResponse] = useState([]);
    const [isSearched, setIsSearched] = useState(false);



    const BringAnimeData = async (e) => {
        e.preventDefault();
        const res = await axios.get(`https://api.jikan.moe/v3/search/anime?q=${query}`);
        const data = await res.data;
        setResponse(data);
        setIsSearched(true)
        console.log(data);

    }

    return (
        <FetchAnimesStyles>
            <div className="formContainer">
                <form
                    onSubmit={BringAnimeData}
                >
                    <input
                        type="text"
                        placeholder="Digite o nome do Anime"
                        onChange={e => setQuery(e.target.value)}
                    />
                </form>
            </div>
            <div className="mainContainer">
                {isSearched ? (
                    response.results.map(item => (
                        <div key={item.title}>
                            <p>{item.title}</p>
                            <img src={item.image_url} />
                            <p>{item.synopsis}</p>
                            <button><a href={item.url} target="_blank">Assistir</a></button>
                        </div>
                    ))
                ) : null}
            </div>
        </FetchAnimesStyles>
    )
}