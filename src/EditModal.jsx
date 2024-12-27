import React, { useState } from "react";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons/faPenToSquare";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
function EditModal({ pass }) {
  const [show, setShow] = useState(false);

  const [open, setOpen] = React.useState(false);
 
  const handleOpen = (pass) => {
    setOpen(!open);
    setData(pass);
    console.log(pass);
  }
  const [data, setData] = useState({
    Id: pass?.Id,
    PageName: pass?.PageName,
    DepartmentId: pass?.DepartmentId,
    Status: pass?.Status,
  });

  const handleClose = () => setShow(false);
  const handleShow = (pass) => {
    setShow(true);
    setData(pass);
    console.log(pass);
  };

  const handleSave = () => {
    console.log(data);
    alert("Saved successfully");
    handleClose();
  };

  const handleSelectChange = (e) => {
    setData({ ...data, Status: e.target.value });
  };

  return (
    <>
<FontAwesomeIcon icon={faPenToSquare} onClick={() => handleOpen(pass)} />
      {/*<Button onClick={handleOpen} variant="gradient">
        Open Modal
      </Button>*/}
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Edit Data.</DialogHeader>
        <DialogBody>
        <div className="ms-2">
            <label htmlFor="" className="me-2">
              ID
            </label>
            <input
              type="text"
              placeholder="id"
              value={data?.Id}
              className="border w-full text-base px-2 mt-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              onChange={(e) => setData({ ...data, Id: e.target.value })}
            />
          </div>

          <div className="ms-2 mt-2">
            <label htmlFor="" className="me-2">
              PageName
            </label>
            <input
              type="text"
              placeholder="pagename"
              value={data?.PageName}
              className="border w-full text-base px-2 mt-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              onChange={(e) => setData({ ...data, PageName: e.target.value })}
            />
          </div>

          <div className="ms-2 mt-2">
            <label htmlFor="" className="me-2">
              DepartmentId
            </label>
            <input
              type="text"
              placeholder="departmentid"
              value={data?.DepartmentId}
              className="border w-full text-base px-2 mt-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              onChange={(e) => setData({ ...data, DepartmentId: e.target.value })}
            />
          </div>

          <div className="ms-2 mt-2">
            <label htmlFor="" className="me-2">
              Status
            </label>
            <select
              name="status"
              id="status"
              value={data?.Status}
              className="border w-full text-base px-2 mt-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              onChange={handleSelectChange}
            >
              <option value="1">True</option>
              <option value="0">False</option>
            </select>
          </div>

        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1 border-2 border-indigo-700 bg-indigo-700 text-white py-1 px-5"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" 
         className="mr-1 border-2 border-green-700 bg-green-700 text-white py-1 px-5" 
          onClick={handleSave}>
           Confirm
          </Button>
        </DialogFooter>
      </Dialog>

    </>
  );
}

export default EditModal;
