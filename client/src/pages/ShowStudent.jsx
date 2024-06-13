import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";

const ShowStudent = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/students/${id}`)
      .then((response) => {
        setStudents(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Show Student</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Id</span>
            <span>{students._id}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">FullName</span>
            <span>
              {students.firstName} {students.lastName}
            </span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Date Of Birth</span>
            <span>{students.dateOfBirth}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Email</span>
            <span>{students.email}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Phone</span>
            <span>{students.phoneNumber}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Address</span>
            <span>{students.address}</span>
          </div>
        </div>
      )}
    </div>
  );
};
export default ShowStudent;
