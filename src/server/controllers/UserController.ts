import type { Request, Response } from 'express';
import { UserDao } from '../dao/UserDao.js';

const userDao = new UserDao();

export class UserController {
  login(request: Request, response: Response): void {
    const username = String(request.body?.username ?? '');
    const user = userDao.findByUsername(username);
    if (!user) {
      response.status(401).json({ message: 'Try the demo username: student' });
      return;
    }
    response.json({ message: `Welcome, ${user.username}!`, user });
  }
}
