import type { NextFunction, Request, Response } from 'express';

export function requireLogin(request: Request, response: Response, next: NextFunction): void {
  // Teaching stub: use x-demo-user: student to pass this gatekeeper.
  if (request.header('x-demo-user') !== 'student') {
    response.status(401).json({ message: 'Please log in before using this route.' });
    return;
  }
  next();
}
