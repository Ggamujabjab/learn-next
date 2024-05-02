import { API_URL } from "../app/constants";
import style from "../styled/movie-videos.module.css";

async function getVideo(id : string){
    console.log(`Fetching videos : ${Date.now()}`);
    const response = await fetch(`${API_URL}/${id}/videos`);
    return response.json();
}

export default async function MovieVideos({id} : {id: string}){
    const videos = await getVideo(id);
    return (
        <div className={style.container}>
            {videos.map((video) => <iframe
                key={video.id}
                src={`https://youtube.com/embed/${video.key}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={video.name}
                />
            )}
        </div>
    )
}