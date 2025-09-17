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
          <label htmlFor={name} className="text-sm font-medium text-gray-700">
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
          className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
    </>
  );
};

export default TextField;
