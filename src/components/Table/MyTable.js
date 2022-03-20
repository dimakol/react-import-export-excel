import React from "react";
import Table from "react-bootstrap/Table";

export const MyTable = ({ data }) => {
  const headers = data[0];
  const body = data.slice(1);

  const TableRow = (row, index) => {
    return (
      <tr key={index} className="even">
        <td> {index + 1} </td>
        {row.map((value, index) => (
          <td key={index}>{value}</td>
        ))}
      </tr>
    );
  };

  const tableHeader = (
    <tr>
      <th>#</th>
      {headers.map((title, index) => (
        <th key={index}>{title}</th>
      ))}
    </tr>
  );

  const tableBody = body.map((row, index) => TableRow(row, index));

  return (
    <Table striped bordered hover>
      <thead className="bgvi">{tableHeader}</thead>
      <tbody>{tableBody}</tbody>
    </Table>
  );
};
