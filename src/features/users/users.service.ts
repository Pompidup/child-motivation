import { Injectable } from '@nestjs/common';
import { IUsers } from './interfaces';

@Injectable()
export class UsersService {
   private readonly users: IUsers[] = [
       {
           id: "uuid1",
           username: "Pompidup",
           password: "password",
           role: "PARENT"
       },
       {
        id: "uuid2",
        username: "Claire",
        password: "password",
        role: "PARENT"
    },
   ];

   async findOne(username: string): Promise<IUsers | undefined> {
       return await this.users.find(user => user.username === username);
   }

}
