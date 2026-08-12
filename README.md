# 🏨 Grand Vista Hotel Management System

A full-stack **Hotel Management System** developed to manage hotel operations through separate role-based interfaces for administrators, reception staff, kitchen staff, housekeeping staff, maintenance staff, room service employees, and managers.

The system provides a centralized platform for managing **employees, rooms, customers, bookings, food orders, housekeeping requests, maintenance requests, reports, and hotel operations**.

---

## 📌 Project Overview

The **Grand Vista Hotel Management System** is designed to digitize and simplify day-to-day hotel operations.

Different employees can access functionality according to their assigned role/department, while managers and administrators can monitor hotel activities and generate operational reports.

The project follows a **frontend-backend architecture**:

* **Frontend:** React.js + Vite
* **Backend:** Java + Spring Boot
* **Database:** MySQL
* **API Communication:** REST APIs
* **Database Hosting:** Aiven MySQL
* **Frontend Styling:** Bootstrap + CSS
* **Icons:** React Icons

---

## 🎯 Objectives

The main objectives of the project are:

* Digitize hotel management operations.
* Manage hotel employees and departments.
* Manage rooms and room availability.
* Handle customer registration and information.
* Manage hotel bookings.
* Manage check-in and check-out operations.
* Handle food and room-service orders.
* Manage housekeeping requests.
* Manage maintenance requests.
* Provide manager dashboards and reports.
* Reduce manual work in hotel administration.
* Provide separate interfaces for different employee roles.

---

# 👥 User Roles

The system supports different hotel roles.

### 👨‍💼 Admin

Responsible for overall system administration, including employee and hotel management.

### 🛎️ Reception

Handles guest check-in, check-out, bookings, and customer registration.

### 👨‍🍳 Kitchen

Handles food orders, order preparation, order status updates, and delivery coordination.

### 🧹 Housekeeping

Handles room-cleaning requests and updates cleaning status.

### 🔧 Maintenance

Handles hotel maintenance requests, starts maintenance work, and resolves issues.

### 📊 Manager

Monitors hotel operations, revenue, occupancy, employee performance, food statistics, housekeeping statistics, and maintenance statistics.

### 🛎️ Room Service

Handles room-service/food delivery activities and updates delivery status.

---

# 🏗️ System Architecture

```text
                    ┌─────────────────────────┐
                    │       User / Staff      │
                    └────────────┬────────────┘
                                 │
                                 ▼
                    ┌─────────────────────────┐
                    │     React + Vite        │
                    │       Frontend          │
                    └────────────┬────────────┘
                                 │
                              REST API
                                 │
                                 ▼
                    ┌─────────────────────────┐
                    │      Spring Boot        │
                    │        Backend          │
                    └────────────┬────────────┘
                                 │
                              JPA / Hibernate
                                 │
                                 ▼
                    ┌─────────────────────────┐
                    │         MySQL            │
                    │   Aiven Cloud Database   │
                    └─────────────────────────┘
```

---

# 💻 Technologies Used

## Frontend

* React.js
* Vite
* JavaScript
* HTML5
* CSS3
* Bootstrap
* React Icons
* Axios

## Backend

* Java
* Spring Boot
* Spring Data JPA
* Hibernate
* REST APIs
* Maven

## Database

* MySQL
* Aiven Cloud MySQL

## Development Tools

* Visual Studio Code
* Spring Tool Suite / IDE
* MySQL Workbench
* Git
* GitHub
* Postman

---

# 📂 Project Structure

The repository contains separate frontend and backend applications.

```text
Grand-Vista-Hotel-Management-System/
│
├── grand-vista-backend/
│   │
│   ├── .mvn/
│   │   └── wrapper/
│   │
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com/
│   │   │   │       └── grandvista/
│   │   │   │           └── hotel/
│   │   │   │
│   │   │   └── resources/
│   │   │
│   │   └── test/
│   │
│   ├── pom.xml
│   ├── mvnw
│   ├── mvnw.cmd
│   └── .gitignore
│
├── grand-vista-frontend/
│   │
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── services/
│   │   └── ...
│   │
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.js
│   └── .gitignore
│
└── README.md
```

---

# ⭐ Main Features

## 👨‍💼 Employee Management

Admin can:

* Add employees.
* Assign employees to departments.
* Assign employee roles.
* Store employee contact information.
* Store salary information.
* View employee records.
* Search employees by name, email, phone, or role.

---

## 🏨 Room Management

The system manages:

