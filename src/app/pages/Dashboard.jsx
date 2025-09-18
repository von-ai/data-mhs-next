'use strict';
'use client';
import TextField from '@/components/TextField';
import { use, useState } from 'react';
import Button from '@/components/Button';

const Dasbor = () => {
  const [name, setName] = useState('');
  const [gpa, setGpa] = useState('');
  const [id, setId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, id, gpa);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setName('');
    setGpa('');
    setId('');
  };

  return (
    <section className="flex w-full h-full justify-center pt-10 bg-[#F5F6FB]">
      <div className=" w-[80%] h-auto bg-white rounded-2xl flex justify-center">
        <div>
          <h1 className="font-bold text-5xl p-10">Student Data</h1>
          <form className="py-3" onSubmit={handleSubmit}>
            <TextField
              name="Name"
              type="text"
              placeholder="Name"
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              classname="p-3"
            />
            <TextField
              name="id"
              type="text"
              placeholder="Input Your Student ID"
              label="ID"
              value={id}
              onChange={(e) => setId(e.target.value)}
              classname="p-3"
            />
            <TextField
              name="GPA"
              type="number"
              placeholder="Input Your GPA"
              label="GPA"
              value={gpa}
              onChange={(e) => {
                const val = Number(e.target.value);
                if (val === '') {
                  setGpa('');
                  return;
                }
                if (val >= 0 && val <= 4) {
                  setGpa(val);
                }
              }}
              min={0}
              max={4}
              step={0.1}
              classname="p-3"
            />
            <div className="flex justify-center gap-4 pt-3">
              <Button label="Reset" onClick={handleReset} />
              <Button
                label="Submit Your Data"
                type="submit"
                onClick={handleSubmit}
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Dasbor;
