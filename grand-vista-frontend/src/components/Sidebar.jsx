import { Link, useLocation } from "react-router-dom";
import {
    FaHotel,
    FaHome,
    FaUsers,
    FaBed,
    FaUserFriends,
    FaCalendarAlt,
    FaUtensils,
    FaMoneyBillWave,
    FaBuilding,
    FaUserPlus,
    FaClipboardList,
    FaSignOutAlt,
    FaUser,
    FaHistory,
    FaConciergeBell,
    FaBroom,
    FaTools,
    FaChartBar,
    FaClipboardCheck,
    FaCheckCircle,
    FaDoorOpen
} from "react-icons/fa";

function Sidebar() {

    const user = JSON.parse(localStorage.getItem("user"));
    const role = user?.role;
    const location = useLocation();

    const logout = () => {
        localStorage.clear();
        window.location.href = "/";
    };

    const menuStyle = (path) => ({
        color: location.pathname === path ? "#FBBF24" : "#E5E7EB",
        background: location.pathname === path ? "rgba(251,191,36,0.15)" : "transparent",
        borderRadius: "10px",
        margin: "4px 10px",
        padding: "12px 15px",
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
        fontWeight: "500",
        transition: "0.3s"
    });

    return (
        <div
            style={{
                width: "270px",
                minHeight: "100vh",
                background: "#0F172A",
                color: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "sticky",
                top: 0
            }}
        >

            <div>

                <div className="text-center py-4 border-bottom border-secondary">

                    <FaHotel
                        size={45}
                        color="#FBBF24"
                    />

                    <h3
                        className="mt-2 mb-1 fw-bold"
                        style={{ color: "#FBBF24" }}
                    >
                        Grand Vista
                    </h3>

                    <small className="text-light">
                        Hotel Management
                    </small>

                </div>

                <div
                    style={{
                        maxHeight: "calc(100vh - 180px)",
                        overflowY: "auto",
                        paddingTop: "15px"
                    }}
                >

                    {role === "ADMIN" && (
                        <>
                            <Link style={menuStyle("/admin-dashboard")} to="/admin-dashboard"><FaHome className="me-3" />Dashboard</Link>

                            <Link style={menuStyle("/departments")} to="/departments"><FaBuilding className="me-3" />Departments</Link>

                            <Link style={menuStyle("/employees")} to="/employees"><FaUsers className="me-3" />Employees</Link>

                            <Link style={menuStyle("/rooms")} to="/rooms"><FaBed className="me-3" />Rooms</Link>

                            <Link style={menuStyle("/customers")} to="/customers"><FaUserFriends className="me-3" />Customers</Link>

                            <Link style={menuStyle("/bookings")} to="/bookings"><FaCalendarAlt className="me-3" />Bookings</Link>

                            <Link style={menuStyle("/food-menu-management")} to="/food-menu-management"><FaUtensils className="me-3" />Food Menu</Link>

                            <Link style={menuStyle("/payments")} to="/payments"><FaChartBar className="me-3" />Reports</Link>
                        </>
                    )}

                    {role === "CUSTOMER" && (
                        <>
                            <Link style={menuStyle("/customer-dashboard")} to="/customer-dashboard"><FaHome className="me-3" />Dashboard</Link>

                            <Link style={menuStyle("/profile")} to="/profile"><FaUser className="me-3" />Profile</Link>

                            <Link style={menuStyle("/book-room")} to="/book-room"><FaDoorOpen className="me-3" />Book Room</Link>

                            <Link style={menuStyle("/my-bookings")} to="/my-bookings"><FaCalendarAlt className="me-3" />My Bookings</Link>
                            
                            <Link style={menuStyle("/food-menu")} to="/food-menu"><FaUtensils className="me-3" />Food Menu</Link>

                            <Link style={menuStyle("/food-orders")} to="/food-orders"><FaClipboardList className="me-3" />Food Orders</Link>

                            <Link style={menuStyle("/payment")} to="/payment"><FaMoneyBillWave className="me-3" />Payments</Link>

                            <Link style={menuStyle("/feedback")} to="/feedback"><FaClipboardCheck className="me-3" />Feedback</Link>
                        </>
                    )}

                    {role === "RECEPTION" && (
                        <>
                            <Link style={menuStyle("/reception-dashboard")} to="/reception-dashboard"><FaHome className="me-3" />Dashboard</Link>

                            <Link style={menuStyle("/register-customer")} to="/register-customer"><FaUserPlus className="me-3" />Register Customer</Link>

                            <Link style={menuStyle("/manage-bookings")} to="/manage-bookings"><FaCalendarAlt className="me-3" />Manage Bookings</Link>

                            <Link style={menuStyle("/checkin")} to="/checkin"><FaCheckCircle className="me-3" />Check In</Link>

                            <Link style={menuStyle("/checkout")} to="/checkout"><FaSignOutAlt className="me-3" />Check Out</Link>

                            <Link style={menuStyle("/todays-arrivals")} to="/todays-arrivals"><FaConciergeBell className="me-3" />Today's Arrivals</Link>

                            <Link style={menuStyle("/todays-departures")} to="/todays-departures"><FaHistory className="me-3" />Today's Departures</Link>
                        </>
                    )}

                    {role === "HOUSEKEEPING" && (
                        <>
                            <Link style={menuStyle("/housekeeping-dashboard")} to="/housekeeping-dashboard"><FaHome className="me-3" />Dashboard</Link>

                            <Link style={menuStyle("/cleaning-requests")} to="/cleaning-requests"><FaBroom className="me-3" />Cleaning Requests</Link>

                            <Link style={menuStyle("/room-status")} to="/room-status"><FaBed className="me-3" />Room Status</Link>
                        </>
                    )}

                    {role === "KITCHEN" && (
                        <>
                            <Link style={menuStyle("/kitchen-dashboard")} to="/kitchen-dashboard"><FaHome className="me-3" />Dashboard</Link>

                            <Link style={menuStyle("/pending-orders")} to="/pending-orders"><FaClipboardList className="me-3" />Pending Orders</Link>

                            <Link style={menuStyle("/preparing-orders")} to="/preparing-orders"><FaUtensils className="me-3" />Preparing Orders</Link>

                            <Link style={menuStyle("/ready-orders")} to="/ready-orders"><FaCheckCircle className="me-3" />Ready Orders</Link>
                        </>
                    )}

                    {role === "ROOM_SERVICE" && (
                        <>
                            <Link style={menuStyle("/roomservice-dashboard")} to="/roomservice-dashboard"><FaHome className="me-3" />Dashboard</Link>

                            <Link style={menuStyle("/deliver-orders")} to="/deliver-orders"><FaConciergeBell className="me-3" />Deliver Orders</Link>

                            <Link style={menuStyle("/order-history")} to="/order-history"><FaHistory className="me-3" />Order History</Link>
                        </>
                    )}

                    {role === "MANAGER" && (
                        <>
                            <Link style={menuStyle("/manager-dashboard")} to="/manager-dashboard"><FaHome className="me-3" />Dashboard</Link>

                            <Link style={menuStyle("/occupancy-report")} to="/occupancy-report"><FaChartBar className="me-3" />Occupancy Report</Link>

                            <Link style={menuStyle("/food-statistics")} to="/food-statistics"><FaUtensils className="me-3" />Food Statistics</Link>

                            <Link style={menuStyle("/housekeeping-statistics")} to="/housekeeping-statistics"><FaBroom className="me-3" />Housekeeping Statistics</Link>

                            <Link style={menuStyle("/maintenance-statistics")} to="/maintenance-statistics"><FaTools className="me-3" />Maintenance Statistics</Link>
                        </>
                    )}

                    {role === "MAINTENANCE" && (
                        <>
                            <Link style={menuStyle("/maintenance-dashboard")} to="/maintenance-dashboard"><FaHome className="me-3" />Dashboard</Link>

                            <Link style={menuStyle("/pending-maintenance")} to="/pending-maintenance"><FaHistory className="me-3" />Pending Requests</Link>

                            <Link style={menuStyle("/inprogress-maintenance")} to="/inprogress-maintenance"><FaTools className="me-3" />In Progress</Link>

                            <Link style={menuStyle("/completed-maintenance")} to="/completed-maintenance"><FaCheckCircle className="me-3" />Completed</Link>
                        </>
                    )}

                </div>

            </div>

            <div className="p-3 border-top border-secondary">

                <button
                    className="btn btn-danger w-100"
                    onClick={logout}
                >
                    <FaSignOutAlt className="me-2" />
                    Logout
                </button>

            </div>

        </div>
    );
}

export default Sidebar;

