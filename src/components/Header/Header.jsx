import Top from "./Top";
import Menu_top from "./Menu_top";
import Image_Header from "./Image_Header";
import Menu_bottom from "./Menu_bottom";

const Header = () => {
    return(
        <div className={'header'}>
            <Top/>
            <Menu_top/>
            <Image_Header/>
            <Menu_bottom/>
        </div>
    )
}

export default Header
