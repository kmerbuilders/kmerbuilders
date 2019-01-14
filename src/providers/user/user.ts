import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
<<<<<<< HEAD
import { UserModel } from '.././model/user.model';
=======
import { UserModel } from '../../model/user.model';
>>>>>>> 29e63f6f8d578da9e0020a2df2960678018dceff


/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  constructor(public http: HttpClient,private db: AngularFireDatabase) {
    console.log('Hello UserProvider Provider');
  }

  private userListRef = this.db.list<UserModel>('user-list');

  getUserList() {
      return this.userListRef;
  }

  addUser(user: UserModel) {
      return this.userListRef.push(user);
  }

  updateNote(user: UserModel) {
      return this.userListRef.update(user.key, user);
  }

  removeNote(user: UserModel) {
      return this.userListRef.remove(user.key);
  }

}
