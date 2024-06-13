import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";

const StudentTable = ({ students }) => {
  return (
    <table className="w-full border-separate border-spacing-2">
      <thead>
        <tr>
          <th className="border border-slate-600 rounded-md">No</th>
          <th className="border border-slate-600 rounded-md max-md:hidden">
            Full Name
          </th>
          <th className="border border-slate-600 rounded-md max-md:hidden">
            Date Of Birth
          </th>
          <th className="border border-slate-600 rounded-md max-md:hidden">
            Email
          </th>
          <th className="border border-slate-600 rounded-md max-md:hidden">
            Phone
          </th>
          <th className="border border-slate-600 rounded-md max-md:hidden">
            Address
          </th>
          <th className="border border-slate-600 rounded-md">Action</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <tr key={student._id} className="h-8">
            <td className="border border-slate-700 rounded-md text-center">
              {index + 1}
            </td>
            <td className="border border-slate-700 rounded-md text-center max-md:hidden">
              {student.firstName} {student.lastName}
            </td>
            <td className="border border-slate-700 rounded-md text-center max-md:hidden">
              {student.dateOfBirth}
            </td>
            <td className="border border-slate-700 rounded-md text-center max-md:hidden">
              {student.email}
            </td>
            <td className="border border-slate-700 rounded-md text-center max-md:hidden">
              {student.phoneNumber}
            </td>
            <td className="border border-slate-700 rounded-md text-center max-md:hidden">
              {student.address}
            </td>
            <td className="border border-slate-700 rounded-md text-center">
              <div className="flex justify-center gap-x-4">
                <Link to={`/students/details/${student._id}`}>
                  <BsInfoCircle className="text-2x1 text-green-800" />
                </Link>
                <Link to={`/students/update/${student._id}`}>
                  <AiOutlineEdit className="text-2x1 text-yellow-800" />
                </Link>
                <Link to={`/students/delete/${student._id}`}>
                  <MdOutlineDelete className="text-2x1 text-red-800" />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentTable;
