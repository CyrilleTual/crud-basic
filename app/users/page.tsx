// objectifs : getAllUsers / getUserById / getUserByTitle

"use client";
import { useGetOneUserByIdQuery, useGetUsersQuery } from "@/hooks/useUsers";
import { User } from "@/types";
import { useEffect, useState } from "react";

export default function Page() {
  type Result = {
    status: string;
    data: User[];
  };
  const [formatedResponse, setFormatedResponse] = useState<string>("");
  const [getResult, setGetResult] = useState<Result | null>(null);
  //////////////////////////////////////////////////////////////////////////////////
  // recupération de toutes les occurences
  const allUsers = useGetUsersQuery();
  const {
    data: users,
    refetch: getAllData,
    isSuccess: getAllIsSuccess,
  } = allUsers;

  useEffect(() => {
    if (getAllIsSuccess && users) {
      const result = {
        status: allUsers.status,
        data: allUsers.data,
      };
      setGetResult(result);
      setFormatedResponse(JSON.stringify(result, null, 2));
    }
    return () => {
      setGetResult(null);
      setFormatedResponse("klkjnikjhiun");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [users, getAllIsSuccess, getAllData]);

  //////////////////////////////////////////////////////////////////////////////////
  // recupération de une user by id
  const [getId, setGetId] = useState<string>("");

  const userById = useGetOneUserByIdQuery(getId);

  const {
    data: user,
    refetch: getDataById,
    isSuccess: getOneIsSuccess,
  } = userById;

  useEffect(() => {
    if (getOneIsSuccess && user) {
      const result = {
        status: userById.status,
        data: userById.data,
      };
      setGetResult(result);
      setFormatedResponse(JSON.stringify(result, null, 2));
    }
    return () => {
      console.log("kfkfk");
      setGetResult(null);
      setFormatedResponse("");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getOneIsSuccess, getDataById]);


  //////////////////////////////////////////////////////////////////////////////////
  return (
    <div id="app" className="container">
      <div className="card">
        <div className="card-header">React Query Axios GET - BezKoder.com</div>
        <div className="card-body">
          <div className="input-group input-group-sm">
            <div className="flex  flex-col justify-center align-middle max-w-sm mx-auto">
              <div className="mb-5">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                  onClick={() => getAllData()}
                >
                  Get All
                </button>
              </div>
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
                  onClick={() => getDataById()}
                >
                  Get by Id
                </button>
              </div>
            </div>

            {/*
            <input
              type="text"
              value={getTitle}
              onChange={(e) => setGetTitle(e.target.value)}
              className="form-control ml-2"
              placeholder="Title"
            />
            <div className="input-group-append">
              <button
                className="btn btn-sm btn-primary"
                onClick={getDataByTitle}
              >
                Find By Title
              </button>
            </div>

            <button
              className="btn btn-sm btn-warning ml-2"
              onClick={clearGetOutput}
            >
              Clear
            </button>*/}
          </div>

          {getResult && (
            <div className="alert alert-secondary mt-2" role="alert">
              <pre>{formatedResponse}</pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
