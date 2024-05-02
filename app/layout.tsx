import { Metadata } from "next"
import Navigation from "../components/navigation"
import "../styled/global.css";

export const metadata :Metadata = {
  title : {
    template : "%s | Next Movies", // %s는 페이지별 metadata의 title를 가져옴
    default : "Loading............." // 메타데이터가 없는경우 Default 노출
  },
  description: 'The best movies on the best framework'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
