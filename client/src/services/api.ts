import axios from "axios";

// const API_URL = process.env.REACT_APP_BACKEND_API;
const API_URL = "http://localhost:5000";

export const api = axios.create({
  baseURL: API_URL,
});

export const registerUser = (email: string, password: string) =>
  api.post("/users/register", { email, password });

export const loginUser = (email: string, password: string) =>
  api.post("/users/login", { email, password });

export const addAvailability = (userId: string, availability: any) =>
  api.post("/availability/add", { userId, availability });

export const updateAvailability = (userId: string, availability: any) =>
  api.put("/availability/update", { userId, availability });

export const createSession = (sessionData: any) =>
  api.post("/sessions/create", sessionData);

export const getSessions = (userId: string) =>
  api.get(`/sessions/user/${userId}`);

export const updatePreferences = (userId: string, preferences: any) =>
  api.put("/users/preferences", { userId, preferences });
