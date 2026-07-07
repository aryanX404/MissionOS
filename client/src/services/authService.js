const BASE_URL = `${import.meta.env.VITE_API_URL}/auth`;
import { STORAGE_KEYS } from "../utils/storage";



export const signup = async (userData) => {
    const response = await fetch(`${BASE_URL}/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    });

    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message);
    }
    return data;
};

export const login = async (userData) => {

    const response = await fetch(`${BASE_URL}/login`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(userData)
    });

    const data = await response.json();
    if(!response.ok){
        throw new Error(data.message);
    }
    return data;
}

export const completeSetup = async () => {

    const token = localStorage.getItem(STORAGE_KEYS.TOKEN);

    const response = await fetch(
        `${BASE_URL}/complete-setup`,
        {

            method:"PATCH",

            headers:{

                Authorization:`Bearer ${token}`

            }

        }
    );

    const data = await response.json();

    if(!response.ok){

        throw new Error(data.message);

    }

    return data;

}