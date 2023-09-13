import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types";


type Props = {
    page: string;
    children: React.ReactNode;
    setSelectedPage: (value:SelectedPage)=>void;
}

const ActionButton = ({ page, children, setSelectedPage }: Props) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  return (
    <AnchorLink 
        className="rounded-full bg-myDarkBlue px-10 py-2 hover:bg-blue-950 text-white"
        href={`#${lowerCasePage}`}
        onClick={()=>{setSelectedPage(lowerCasePage)}}
    >
        {children}
    </AnchorLink>
  )
}

export default ActionButton