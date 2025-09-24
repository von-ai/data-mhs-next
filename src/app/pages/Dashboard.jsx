'use client';
import { useState } from 'react';
import Form from '@/components/Form';

const Dashboard = () => {
  const [submittedData, setSubmittedData] = useState([]);

  const handleFormSubmit = (data) => {
    setSubmittedData((prev) => [...prev, data]);
  };

  return (
    <section className="flex w-full h-full justify-center pt-10 bg-[#F5F6FB]">
      <div className="w-[80%] h-auto bg-white rounded-2xl flex justify-center">
        <div>
          <h1 className="font-bold text-5xl p-10">Student Data</h1>
          <Form onSubmit={handleFormSubmit} />
          <h2 className="font-bold text-2xl p-4 text-center">Submitted Data</h2>

          {submittedData.length > 0 ? (
            <div className="border border-gray-300 rounded-lg shadow-sm">
              <table className="w-full">
                <thead>
                  <tr className="bg-indigo-100">
                    <th className="px-4 py-2 border-b border-gray-300 text-left">
                      Name
                    </th>
                    <th className="px-4 py-2 border-b border-gray-300 text-left">
                      Student ID
                    </th>
                    <th className="px-4 py-2 border-b border-gray-300 text-left">
                      GPA
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {submittedData.map((item, idx) => (
                    <tr key={idx}>
                      <td className="px-4 py-2 border-b border-gray-200">
                        {item.name}
                      </td>
                      <td className="px-4 py-2 border-b border-gray-200">
                        {item.id}
                      </td>
                      <td className="px-4 py-2 border-b border-gray-200">
                        {item.gpa}
                      </td>
                      <td className="px-4 py-2 border-b border-gray-200">
                        {item.files &&
                          item.files.length >
                            0(
                              <ul>
                                {item.files.map((file, fidx) => (
                                  <li key={fidx}>{file.name}</li>
                                ))}
                              </ul>
                            )}
                      </td>
                    </tr>
                  ))}
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
