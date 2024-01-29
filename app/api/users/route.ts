import { NextResponse } from "next/server";
import { User } from "@prisma/client";
/////////////////  import du constructeur et instanciation d'un client
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

///// get de tous les users 
export const GET = async () => {
  try {
    const users: User[] = await prisma.user.findMany();
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong!"},
      { status: 500 }/// internal server err
    ); 
  } finally {
    await prisma.$disconnect();
  }
};


// requète POST - création d'une nouvel user 
export const POST = async (req: Request) => {
  try {
    let userData = await req.json();
    userData = { ...userData, age: +userData.age }; // conversion age en number
    const newUser = await prisma.user.create({data: userData});
    return NextResponse.json({newUser},{ status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong!"},
      { status: 500 }
    ); 
  } finally {
    await prisma.$disconnect();
  }
};
