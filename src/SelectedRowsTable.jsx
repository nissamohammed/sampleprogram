import React from "react";
import { Card, Typography } from "@material-tailwind/react";

const SelectedRowsTable = ({ selectedRows, tableHead }) => {
  return (
    <Card className="p-6">
      <Typography variant="h6" className="mb-4">
        Selected Rows Details
      </Typography>
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {tableHead.slice(0, 4).map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {selectedRows.map((row) => (
            <tr key={row.Id}>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {row.Id}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {row.PageName}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {row.DepartmentId}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {row.Status}
                </Typography>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
};

export default SelectedRowsTable;
