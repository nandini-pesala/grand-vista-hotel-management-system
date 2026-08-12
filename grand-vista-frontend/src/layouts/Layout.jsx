import Sidebar from "../components/Sidebar";
import TopNavbar from "../components/TopNavbar";

function Layout({
    children
}) {

    return (

        <div
            className="d-flex"
            style={{
                minHeight: "100vh",
                background: "#F8FAFC"
            }}
        >

            <Sidebar />

            <div className="flex-grow-1">

                <TopNavbar />

                <div className="p-4">

                    {children}

                </div>

            </div>

        </div>
    );
}

export default Layout;