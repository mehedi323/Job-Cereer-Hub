import {  CiLocationOn } from "react-icons/ci";
import { BiDollarCircle } from "react-icons/bi";

const Job = ({ job }) => {
  const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure><img src={logo} /></figure>
      <div className="card-body">
        <h2 className="card-title font-extrabold text-xl">{job_title}</h2>
        <p className="text-xl font-semibold mt-2 mb-2">{company_name}</p>
        <div>
          <button className="border rounded-xl font-extrabold border-sky-300 mr-3 text-sky-300 p-2">{remote_or_onsite}</button>
          <button className="border rounded-xl font-extrabold border-sky-300 text-sky-300 p-2">{job_type}</button>
        </div>
        <div className="flex mt-2 mb-2"> 
          <h2 className="flex items-center text-xl font-semibold mr-4">< CiLocationOn className="text-xl mr-2"></CiLocationOn>{location}</h2>
           <h2 className="flex items-center text-xl font-semibold"><BiDollarCircle className="text-xl mr-2"></BiDollarCircle>Salary:{salary}</h2>
        </div>
        <div className="card-actions  ">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Job; 