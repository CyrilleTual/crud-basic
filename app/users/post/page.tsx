"use client";

import React, { useState } from "react";
import axios from "axios";

import { User } from "@/types";
import { usePostUserMutation } from "@/hooks/useUsers";

// formuliare de creation d'un nouvel user
const CreateUserForm: React.FC = () => {
  const [newUser, setNewUser] = useState<Partial<User>>({
    name: "",
    surname: "",
    age: 0,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const mutation = usePostUserMutation(newUser);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      mutation.mutate();
    } catch (error) {
      // Handle error, e.g., show an error message
      console.error("Error creating user:", error);
    }
  };
  if (mutation.isSuccess) {
    console.log("User created successfully:", mutation.data);
  }

  

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-8">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Name:
          <input
            type="text"
            name="name"
            value={newUser.name}
            onChange={handleInputChange}
            className="  bg-slate-200 form-input mt-1 block w-full rounded-md border-gray-600"
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Surname:
          <input
            type="text"
            name="surname"
            value={newUser.surname}
            onChange={handleInputChange}
            className="  bg-slate-200 form-input mt-1 block w-full rounded-md border-gray-300"
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Age:
          <input
            type="number"
            name="age"
            value={newUser.age}
            onChange={handleInputChange}
            className=" bg-slate-200 form-input mt-1 block w-full rounded-md border-gray-300"
          />
        </label>
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Create User
        </button>
      </div>
    </form>
  );
};

export default CreateUserForm;
