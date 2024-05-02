import { API_URL } from "../app/constants";
import style from "../styled/movie-credits.module.css";

async function getCredits(id : string){
    const response = await fetch(`${API_URL}/${id}/credits`);
    return response.json();
}

export default async function MovieCredits({ id } : {id : string}){
    const credits = await getCredits(id);
    return (
        <div className={style.container}>
            {credits.map(( credit ) => {
                if( credit.order < 8 ){
                    return <div className={style.unit}>
                        <img src={credit.profile_path} alt={credit.character} />
                        <p>{credit.character}</p>
                    </div>
                }
            })}
        </div>
    )
}