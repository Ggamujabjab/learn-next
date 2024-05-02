import Link from "next/link";
import Movie from "../../components/movie";
import styled from "../../styled/home.module.css";

export const metadata = {
    title : "Home"
}

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies(){
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch(API_URL); 
    const json = await response.json();
    return json;
}

export default async function HomePage(){ 
    const movies = await getMovies();
    return (
        <div className={styled.container}>
            {movies.map(( movie ) => (
                <Movie
                    key={movie.id}
                    id={movie.id}
                    poster_path={movie.poster_path}
                    title={movie.title}
                />
            ))}
        </div>
    );
}


/*

폴더 구조(app 폴더는 필수, page라는 파일도 필수)
app/page.tsx 

client component, server component
server component안에 client component에 들어갈수있지만 반대는 안된다.
client component에는 client component만 들어갈수있다.
client component 문서 최상단에 "use client"를 넣으면서 client component로 만들어지며 사용자에게 다운받게 된다.
"use client"가 들어가지않은 파일은 모두 server component이다.
server component에서 DB에 접근을 하거나 했을경우 보안에 전혀 문제가 없다.
(home) << 폴더 생성후 page.tsx 를 넣으면 (home) 폴더는 URL에 전혀 영향을 주지않는다.
metadata는 layout, page에서만 내보낼수있으며 공용으로 사용할경우 layout.tsx에 적용하고 그 외 각각 적용할시 페이지별 page.tsx에 적용한다.
// 기본형
export const metadata = {
    title : "Home",
    description : ""
}
// 공통으로 사용할경우
export const metadata :Matadata = {
    title : "%s | Next",
    default : "loading..."
}

useState를 사용할경우 metadata를 사용할수 없다.
fetch() 로 호출된 내용은 캐싱을 시켜준다.

React : async await를 사용할경우 함수 두개를 동시에 실행할경우 함수를 순차적으로 실행하기때문에 많은 시간이 소요된다.
React : const [movie, video] = await Promise.all([moves(), videos()]); // Promise.all을 통해서 async가 들어간 함수를 동시에 실행시킨다.

컴퍼넌트로 함수를 만들어서 각각 Promise가 적용되게 만들고 함수를 export로 가져와서 적용해준다.
Suspense를 통해서 MovieInfo 함수를 가져오면 암묵적으로 await가 적용된다. 그리고 fallback={}에는 데이터를 호출하기 전까지 노출될 Loading영역이다.
적용 예시는 
<Suspense fallback={<h1>Loading movie info</h1>}>
    <MovieInfo id={id} />
</Suspense>

// API호출 Errow 처리
API를 호출했을경우 에러가 났을때 처리 방법으로 해당폴더안에 error.tsx를 추가해서 적용해준다.
그러면 에러가나서 전체가 멈추는 현상은 사라지고 해당 페이지내용에서만 오류가 나오고 그외 나머지 동작은 동일하게 작동한다.

Dynamic Metadata
export async function generateMetadata({ params : {id}} : IParams){
    const movie = await getMovie(id);

    return {
        title : movie.title
    }
}

*/