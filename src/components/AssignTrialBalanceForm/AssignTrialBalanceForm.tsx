import React from "react";

import styles from "./AssignTrialBalanceForm.module.scss";
import { Col, Form, Row, Select, Table, TableProps } from "antd";
import { dummyAssignTrialBalanceData } from "../../hooks/dummyData";
import { IAssignTrialBalanceData } from "../../interfaces/IPeriodClosingTrialBalance";

const AssignTrialBalanceForm: React.FC = () => {
  const trialBalanceData: IAssignTrialBalanceData = dummyAssignTrialBalanceData;

  const {
    accountDataTabHeaders,
    headerDetails,
    headerRow,
    excelData,
    staringRow,
    endingRow,
    tabDetails,
    accountDataTabName,
  } = trialBalanceData;

  const handleColumnHeaders = () => {
    // sort accountDataTabHeaders object by value in alphabetical order
    const sortedHeaders = Object.entries(accountDataTabHeaders).sort((a, b) => {
      if (a[1] < b[1]) {
        return -1;
      }
      if (a[1] > b[1]) {
        return 1;
      }
      return 0;
    });

    const sortedHeaderDetails = headerDetails.sort(
      (a, b) => a.headerColumnIndex - b.headerColumnIndex
    );

    const mappedColumns: TableProps<any>["columns"] = [
      {
        title: "",
        dataIndex: "index",
        key: "index",
        children: [
          {
            title: headerRow,
            dataIndex: "rowNumber",
            key: "rowNumber",
          },
        ],
      },
    ];

    sortedHeaderDetails.forEach((column, index) => {
      mappedColumns.push({
        title: sortedHeaders[index][1],
        dataIndex: column.headerColumnName,
        key: column.headerColumnIndex,
        sorter: (a, b) => {
          if (a[column.headerColumnName] < b[column.headerColumnName]) {
            return -1;
          }
          if (a[column.headerColumnName] > b[column.headerColumnName]) {
            return 1;
          }
          return 0;
        },
        children: [
          {
            title: column.headerColumnName,
            dataIndex: column.headerColumnName,
            key: `${column.headerColumnName}2`,
          },
        ],
      });
    });

    return mappedColumns;
  };

  const handleTableData = () => {
    const topRows = JSON.parse(excelData[0].rows);
    const bottomRows = JSON.parse(excelData[1].rows);

    const topRowsWithIndex = topRows.map((row: any, index: number) => {
      const startNumber = staringRow;

      return {
        rowNumber: startNumber + index,
        ...row,
      };
    });

    const bottomRowsWithIndex = bottomRows.map((row: any, index: number) => {
      const startNumber = endingRow - bottomRows.length;

      return {
        rowNumber: startNumber + index,
        ...row,
      };
    });

    // todo: split out top and bottom rows into separate arrays
    return [...topRowsWithIndex, ...bottomRowsWithIndex];
  };

  const createSelectOptions = (
    number: number,
    selectType: "row" | "column"
  ) => {
    const returnOptions = [];

    for (let option = 0; option < number; option++) {
      let currentValue;

      if (selectType === "column") {
        currentValue = String.fromCharCode(option + 65);
      } else if (selectType === "row") {
        currentValue = option + 1;
      }

      returnOptions.push({
        value: currentValue,
        label: `${selectType} ${currentValue}`,
        key: currentValue,
      });
    }
    return returnOptions;
  };

  return (
    <div className={styles.assignTrialBalanceFormContainer}>
      <h2>Current period closing trial balance</h2>
      <sub>Please check the inputs are correct</sub>
      <Row className={styles.assignTrialBalanceBody}>
        <Col className={styles.tableContainer} flex={"auto"}>
          <Table
            columns={handleColumnHeaders()}
            dataSource={handleTableData()}
            pagination={false}
            scroll={{ x: true }}
          ></Table>
        </Col>
        <Col className={styles.formContainer} span={6}>
          <Form name={"AssignTrialBalanceForm"} layout="vertical">
            <Form.Item
              label="Sheet name"
              name={"sheetName"}
              initialValue={accountDataTabName}
            >
              {
                <Select>
                  {tabDetails.map((tab) => (
                    <Select.Option key={tab.tabIndex} value={tab.tabName}>
                      {tab.tabName}
                    </Select.Option>
                  ))}
                </Select>
              }
            </Form.Item>
            <Form.Item
              label="Starting row"
              name={"staringRow"}
              initialValue={staringRow}
            >
              <Select options={createSelectOptions(1000, "row")} />
            </Form.Item>
            <Form.Item
              label="Header row"
              name={"headerRow"}
              initialValue={headerRow}
            >
              <Select options={createSelectOptions(1000, "row")} />
            </Form.Item>
            <Form.Item
              label="Ending row"
              name={"endingRow"}
              initialValue={endingRow}
            >
              <Select options={createSelectOptions(1000, "row")} />
            </Form.Item>
            <Form.Item
              label="Nominal code column"
              name={"nominalCodeColumn"}
              initialValue={accountDataTabHeaders.AccountNumberColumnLetter}
            >
              <Select options={createSelectOptions(26, "column")} />
            </Form.Item>
            <Form.Item
              label="Account name column"
              name={"accountNameColumn"}
              initialValue={accountDataTabHeaders.AccountNameColumnLetter}
            >
              <Select options={createSelectOptions(26, "column")} />
            </Form.Item>
            <Form.Item
              label="Amounts column"
              name={"amountsColumn"}
              initialValue={accountDataTabHeaders.AmountColumnLetter}
            >
              <Select options={createSelectOptions(26, "column")} />
            </Form.Item>
            <Form.Item
              label="Balance sheet / income statement"
              name={"balanceIncomeStatement"}
              initialValue={
                accountDataTabHeaders.FinancialStatementTypeColumnLetter
              }
            >
              <Select options={createSelectOptions(26, "column")} />
            </Form.Item>
            <Form.Item label="FSA code column" name={"fsaCodeColumn"}>
              <Select options={createSelectOptions(26, "column")} />
            </Form.Item>
            <Form.Item label="Dimension column" name={"dimensionColumn"}>
              <Select options={createSelectOptions(26, "column")} />
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default AssignTrialBalanceForm;
