"use client";
import { User } from "@/types";
import { useGetUsersQuery } from "@/hooks/useUsers";

export default function Home() {
  
  // solution 1 
  //const fetchUsers = ()=> axios.get(`/api/users`);
  //const { isFetching, isSuccess, data:resp, isError } = useQuery("users", fetchUsers,{staleTime:60000});

  const { isFetching, isSuccess, data, isError } =  useGetUsersQuery()

  if (isFetching) return <div>Fetching</div>;
  if (isError)return(<div>Error</div>);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1> coucou </h1>
      {isSuccess &&
        data && data.map((user: User) => (
          <p key={user.id}>{user.name}</p>
        ))}
    </main>
  );
}
