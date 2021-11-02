class Profile {
  private name: string;
  private age: number;
  private gmail: string;

  constructor(name: string, age: number, gmail: string) {
    this.name = name;
    this.age = age;
    this.gmail = gmail;
  }

  get getName(): string {
    return this.name;
  }

  set setName(name: string) {
    this.name = name;
  }

  get getAge(): number {
    return this.age;
  }

  set setAge(age: number) {
    this.age = age;
  }

  get getGmail(): string {
    return this.gmail;
  }

  set setGmail(gmail: string) {
    this.gmail = gmail;
  }
}

export default Profile;
