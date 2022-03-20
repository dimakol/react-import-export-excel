import React from "react";
import Button from "react-bootstrap/Button";
import * as XLSX from "xlsx";

export const ExportExcel = ({ data, fileName, fileType }) => {
  const exportToExcel = (data, fileName, fileType) => {
    const workSheet = XLSX.utils.aoa_to_sheet(data);
    const workBook = { Sheets: { data: workSheet }, SheetNames: ["data"] };
    // Download
    XLSX.writeFile(workBook, fileName + "." + fileType);
  };

  return (
    <Button
      className="border border-secondary"
      variant="warning"
      size="sm"
      onClick={(e) => exportToExcel(data, fileName, fileType)}
    >
      Export to file
    </Button>
  );
};
