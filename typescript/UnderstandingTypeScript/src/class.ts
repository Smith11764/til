class Department {
  //   private readonly id: string;
  //   name: string;

  // 継承したクラスからもアクセスできるようにする
  protected employees: string[] = [];

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
  constructor(id: string, admins: string[]) {
    super(id, "IT");
  }
}

// パラメータプロパティ宣言をしない場合は以下のように記述する
// class ITDepartment extends Department {
//   admins: string[];

//   constructor(id: string, admins: string[]) {
//     super(id, "IT");
// thisキーワードはsuper()の後でないと使用できない
//     this.admins = admins;
//   }
// }

const it = new ITDepartment("d2", ["Max"]);
console.log("-------------");
it.addEmployee("May");
it.addEmployee("Jack");
it.describe();
it.printEmployeeInformation();
console.log(it);


class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }

  // override
  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }
}

const accounting2 = new AccountingDepartment("d3", []);
console.log('-------------');
accounting2.addReport("Something");
accounting2.addEmployee("Max");
accounting2.addEmployee("Manu");
accounting2.printReports();
accounting2.printEmployeeInformation();
