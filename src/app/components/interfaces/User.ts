
export class User {
  id: number;
  name: string
  lastname: string
  email: string
  password: string


  toString() {
    return this.id + ' - ' + this.name + ' - '
      + this.lastname + ' - ' + this.email;
  }
}
export class UserResponse {
  data: User[];
  status: boolean;
  message: string;

}