* Room numbers.
* Room types.
* Room prices.
* Room availability.
* Occupied rooms.
* Room status.

Managers can view room occupancy information through the occupancy report.

---

## 👤 Customer Management

The system provides functionality for managing hotel customers and their information.

Customer information can be associated with bookings and hotel services.

---

# 📅 Booking Management

The system supports hotel booking operations including:

* Creating bookings.
* Managing booking information.
* Guest check-in.
* Guest check-out.
* Tracking booking status.
* Managing room allocation.

---

# 🍽️ Food Order Management

Food orders can be managed through different stages:

```text
PENDING
   ↓
PREPARING
   ↓
READY
   ↓
DELIVERED
```

Kitchen employees can process orders and update their status.

Room service employees can handle delivery-related activities.

The manager can view food-order statistics.

---

# 🧹 Housekeeping Management

Housekeeping requests can be created when rooms require cleaning.

The housekeeping workflow includes:

```text
Cleaning Request
       ↓
Pending
       ↓
Cleaning Started
       ↓
Completed
```

The system provides:

* Cleaning request management.
* Pending cleaning requests.
* Cleaning completion.
* Housekeeping statistics.
* Completed cleaning tracking.

---

# 🔧 Maintenance Management

The maintenance module manages hotel maintenance issues.

Workflow:

```text
Maintenance Request
        ↓
Pending
        ↓
In Progress
        ↓
Completed
```

Maintenance employees can:

* View pending requests.
* Start maintenance.
* View in-progress requests.
* Resolve maintenance issues.
* View completed maintenance requests.

Managers can view maintenance statistics and completion rates.

---

# 📊 Manager Dashboard

The manager dashboard provides an overview of hotel operations.

It displays information such as:

* 💰 Total Revenue
* 👥 Total Employees
* 👤 Total Customers
* 🏨 Total Rooms
* 🛏️ Available Rooms
* 🔴 Occupied Rooms
* 📅 Total Bookings
* 🟢 Checked-in Bookings
* 🔵 Checked-out Bookings
* 🍽️ Pending Food Orders
* ✅ Delivered Food Orders
* 🧹 Pending Cleaning
* 🧹 Completed Cleaning
* 🔧 Pending Maintenance
* ✅ Completed Maintenance

---

# 📈 Reports

The manager module provides several reports.

### 💰 Revenue Report

Displays:

* Total hotel revenue.
* Revenue summary.

### 🏨 Occupancy Report

Displays:

* Total rooms.
* Available rooms.
* Occupied rooms.
* Occupancy percentage.
* Occupied room details.
* Available room details.

### 👥 Employee Performance

Displays:

* Employee information.
* Department.
* Email.
* Employee performance details.
* Rooms cleaned.

### 🍽️ Food Statistics

Displays:

* Pending orders.
* Preparing orders.
* Ready orders.
* Delivered orders.

### 🧹 Housekeeping Statistics

Displays:

* Total cleaning requests.
* Pending cleaning.
* Completed cleaning.

### 🔧 Maintenance Statistics

Displays:

* Total maintenance requests.
* Pending requests.
* Completed requests.
* Completion percentage.

---

# 🔄 Role-Based Access

The frontend provides separate pages and dashboards based on employee roles.

Example:

```text
ADMIN
 │
 ├── Employee Management
 ├── Room Management
 ├── Customer Management
 └── Hotel Administration
     
RECEPTION
 │
 ├── Customers
 ├── Bookings
 ├── Check-In
 └── Check-Out

KITCHEN
 │
 └── Food Orders

HOUSEKEEPING
 │
 └── Cleaning Requests

MAINTENANCE
 │
 └── Maintenance Requests

ROOM SERVICE
 │
 └── Food / Room Service Delivery

MANAGER
 │
 ├── Dashboard
 ├── Revenue Report
 ├── Occupancy Report
 ├── Employee Performance
 ├── Food Statistics
 ├── Housekeeping Statistics
 └── Maintenance Statistics
```

---

# 🗄️ Database

The application uses **MySQL** as the relational database.

The database contains entities/tables for different hotel operations, including areas such as:

* Users
* Employees
* Departments
* Rooms
* Customers
* Bookings
* Food
* Food Orders
* Food Order Details
* Housekeeping Requests
* Maintenance Requests
* Payments
* Feedback

The backend uses **Spring Data JPA / Hibernate** to communicate with MySQL.

---

# 🔌 REST API

The React frontend communicates with the Spring Boot backend through REST APIs.

Example API areas include:

