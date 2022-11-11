// public = bisa diakses di semua class / dari luar class
// protected = hanya bisa diakses dari class tersebut dan turunannya
// private = hanya bisa diakses oleh class itu sendiri

class User1 {
  private name: string;

  constructor(name: string, private age: number) {
    this.name = name;
  }

  setName(name: string): void {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }
}

const user1 = new User1("Rian", 20);
// console.log(user.getName());

// extends untuk menjadi children
class Admin extends User1 {
  read: boolean = true;
  write: boolean = true;
  private _phone: string;
  private _email: string = "";

  static getRole: string = "Admin"; // static untuk mengambil langsung tanpa initialisasi

  constructor(phone: string, name: string, age: number) {
    super(name, age); // untuk memanggil property parentnya
    this._phone = phone;
  }

  // Setter untuk mengset property
  public set email(v: string) {
    this._email = v;
  }

  // Getter untuk memanggil property
  public get email(): string {
    return this._email;
  }

  static getRoleAdmin(): string {
    return "Admin";
  }
}

// const adminBaru = new Admin("1212129", "Arsa", 12);
// console.log(adminBaru);

// adminBaru.email = "rianarsa48@gmail.com";
// console.log(adminBaru.email);

const roles = Admin.getRoleAdmin();
console.log(roles);
