interface ITabDetails {
  tabIndex: number;
  tabName: string;
}

interface IHeaderDetails {
  headerColumnIndex: number;
  headerColumnName: string;
}

interface IExcelData {
  rows: string;
}

interface IAccountDataTabHeaders {
  AccountNumberColumnLetter: string;
  AccountNameColumnLetter: string;
  FinancialStatementTypeColumnLetter: string;
  AmountColumnLetter: string;
}

export interface IAssignTrialBalanceData {
  numberOfTabs: number;
  singleTab: boolean;
  tabDetails: ITabDetails[];
  headerDetails: IHeaderDetails[];
  accountDataTabIndex: number;
  accountDataTabName: string;
  accountDataTabRows: number;
  accountDataTabHeaders: IAccountDataTabHeaders;
  headerRow: number;
  staringRow: number;
  endingRow: number;
  excelData: IExcelData[];
}
