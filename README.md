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

⭐ Main Features
👨‍💼 Employee Management – Add, assign roles/departments, manage employee details, salary, and search records.
🏨 Room Management – Manage room numbers, types, prices, availability, occupancy, and status.
👤 Customer Management – Manage customer information and associate customers with bookings and services.
📅 Booking Management – Create bookings, allocate rooms, manage check-in/check-out, and track booking status.
🍽️ Food Order Management – Manage orders through Pending → Preparing → Ready → Delivered with kitchen and room-service operations.
🧹 Housekeeping Management – Manage cleaning requests from Pending → Started → Completed and track cleaning statistics.
🔧 Maintenance Management – Manage maintenance issues through Pending → In Progress → Completed and track resolution.
📊 Manager Dashboard – Monitor revenue, employees, customers, rooms, bookings, food orders, housekeeping, and maintenance.
📈 Reports & Statistics – Revenue, occupancy, employee performance, food orders, housekeeping, and maintenance reports.

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
