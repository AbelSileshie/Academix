/*import React from 'react';

const DepartmentBox = ({ title, faculty, image, onClick }) => {
  return (
    <div className="text-black" onClick={onClick}>
      <div className="bg-lightblue rounded-lg p-4 flex items-center">
        <div className="w-16 h-16 rounded-full bg-blue-black mr-4"></div>
        <div>
          <div className="text-2xl font-bold mb-2">{title}</div>
          <div className="text-gray-500">{faculty}</div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentBox;*/
/*import React from 'react';

const DepartmentBox = ({ title, faculty, image, onClick }) => {
  return (
    <div className="text-black" onClick={onClick}>
      <div className="bg-lightblue rounded-lg p-4 flex items-center">
        <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
        <div>
          <div className="text-2xl font-bold mb-2">{title}</div>
          <div className="text-gray-500">{faculty}</div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentBox;*/
/*import React from 'react';

const DepartmentBox = ({ title, faculty, image, reps, onClick }) => {
  return (
    <div className="text-black" onClick={onClick}>
      <div className="bg-lightblue rounded-lg p-4 flex items-center">
        <div className="w-16 h-16 rounded-full bg-blue-black mr-4">
          <div className="w-8 h-8 rounded-full bg-white absolute -top-2 -left-2 flex items-center justify-center">
            <div className="text-xs font-bold text-blue-black">{reps}</div>
          </div>
        </div>
        <div>
          <div className="text-2xl font-bold mb-2">{title}</div>
          <div className="text-gray-500">{faculty}</div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentBox;*/
/*import React from 'react';

const DepartmentBox = ({ title, faculty, reps, onClick }) => {
  return (
    <div className="bg-ocean-blue border border-ocean-blue rounded-lg p-4 cursor-pointer" onClick={onClick}>
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 rounded-full bg-blue-100"></div>
        <div>
          <div className="text-2xl font-bold mb-2">{title}</div>
          <div className="text-gray-500 mb-2">{faculty}</div>
          <div>Reps: {reps}</div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentBox;*/
import React from 'react';

const DepartmentBox = ({ title, faculty, reps, onClick }) => {
  return (
    <div className="bg-gray-200 border border-ocean-blue rounded-lg p-4 cursor-pointer">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 rounded-full bg-blue-800"></div>
        <div>
          <div className="text-2xl font-bold mb-2">{title}</div>
          <div className="text-gray-500 mb-2">{faculty}</div>
          <div>Reps: {reps}</div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentBox;