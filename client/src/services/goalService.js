import axios from "axios";
import { STORAGE_KEYS } from "../utils/storage";

const API = import.meta.env.VITE_API_URL;

const token = () => localStorage.getItem(STORAGE_KEYS.TOKEN);

export const createGoal = async (goal) => {
  const { data } = await axios.post(
    `${API}/goals`,

    goal,

    {
      headers: {
        Authorization: `Bearer ${token()}`,
      },
    },
  );

  return data;
};

export const getGoals = async (category) => {
  const { data } = await axios.get(
    `${API}/goals?category=${category}`,

    {
      headers: {
        Authorization: `Bearer ${token()}`,
      },
    },
  );

  return data;
};

export const getGoalById = async (id) => {
  const { data } = await axios.get(
    `${API}/goals/${id}`,

    {
      headers: {
        Authorization: `Bearer ${token()}`,
      },
    },
  );

  return data;
};
