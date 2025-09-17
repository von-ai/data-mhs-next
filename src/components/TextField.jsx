'use strict';

const TextField = ({
  label,
  type = 'text',
  name,
  value,
  onChange,
  placeholder = '',
  classname,
}) => {
  return (
    <>
      <div className={`flex flex-col gap-1 ${classname}`}>
        {label && (
          <label htmlFor={name} className="text-sm font-medium text-gray-400">
            {label}
          </label>
        )}
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="px-3 py-3 border rounded-md border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 hover:border-indigo-500 transition-colors ease-in-out duration-200"
        />
      </div>
    </>
  );
};

export default TextField;
