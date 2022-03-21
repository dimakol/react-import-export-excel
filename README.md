# react-import-export-excel

This is an example project for importing/exporting data
from/to excel file with following extensions: xlsx, csv
from/to table in react using the following package: xlsx.

## Motivation

The motivation behind this project was to implement ReactJS web application that allows import and export data between excel file and table that displayed in UI.

## Screenshots

![image](screenshots/HomePage.png?raw=true "Home Page")

![animated gif](screenshots/AnimatedExample.gif?raw=true "Animated Example")

## Tech/framework used

**Built with**

- [ReactJS](https://reactjs.org/)

## Features

- Export data from table to file: csv, xlsx.
- Import data from file (csv, xlsx, xls) to table.

## Code Examples

```
import * as XLSX from "xlsx";

const exportToExcel = (data, fileName, fileType) => {
    const workSheet = XLSX.utils.aoa_to_sheet(data);
    const workBook = { Sheets: { data: workSheet }, SheetNames: ["data"] };
    // Download
    XLSX.writeFile(workBook, fileName + "." + fileType);
  };

const importFromExcel = (file) => {
    const fileReader = new FileReader();
    fileReader.readAsArrayBuffer(file);

    fileReader.onload = (event) => {
      // parse data
      const bufferArray = event.target.result;
      const workBook = XLSX.read(bufferArray, { type: "array" });

      // get first sheet
      const workSheetName = workBook.SheetNames[0];
      const workSheet = workBook.Sheets[workSheetName];
      // convert to array
      const data = XLSX.utils.sheet_to_json(workSheet, { header: 1 });
      setFileName(getFileName(file));
      setTableData(data);
    };
  };
```

## Installation

**Running in development environment**

    git, npm and node softwares should be installed
    before moving on

- git clone https://github.com/dimakol/react-import-export-excel.git
- cd react-import-export-excel/
- npm install
- npm start

## Package used

- xlsx
- react-bootstrap

## Link to the website that hosting our project

https://dimakol.github.io/react-import-export-excel/

## Credits

- https://www.youtube.com/watch?v=h33eakwu7oo&ab_channel=SamLama
- https://www.youtube.com/watch?v=C2Fuj0gRRHI&ab_channel=Codenemy
- https://codesandbox.io/s/n02rx86z24?file=/src/components/ExcelFileInput.js
- https://javascript.plainenglish.io/how-to-create-download-and-upload-files-in-react-apps-80893da4247a

## License

MIT © Dima Kolyas
