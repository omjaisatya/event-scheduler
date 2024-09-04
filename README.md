# Dynamic User Availability and Scheduling System

## Overview

This project is a web-based application that allows users to dynamically set their availability for specific days or the entire week. Admins can view this availability and schedule sessions accordingly. The application supports both one-on-one and multi-participant sessions, with a focus on a clean, intuitive, and user-friendly interface.

## Features

### 1. Dynamic User Availability Capture

- Users can log in and dynamically input their availability for specific days or the entire week.
- Availability can be specified for flexible intervals (e.g., 30 minutes, hourly).
- Users can easily add, update, or delete availability slots.
- Supports varying availability on different days.

### 2. Admin Scheduling Interface

- Admins can view all users' availability through a comprehensive dashboard.
- Admins can schedule sessions based on user availability.
- The system automatically checks for availability conflicts.
- Admins can specify session types (one-on-one or multi-participant).

### 3. Session Management

- Both users and admins can view all upcoming sessions, including details like participants and time.
- Admins can reschedule or cancel sessions, with notifications sent to affected participants.

### 4. Creative UI/UX Design

- The interface is designed to be intuitive and user-friendly.
- The application is responsive across different devices (desktop, tablet, smartphone).

## Technical Specifications

### Frontend

- **Framework/Library:** React TypeScript
- **UI Components:** Time selection, availability management, etc.

### Backend

- **Server:** Node.js with Express
- **API:** RESTful API for handling backend logic
- **Authentication:** Basic email-based login for users

### Database

- **Type:** NoSQL
- **Database:** MongoDB for storing user data, availability, and session information

## Installation

#### Prerequisites

Ensure you have the following installed on your machine:

- Node.js
- npm or yarn
- MongoDB

### Clone the Repository

```bash
  git clone https://github.com/omjaisatya/event-scheduler.git
  cd event-scheduler
```

### Backend Setup

1. Navigate to the server directory:

```bash
cd server
```

2. Install dependencies:

```bash
npm install
```

3. Create a .env file in the server directory and add the following:

```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

4. Start the backend server:

```bash
npm start
```

### Frontend Setup

1. Navigate to the client directory:

```bash
cd ../client
```

2. Install dependencies:

```bash
npm install
```

3. Create a .env file in the client directory and add the following:

```bash
BACKEND_API_URL=http://localhost:5000
```

4. Start the frontend development server:

```bash
npm start
```

### Usage

- Access the application on `http://localhost:3000`.
- Users can log in and set their availability.
- Admins can view availability and schedule sessions.
