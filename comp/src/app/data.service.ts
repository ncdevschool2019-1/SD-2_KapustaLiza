import {Person} from './person';


export class DataService {

  private data: Person[] = [];
  getData(): Person[] {

    return this.data;
  }
  addData(login: string, email: string, firstName: string, lastName: string, password: string) {

    this.data.push(new Person(login, email, firstName, lastName, password));
  }
}
