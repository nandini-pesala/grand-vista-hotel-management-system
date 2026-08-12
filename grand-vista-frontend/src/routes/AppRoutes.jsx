import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/public/Home";
import About from "../pages/public/About";
import Services from "../pages/public/Services";
import Contact from "../pages/public/Contact";

import Register from "../pages/auth/Register";
import CustomerLogin from "../pages/auth/CustomerLogin";
import EmployeeLogin from "../pages/auth/EmployeeLogin";
import AdminLogin from "../pages/auth/AdminLogin";

import ProtectedRoute from "../components/ProtectedRoute";

import CustomerDashboard from "../pages/customer/CustomerDashboard";
import AdminDashboard from "../pages/admin/AdminDashboard";
import ReceptionDashboard from "../pages/reception/ReceptionDashboard";
import ManagerDashboard from "../pages/manager/ManagerDashboard";
import HousekeepingDashboard from "../pages/housekeeping/HousekeepingDashboard";
import KitchenDashboard from "../pages/kitchen/KitchenDashboard";
import RoomServiceDashboard from "../pages/roomservice/RoomServiceDashboard";
import MaintenanceDashboard from "../pages/maintenance/MaintenanceDashboard";

import Customers from "../pages/admin/Customers";
import Departments from "../pages/admin/Departments";
import FoodMenuManagement from "../pages/admin/FoodMenuManagement";
import Employees from "../pages/admin/Employees";
import Bookings from "../pages/admin/Bookings";
import Payments from "../pages/admin/Payments";
import Rooms from "../pages/admin/Rooms";

import BookRoom from "../pages/customer/BookRoom";
import MyBookings from "../pages/customer/MyBookings";
import FoodMenu from "../pages/customer/FoodMenu";
import FoodOrders from "../pages/customer/FoodOrders";
import Profile from "../pages/customer/Profile";
import Payment from "../pages/customer/Payment";
import Feedback from "../pages/customer/Feedback";

import RegisterCustomer from "../pages/reception/RegisterCustomer";
import ManageBookings from "../pages/reception/ManageBookings";
import CheckIn from "../pages/reception/CheckIn";
import CheckOut from "../pages/reception/CheckOut";
import TodaysArrivals from "../pages/reception/TodaysArrivals";
import TodaysDepartures from "../pages/reception/TodaysDepartures";

import CleaningRequests from "../pages/housekeeping/CleaningRequests";
import RoomStatus from "../pages/housekeeping/RoomStatus";

import PendingOrders from "../pages/kitchen/PendingOrders";
import PreparingOrders from "../pages/kitchen/PreparingOrders";
import ReadyOrders from "../pages/kitchen/ReadyOrders";

import DeliverOrders from "../pages/roomservice/DeliverOrders";
import OrderHistory from "../pages/roomservice/OrderHistory";

import OccupancyReport from "../pages/manager/OccupancyReport";
import FoodStatistics from "../pages/manager/FoodStatistics";
import HousekeepingStatistics from "../pages/manager/HousekeepingStatistics";
import MaintenanceStatistics from "../pages/manager/MaintenanceStatsitics";

