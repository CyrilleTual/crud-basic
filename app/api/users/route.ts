 
import { getUsers, addUserToJson } from "@/utils/utilitiesFn";
import { NextResponse } from "next/server";
import { User } from "@/types";
 

export const GET = async () =>{
  const USERS : User[]= await getUsers();
  return NextResponse.json(USERS, { status: 200 });
}

export const POST = async (req: Request) =>{

    const datas = await  req.json()

    // on veut completer le fichier Json et ecrire sur le serveur 
     addUserToJson (datas)

    return NextResponse.json(
      { datas: datas },
      { status: 200 }
    );
}

 