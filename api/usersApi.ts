import {axios} from "@/lib/http-common"
import { User } from "@/types";

type UsersResp = {
  status: string;
  data: User[];
};

// recupération des tous les users
export const getAllUsersFn = async () => {
  const response = await axios.get (`/api/users`);
  return response.data ;
};

// recupération d'un user par id 
export const getOneUserFn = async (id : string) => {
  const response = await axios.get(`/api/users/${id}`);
  return response.data;
};

// création d'un nouveau user 
export const createUserFn = async (user: Partial<User>) =>{
  const response = await axios.post ('/api/users', user)
  return response; 
}

// delete d'un user by id 
export const deleteUserById = async (id: string): Promise<any> => {
  const response = await axios.delete(`/api/users/${id}`);
  return response.data;
};