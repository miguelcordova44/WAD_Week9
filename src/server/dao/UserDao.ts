export interface DemoUser { id: number; username: string }

export class UserDao {
  // TODO Extension: replace this in-memory demo with a users table.
  findByUsername(username: string): DemoUser | undefined {
    return username.toLowerCase() === 'student' ? { id: 1, username: 'student' } : undefined;
  }
}
