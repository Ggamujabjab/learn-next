export default function IntroLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
        {children}
        &copy; Next JS is great!
    </div>
  )
}

/*
Layout.tsx : 전체 레이아웃을 구성하며 {children}을 기준으로 상단, 하단에 공통으로 사용할 요소를 넣을수있다.
페이지별 Layout.tsx : html, body는 삭제하고 해당 폴더안에서도 동일하게 사용가능하다.(특이사항으로는 적용한 폴더안에있는 모든 폴더에도 동일하게 적용된다.)
*/
