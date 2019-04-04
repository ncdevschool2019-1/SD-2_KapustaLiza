export class Person {
  id: number;
  login: string;
  email: string;
  firstName: string;
  lastName: string;
  subscriptions: number;
  password: string;


  constructor(login: string, email: string, firstName: string, lastName: string, password: string) {
    this.login = login;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
  }
}
