import { useQuery } from "react-query";
import axios from "../../helpers/Axios";

const getProfile = async () => {
  const { data } = await axios.get("/api/v1/me");
  return data;
};

export function useProfile() {
  return useQuery("me", getProfile);
}

const logout = async () => {
  const { data } = await axios.get("/api/v1/logout");
  return data;
};

export function useLogout() {
  return useQuery("session", logout);
}
