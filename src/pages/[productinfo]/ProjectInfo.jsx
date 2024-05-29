import React from 'react';

function ProjectInfo(param) {
  const id = param;
  if(id == 1){
    
  }
  return (
    <div>
      <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-md p-4 m-2">
        <img
          src="https://placehold.co/150"
          alt="Project Image"
          className="w-full h-8 0 object-cover rounded-lg"
        />
        <h2 className="text-lg font-semibold mt-2">Project {param.ProjectInfo}</h2>
        <p className="text-zinc-600 dark:text-zinc-400">
          Project Description goes here. It can be a bit longer to see how it
          wraps.
        </p>
        <button className="bg-blue-500 text-white p-2 rounded-lg mt-4">
          View Details
        </button>
      </div>
    </div>
  );
}

export default ProjectInfo;