```text
Employee APIs
Room APIs
Customer APIs
Booking APIs
Food Order APIs
Housekeeping APIs
Maintenance APIs
Manager APIs
```

The frontend service layer is organized according to these modules.

---

# ⚙️ Backend Setup

## 1. Clone the Repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
```

Navigate to the backend:

```bash
cd grand-vista-backend
```

## 2. Configure Database

Update:

```text
src/main/resources/application.properties
```

Configure your MySQL database connection.

Example:

```properties
spring.datasource.url=jdbc:mysql://YOUR_HOST:YOUR_PORT/YOUR_DATABASE?ssl-mode=REQUIRED
spring.datasource.username=YOUR_USERNAME
spring.datasource.password=YOUR_PASSWORD

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true
```

**Do not commit your real database password to GitHub.**

---

## 3. Run Backend

Using Maven wrapper on Windows:

```bash
mvnw.cmd spring-boot:run
```

Or using Maven:

```bash
mvn spring-boot:run
```

The backend will start on the configured Spring Boot port.

---

# 🎨 Frontend Setup

Navigate to the frontend:

```bash
cd grand-vista-frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Vite will display the local frontend URL in the terminal.

Usually it will be similar to:

```text
http://localhost:5173
```

---

# 🔗 Frontend–Backend Connection

The React frontend communicates with the Spring Boot backend using REST APIs.

Make sure the frontend API base URL points to the running backend.

For example:

```javascript
const API_BASE_URL = "http://localhost:8080";
```

For deployment, replace the local backend URL with the deployed backend URL.

---

# 🧪 Testing

The REST APIs can be tested using:

* Postman
* Browser
* Frontend application

Backend tests are located inside:

```text
grand-vista-backend/src/test/
```

---

# 🚀 Deployment

The project can be deployed as separate services:

```text
React Frontend
      │
      ▼
Frontend Hosting
      │
      │ REST API
      ▼
Spring Boot Backend
      │
      ▼
Aiven MySQL
```

The database can be hosted using Aiven MySQL, while the frontend and backend can be deployed using suitable cloud hosting platforms.

---

# 🔐 Security Note

The current application uses **role-based access at the application/UI level** to provide different functionality for different employee roles.

For production deployment, additional authentication and authorization mechanisms such as **Spring Security, password hashing, JWT/session-based authentication, HTTPS, and environment-based secret management** can be added.

---

# 📱 Responsive Design

The frontend uses Bootstrap and responsive layouts so that pages can adapt to different screen sizes.

The application includes:

* Responsive navigation.
* Responsive tables.
* Dashboard cards.
* Responsive forms.
* Responsive report pages.

---

# 📸 Screenshots

Add screenshots of your application here.

Example:

```text
docs/
├── login.png
├── admin-dashboard.png
├── manager-dashboard.png
├── reception.png
├── kitchen.png
├── housekeeping.png
└── maintenance.png
```

Then add them to this README using:

```markdown
![Manager Dashboard](docs/manager-dashboard.png)
```

---

# 🎓 Learning Outcomes

Through this project, the following concepts were implemented/practiced:

* Java programming
* Spring Boot
* REST API development
* Spring Data JPA
* Hibernate
* MySQL
* React.js
* Vite
* JavaScript
* Bootstrap
* Axios
* CRUD operations
* Database relationships
* Frontend-backend integration
* Role-based application functionality
* Git and GitHub
* Cloud database integration
* Hotel management workflow design

---

# 🔮 Future Enhancements

Possible future improvements include:

* Spring Security integration.
* JWT authentication.
* Password encryption/hashing.
* Email notifications.
* Online payment integration.
* Advanced dashboard charts.
* PDF report generation.
* Excel report export.
* Room availability calendar.
* Customer self-service portal.
* Automated housekeeping assignment.
* Automated maintenance assignment.
* Cloud deployment of frontend and backend.
* Improved audit logging.

---

# 👩‍💻 Developer

**Nandini Pesala**

Computer Science Student
Aspiring Java Full Stack Developer

### Technologies

```text
Java
Spring Boot
React.js
JavaScript
MySQL
REST APIs
Bootstrap
Git
GitHub
```

---

# 📄 License

This project was developed as an academic/personal full-stack project for learning and demonstrating hotel management application development.

---

## ⭐ Project Summary

**Grand Vista Hotel Management System** is a full-stack hotel management application that integrates a **React.js frontend, Spring Boot REST backend, and MySQL database** to manage hotel operations such as employees, rooms, customers, bookings, food orders, housekeeping, maintenance, and management reports.
