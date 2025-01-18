import { NextResponse } from 'next/server';

export function middleware(req) {
  const token = req.cookies.get('token')?.value; 
  const url = req.nextUrl.clone();

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/login', '/createtask'], 
};
