import { delUserByID, getUsers } from "@/utils/utilitiesFn";
import { User } from "@/types";
import { NextResponse } from "next/server";

type Params = {
  params: { id: string };
};

export const GET = async (req: Request, { params }: Params) => {
  const USERS: User[] = await getUsers();
  if (params) {
    const { id } = params;
    if (id) {
      return NextResponse.json(USERS.filter((user) => user.id == id));
    }
  }
};


export const DELETE = async (req: Request, {params}: Params) =>{
 

  delUserByID(params.id)


   return NextResponse.json({ mesage: "deleted" }, { status: 200 });
}