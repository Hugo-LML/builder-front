import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const [AUTH_USER, AUTH_PASS] = (process.env.HTTP_BASIC_AUTH ?? ':').split(':');

export function middleware(req: NextRequest) {
  if (process.env.ENABLE_HTTP_PASSWORD) {
    if (!isAuthenticated(req)) {
      return new NextResponse('Authentication required', {
        status: 401,
        headers: { 'WWW-Authenticate': 'Basic' },
      });
    }
  }

  return NextResponse.next();
}

const isAuthenticated = (req: NextRequest) => {
  const authHeader = req.headers.get('authorization') ?? req.headers.get('Authorization');
  if (!authHeader) return false;

  const auth = Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');
  const user = auth[0];
  const pass = auth[1];

  return user == AUTH_USER && pass == AUTH_PASS;
};

export const config = {
  matcher: '/(.*)',
};
