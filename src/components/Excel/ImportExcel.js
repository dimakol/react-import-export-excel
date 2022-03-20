import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
import * as XLSX from "xlsx";

// accepted files format for import
const EXTENSIONS = ["xlsx", "xls", "csv"];
const SheetJSFT = EXTENSIONS.map((format) => {
  return "." + format;
}).join(",");

export const ImportExcel = ({ setFileName, setTableData }) => {
  const fileInput = useRef(null);

  // file input selection
  const handleChange = (event) => {
    const files = event.target.files;
    // file selected
    if (files && files[0]) {
      if (getFileExtension(files[0])) {
        importFromExcel(files[0]);
      } else {
        alert("Invalid file input, Select Excel, CSV file");
      }
    }
  };

  // return the file name
  const getFileName = (file) => {
    const parts = file.name.split(".");
    const fileName = parts[0];
    return fileName;
  };

  // return true if the file with supported extension
  const getFileExtension = (file) => {
    const parts = file.name.split(".");
    const extension = parts[parts.length - 1];
    return EXTENSIONS.includes(extension);
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

  return (
    <React.Fragment>
      <p>
        <Button
          className="border border-secondary mr-1"
          variant="warning"
          size="sm"
          onClick={() => fileInput.current.click()}
        >
          import from file
        </Button>
        Only csv, xlsx and xls files are supported.
      </p>

      <input
        ref={fileInput}
        type="file"
        hidden
        multiple={false}
        accept={SheetJSFT}
        onChange={handleChange}
      />
    </React.Fragment>
  );
};
