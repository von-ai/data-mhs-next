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
          <div>Submitted Data</div>
          {submittedData ? (
            <div>
              <div>{submittedData.name}</div>
              <div>{submittedData.id}</div>
              <div>{submittedData.gpa}</div>
            </div>
          ) : (
            <div>No data submitted</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
