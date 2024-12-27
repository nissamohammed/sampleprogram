import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Typography } from "@material-tailwind/react";
import { Stepper, Step, Button, Checkbox } from "@material-tailwind/react";
import EditModal from "./EditModal";
import SelectedRowsTable from "./SelectedRowsTable";
import Toggle from "./Toggle";

const TABLE_HEAD = ["ID", "PageName", "DepartmentId", "Status", "Select", "Action"];

function App() {
  const [data, setData] = useState([]);
  const [activeStep, setActiveStep] = useState(0);
  const [selectedRows, setSelectedRows] = useState([]);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://connectklm.initstore.com/api/UserRights/GetPagesForUsers"
      );
      setData(response.data.Result);
    };
    fetchData();
  }, []);

  const handleNext = () => {
    // Prevent going to Step 2 if no rows are selected
    if (activeStep === 0 && selectedRows.length === 0) {
      alert("Please select at least one row to proceed to the next step.");
      return;
    }
    setActiveStep((cur) => cur + 1);
  };

  const handlePrev = () => setActiveStep((cur) => cur - 1);

  const handleRowSelect = (item) => {
    setSelectedRows((prevSelectedRows) => {
      if (prevSelectedRows.find((row) => row.Id === item.Id)) {
        // Deselect row
        return prevSelectedRows.filter((row) => row.Id !== item.Id);
      } else {
        // Select row
        return [...prevSelectedRows, item];
      }
    });
  };

  const handleAllSelect = (isChecked) => {
    if (isChecked) {
      // Select all rows
      setSelectedRows(data);
    } else {
      // Deselect all rows
      setSelectedRows([]);
    }
  };
  
  const isAllSelected = selectedRows.length === data.length && data.length > 0;
  
  return (
    <div className="p-3" style={{ minHeight: "100vh", backgroundImage: 'linear-gradient(115deg,#9F7AEA,#FEE2FE)' }}>
      <Toggle/>
      <div className="w-full py-4 px-8">
        <Stepper
          activeStep={activeStep}
          isLastStep={(value) => setIsLastStep(value)}
          isFirstStep={(value) => setIsFirstStep(value)}
        >
          <Step onClick={() => setActiveStep(0)}>1</Step>
          <Step onClick={() => setActiveStep(1)}>2</Step>
        </Stepper>
        <div className="mt-16 flex justify-between">
          <Button onClick={handlePrev} disabled={isFirstStep}>
            Prev
          </Button>
          <Button onClick={handleNext} disabled={isLastStep}>
            Next
          </Button>
        </div>
        <div className="mt-8">
          {activeStep === 0 && (
            <Card className="h-full w-full overflow-scroll">
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                    >
                      {head === "Select" ? (
                         <div className="flex items-center ">
                        <Checkbox
                          onChange={(e) => handleAllSelect(e.target.checked)}
                          checked={isAllSelected}
                        /> 
                        <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                      >
                        All Select
                      </Typography>
                        
                        </div>
                      ) : (
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal leading-none opacity-70"
                        >
                          {head}
                        </Typography>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data?.map((item, index) => {
                  const isLast = index === data.length - 1;
                  const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
          
                  return (
                    <tr key={item?.Id}>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {item?.Id}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {item?.PageName}
                        </Typography>
                      </td>
                      <td className={`${classes} bg-blue-gray-50/50`}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {item?.DepartmentId}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {item?.Status}
                        </Typography>
                      </td>
                      <td className={`${classes} bg-blue-gray-50/50`}>
                        <Checkbox
                          onChange={() => handleRowSelect(item)}
                          checked={selectedRows.some((row) => row.Id === item.Id)}
                        />
                      </td>
                      <td className={classes}>
                        <EditModal pass={item} />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Card>          
          )}
          {activeStep === 1 && (
            <SelectedRowsTable selectedRows={selectedRows} tableHead={TABLE_HEAD} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
