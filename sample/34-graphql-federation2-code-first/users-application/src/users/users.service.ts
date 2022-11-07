import { Injectable } from '@nestjs/common';
import { User } from './models/user.model';

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: 1, name: 'John Doe', featuredPostId: 1, favouritePostId: 4 },
    { id: 2, name: 'Richard Roe', featuredPostId: 3, favouritePostId: 2 },
  ];

  findById(id: number): User {
    return this.users.find((user) => user.id === Number(id));
  }
}
