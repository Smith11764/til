class Department {
  //   private readonly id: string;
  //   name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department: (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("d1", "Accounting");
accounting.describe();

// 単にdescribeメソッドを呼び出すだけ
// const accoountingCopy = { describe: accounting.describe };
// describeメソッドを呼び出すとaccountingCopyのnameプロパティがundefinedなので
// accountingCopyはDepartmentクラスのインスタンスではないと判断され、エラーが発生する
// accoountingCopy.describe();

// 以下のようにするとDepartmentオブジェクトとなるのでエラーが発生しない
// const accoountingCopy = { name: 'dummy', describe: accounting.describe };
// accoountingCopy.describe();

accounting.addEmployee("Max");
accounting.addEmployee("Manu");

accounting.printEmployeeInformation();

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

const accounting2 = new ITDepartment("d2", ["Max"]);
accounting2.describe();
