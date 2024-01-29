 'use client'
 import { useQueryClient } from "react-query";
import { useDelUserMutation } from "@/hooks/useUsers";
import { useEffect, useState } from "react";

function Page() {
  // Get QueryClient from the context
  const queryClient = useQueryClient();

  const [getId, setGetId] = useState<string>("");

  // hook de delete

  const delMutation = useDelUserMutation(getId);

  const handleClick = async () => {
    await delMutation.mutate();
   // console.log (delMutation.status, delMutation.isSuccess)
  };

  useEffect(() => {
    if (delMutation.isSuccess) {queryClient.invalidateQueries()};
  }, [queryClient, delMutation.isSuccess]);

  return (
    <div id="app" className="container">
      <div className="card">
        <div className="card-header">React Query Axios GET - BezKoder.com</div>
        <div className="card-body">
          <div className="input-group input-group-sm">
            <div className="flex  flex-col justify-center align-middle max-w-sm mx-auto">
              <div className="mb-5">
                <input
                  type="string"
                  value={getId === null ? "" : getId.toString()}
                  onChange={(e) => setGetId(e.target.value)}
                  className="border rounded py-2 px-3 ml-2"
                  placeholder="Id"
                />
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                  onClick={() => handleClick()}
                >
                  delete by id
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page