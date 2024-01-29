 

import {
  getAllUsersFn,
  getOneUserFn,
  createUserFn,
  deleteUserById,
} from "@/api/usersApi";
import { useQuery, useMutation } from "react-query";
import { User } from "@/types";


// défincitions des hooks personnalisés
export function useGetUsersQuery() {
  return useQuery("users", getAllUsersFn, { enabled: true, staleTime: 60000 });
}

// retourne un user by id
export function useGetOneUserByIdQuery(id: string) {
  return useQuery(
    ["user", id],
    async () => {
      if (id !== null) {
        return await getOneUserFn(id);
      }
    },
    {
      enabled: true,
      staleTime: 60000,
    }
  );
}

// création d'un nouveau user
export function usePostUserMutation(newUser: Partial<User>) {
  return useMutation({
    mutationFn: () => createUserFn(newUser),
  });
}

export function useDelUserMutation(id: string) {
  const mutation = useMutation(() => deleteUserById(id));

  return mutation;
}

export function usePatchlUserMutation() {}
