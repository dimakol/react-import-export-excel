import React from "react";
import "./App.css";
// Import components
import { Header } from "./components/Header/Header";
import { MyTable } from "./components/Table/MyTable";
import { ExportExcel } from "./components/Excel/ExportExcel";
import { ImportExcel } from "./components/Excel/ImportExcel";
// Import utils
import { FILE_NAME, FILE_TYPE, makeCustomersData } from "./utils/customers";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tableData: makeCustomersData(),
      fileName: FILE_NAME,
      fileType: FILE_TYPE,
    };
  }

  setFileName = (fileName) => {
    this.setState({ fileName });
  };

  changeFileType = (event) => {
    const fileType = event.target.value;
    this.setState({ fileType });
  };

  setTableData = (tableData) => {
    this.setState({ tableData });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <div className="row">
          <div className="col-md-8">
            <h2>{this.state.fileName}</h2>
          </div>
          <form>
            <div>
              <span className="mr">File type:</span>
              <select
                name="fileType"
                onChange={this.changeFileType}
                value={this.state.fileType}
                className="mr"
              >
                <option value="csv">CSV</option>
                <option value="xlsx">XLSX</option>
              </select>
              <ExportExcel
                data={this.state.tableData}
                fileName={this.state.fileName}
                fileType={this.state.fileType}
              />
            </div>
            <div className="mb-2">
              <ImportExcel
                setFileName={this.setFileName}
                setTableData={this.setTableData}
              ></ImportExcel>
            </div>
          </form>
        </div>
        <MyTable data={this.state.tableData} />
      </div>
    );
  }
}

export default App;
