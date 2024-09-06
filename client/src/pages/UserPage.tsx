import React from "react";
import Navbar from "../components/Navbar";
import AvailabilityForm from "../components/AvailabilityForm";
import UserList from "../components/UserList";
import { useAuth } from "../components/context/AuthContext";

const UserPage: React.FC = () => {
  const userId = useAuth();

  if (!userId) {
    return <p>Please log in.</p>;
  }
  return (
    <div>
      <Navbar />
      <h1>User Dashboard</h1>
      <AvailabilityForm userId="useAuth" />
      <UserList />
    </div>
  );
};

export default UserPage;