import PendingMaintenance from "../pages/maintenance/PendingMaintenance";
import InProgressMaintenance from "../pages/maintenance/InProgressMaintenance";
import CompletedMaintenance from "../pages/maintenance/CompletedMaintenance";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/register" element={<Register />} />
        <Route path="/customer-login" element={<CustomerLogin />} />
        <Route path="/employee-login" element={<EmployeeLogin />} />
        <Route path="/admin-login" element={<AdminLogin />} />

       <Route path="/customer-dashboard" element={ <ProtectedRoute role="CUSTOMER"> <CustomerDashboard /> </ProtectedRoute>} /> 
       <Route path="/admin-dashboard" element={ <ProtectedRoute role="ADMIN"> <AdminDashboard /> </ProtectedRoute> } /> 
       <Route path="/manager-dashboard" element={ <ProtectedRoute role="MANAGER"> <ManagerDashboard /> </ProtectedRoute> } /> 
       <Route path="/reception-dashboard" element={ <ProtectedRoute role="RECEPTION"> <ReceptionDashboard /> </ProtectedRoute> } /> 
       <Route path="/housekeeping-dashboard" element={ <ProtectedRoute role="HOUSEKEEPING"> <HousekeepingDashboard /> </ProtectedRoute> }/> 
       <Route path="/kitchen-dashboard" element={ <ProtectedRoute role="KITCHEN"> <KitchenDashboard /> </ProtectedRoute> } /> 
       <Route path="/roomservice-dashboard" element={ <ProtectedRoute role="ROOM_SERVICE"> <RoomServiceDashboard /> </ProtectedRoute> } />

       <Route path="/customers" element={ <ProtectedRoute> <Customers /> </ProtectedRoute> } />
       <Route path="/departments" element={<ProtectedRoute>  <Departments /> </ProtectedRoute> } /> 
       <Route path="/employees" element={ <ProtectedRoute> <Employees /> </ProtectedRoute> } />
       <Route path="/rooms" element={ <ProtectedRoute> <Rooms /> </ProtectedRoute> } />
       <Route path="/bookings" element={ <ProtectedRoute> <Bookings /> </ProtectedRoute> } />
       <Route path="/payments" element={ <ProtectedRoute> <Payments /> </ProtectedRoute> } />
       <Route path="/food-menu-management" element={ <ProtectedRoute> <FoodMenuManagement /> </ProtectedRoute> } />

       <Route path="/book-room" element={<ProtectedRoute><BookRoom/></ProtectedRoute>} />
       <Route path="/my-bookings" element={<ProtectedRoute><MyBookings/></ProtectedRoute>} />
       <Route path="/food-menu" element={<ProtectedRoute><FoodMenu/></ProtectedRoute>} />
       <Route path="/food-orders" element={<ProtectedRoute><FoodOrders/></ProtectedRoute>} />
       <Route path="/profile" element={<ProtectedRoute><Profile/></ProtectedRoute>} />
       <Route path="/payment" element={<ProtectedRoute><Payment/></ProtectedRoute>} />
       <Route path="/feedback" element={<ProtectedRoute><Feedback/></ProtectedRoute>} />

       <Route path="/register-customer" element={ <ProtectedRoute> <RegisterCustomer /> </ProtectedRoute>} /> 
       <Route path="/manage-bookings" element={ <ProtectedRoute> <ManageBookings /> </ProtectedRoute> } />
       <Route path="/checkin" element={ <ProtectedRoute> <CheckIn /> </ProtectedRoute> } />
       <Route path="/checkout" element={ <ProtectedRoute> <CheckOut /> </ProtectedRoute> } />
       <Route path="/todays-arrivals" element={ <ProtectedRoute> <TodaysArrivals /> </ProtectedRoute> } /> 
       <Route path="/todays-departures" element={ <ProtectedRoute> <TodaysDepartures /> </ProtectedRoute> } />

       <Route path="/cleaning-requests" element={ <ProtectedRoute> <CleaningRequests /> </ProtectedRoute> } />
       <Route path="/room-status" element={ <ProtectedRoute> <RoomStatus /> </ProtectedRoute> } />

       <Route path="/pending-orders" element={ <ProtectedRoute> <PendingOrders /> </ProtectedRoute> } /> 
       <Route path="/preparing-orders" element={ <ProtectedRoute> <PreparingOrders /> </ProtectedRoute> } />
       <Route path="/ready-orders" element={ <ProtectedRoute> <ReadyOrders /> </ProtectedRoute> } />

       <Route path="/deliver-orders" element={ <ProtectedRoute> <DeliverOrders/> </ProtectedRoute> } /> 
       <Route path="/order-history" element={ <ProtectedRoute> <OrderHistory/> </ProtectedRoute> } />

       <Route path="/occupancy-report" element={<ProtectedRoute><OccupancyReport/></ProtectedRoute>} />
       <Route path="/food-statistics" element={<ProtectedRoute><FoodStatistics/></ProtectedRoute>} />
       <Route path="/housekeeping-statistics" element={<ProtectedRoute><HousekeepingStatistics/></ProtectedRoute>} />
       <Route path="/maintenance-statistics" element={<ProtectedRoute><MaintenanceStatistics/></ProtectedRoute>} />

       <Route path="/maintenance-dashboard" element={<MaintenanceDashboard />} />
       <Route path="/pending-maintenance" element={<PendingMaintenance />} />
       <Route path="/inprogress-maintenance" element={<InProgressMaintenance />} />
       <Route path="/completed-maintenance" element={<CompletedMaintenance />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;