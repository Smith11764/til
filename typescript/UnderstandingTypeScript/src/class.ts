abstract class Department {
  //   private readonly id: string;
  //   name: string;

  // 継承したクラスからもアクセスできるようにする
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const employee1 = Department.createEmployee("Max");
console.log(employee1);
console.log("=======");

// const accounting = new Department("d1", "Accounting");
// accounting.describe();

// 単にdescribeメソッドを呼び出すだけ
// const accoountingCopy = { describe: accounting.describe };
// describeメソッドを呼び出すとaccountingCopyのnameプロパティがundefinedなので
// accountingCopyはDepartmentクラスのインスタンスではないと判断され、エラーが発生する
// accoountingCopy.describe();

// 以下のようにするとDepartmentオブジェクトとなるのでエラーが発生しない
// const accoountingCopy = { name: 'dummy', describe: accounting.describe };
// accoountingCopy.describe();

// accounting.addEmployee("Max");
// accounting.addEmployee("Manu");

// accounting.printEmployeeInformation();

class ITDepartment extends Department {
  constructor(id: string, admins: string[]) {
    super(id, "IT");
  }

  describe(this: ITDepartment): void {
    console.log("IT部門 - ID:: " + this.id);
  }
}

// パラメータプロパティ宣言をしない場合は以下のように記述する
// 抽象クラスはインスタンス化できない
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
  static fiscalYear = 2020;

  private lastReport: string;
  private static instance: AccountingDepartment;

  // シングルトン（一つしかインスタンス化しない）
  // privateにすると外部からのインスタンス化を禁止できる
  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
    // クラス内でstaticにアクセス
    console.log(AccountingDepartment.fiscalYear);
  }

  static getInstance(): AccountingDepartment {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("d2", []);
    return this.instance;
  }

  // getter
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("レポートが見つかりません。");
  }

  // setter
  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("正しい値を設定してください。");
    }
    this.addReport(value);
  }

  describe(this: AccountingDepartment): void {
    console.log("Accounting部門 - ID:: " + this.id);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
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

const accounting2 = AccountingDepartment.getInstance();
const accounting3 = AccountingDepartment.getInstance();
console.log(accounting2, accounting3);
console.log("-------------");
accounting2.describe();
accounting2.addReport("Something");
accounting2.addReport("Something else");
accounting2.addEmployee("Max");
accounting2.addEmployee("Manu");
accounting2.printReports();
accounting2.printEmployeeInformation();
accounting2.mostRecentReport = "最新のレポート";
console.log(accounting2.mostRecentReport);
console.log(AccountingDepartment.fiscalYear);
