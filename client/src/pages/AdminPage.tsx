import React from "react";
import Navbar from "../components/Navbar";
import SessionForm from "../components/SessionForm";
import UserList from "../components/UserList";

const AdminPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <h1>Admin Dashboard</h1>
      <UserList />
      <SessionForm />
    </div>
  );
};

export default AdminPage;
