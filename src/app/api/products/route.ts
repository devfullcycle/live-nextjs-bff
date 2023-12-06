import { NextResponse } from "next/server";

//Route Handler
export async function GET() {
    //autenticação session/cookie | jwt
  const response = await fetch("http://localhost:8001/products", {
    next: {
      revalidate: 10, //cache dinamico
      //tags: ['products'] //sob demanda
    },
  });
  return NextResponse.json(await response.json())
}
