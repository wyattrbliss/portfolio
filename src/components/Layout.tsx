import './Layout.less';
import { Outlet } from "react-router";
import { Nav } from "./Nav";

export function Layout() {
    return (
        <div className='layout'>
            <Nav />
            <Outlet />
        </div>
    )
}