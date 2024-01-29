import { User } from "@/types";
import fs from "fs/promises";
import path from "path";

// read an convert a jsonFile into an array
const filePath = path.resolve("./", "utils", "datas.json");

// Read the contents of the file using async/await
async function readFile(filePath: string) {
  try {
    // Read the file and parse its JSON content
    const data = await fs.readFile(filePath, "utf8");
    // Now you can use jsonData as a JavaScript object
    return JSON.parse(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

// Call the function to read the file
export const getUsers = async () => {
  // Specify the path to your JSON file

  return await readFile(filePath);
};

//// utilisation :
// import { getUsers } from "@/utils/utilitiesFn";
// import { User } from "@/types";
///////  puis  dans le composant :
//   const USERS: User[] = await getUsers();

////////////////////////////////////////////////////////////////////
//// ajouter un enregisterment au fichier json
export const addUserToJson = async (user: User) => {
  const newUser = {
    ...user,
    id: String(Date.now()),
    age: Number(user.age),
  };

  // fichier actuel
  const USERS: User[] = await getUsers();
  // on modifie le fichier
  USERS.push(newUser);

  // ecriture du fichier sur le disque
  try {
    await fs.writeFile(filePath, JSON.stringify(USERS, null, 2));
    console.log("File written successfully!");
  } catch (error) {
    console.error("Error writing file:", error);
  }
};

////////////////////////////////////////////////////////////////////
/////   Delete un enregistremet 
////////////////////////////////////////////////////////////////////

export const delUserByID = async (id: string) => {
 
  // fichier actuel
  const USERS: User[] = await getUsers();
  // on modifie le fichier
  const updatedUsers = USERS.filter((user) => String(user.id) !== String(id));
  // ecriture du fichier sur le disque
  try {
    await fs.writeFile(filePath, JSON.stringify(updatedUsers, null, 2));
    console.log("File written successfully!");
  } catch (error) {
    console.error("Error writing file:", error);
  }
};