import { API_URL } from "../app/constants";
import style from "../styled/movie-info.module.css";

export async function getMovie(id : string){
    console.log(`Fetching movies : ${Date.now()}`);
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
}

export default async function MovieInfo({id} : {id: string}){
    const movie = await getMovie(id);
    return (
        <div className={style.container}>
            <img className={style.poster} src={movie.poster_path} alt={movie.title} />
            <div className={style.info}>
                <h1 className={style.title}>{movie.title}</h1>
                <h3>★ {movie.vote_average.toFixed(1)}</h3>
                <p>{movie.overview}</p>
                <a href={movie.homepage} target={"_blank"}>Homepage &rarr;</a>
            </div>
        </div>
    )
}