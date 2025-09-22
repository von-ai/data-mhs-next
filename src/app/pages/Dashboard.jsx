'use strict';
'use client';
import { useState } from 'react';
import Form from '@/components/Form';

const Dashboard = () => {
  const [submittedData, setSubmittedData] = useState(null);
  const handleFormSubmit = (data) => {
    setSubmittedData(data);
  };

  return (
    <section className="flex w-full h-full justify-center pt-10 bg-[#F5F6FB]">
      <div className=" w-[80%] h-auto bg-white rounded-2xl flex justify-center">
        <div>
          <h1 className="font-bold text-5xl p-10">Student Data</h1>
          <Form onSubmit={handleFormSubmit} />
          <h2 className="font-bold text-2xl p-4 text-center">Submitted Data</h2>
          {submittedData ? (
            <div className=" border border-gray-300 rounded-lg shadow-sm">
              <table className="">
                <thead>
                  <tr className="bg-indigo-100">
                    <th className="px-4 py-2 border-b border-gray-300 text-left">
                      Name
                    </th>
                    <th className="px-4 py-2 border-b border-gray-300 text-left">
                      Student ID
                    </th>
                    <th className="px-4 py-2 border-b border-gray-300 text-left">
                      Grade Point Average
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th className="px-4 py-2 border-b border-gray-200">
                      {submittedData.name}
                    </th>
                    <th className="px-4 py-2 border-b border-gray-200">
                      {submittedData.id}
                    </th>
                    <th className="px-4 py-2 border-b border-gray-200">
                      {submittedData.gpa}
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center">No data submitted</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
