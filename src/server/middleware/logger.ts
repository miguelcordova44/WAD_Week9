import type { NextFunction, Request, Response } from 'express';

export function logger(request: Request, _response: Response, next: NextFunction): void {
  // TODO Task 3: add the timestamp to this modular request logger.
  console.log(`[${new Date().toISOString()}] ${request.method} ${request.path}`);
  next();
}
