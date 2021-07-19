import { useSelector } from "react-redux";
import Navbar from "../navbar";

export default function NavbarHOC() {
    const navbarCounter = useSelector((state: any) => state.navbarCounter);

    return (
        <>
            <Navbar navbarCounter={navbarCounter} />
        </>
    )
}