'use strict';
import TextField from '@/components/TextField';

const Dasbor = () => {
  return (
    <section className="flex w-full h-full justify-center pt-10 bg-[#F5F6FB]">
      <div className=" w-[70%] h-auto bg-white rounded-2xl flex justify-center">
        <h1 className="font-bold text-5xl p-10">Student Data</h1>
        <TextField />
      </div>
    </section>
  );
};

export default Dasbor;
