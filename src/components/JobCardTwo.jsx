function jobCardTwo(){
    return(
        <>
        <div className="flex flex-col gap-4 rounded-sm p-7 shadow-md border-2 border-gray-100">
            <div className="flex flex-col md:flex-row justify-between">
              <h2 className="text-2xl font-bold text-gray-800">{job.title}</h2>
              <h5 className="flex items-center text-xs rounded-xl font-semibold text-cyan-700 bg-cyan-100 w-fit p-1 px-4">
                {job.jobType}
              </h5>
            </div>
            <p className="text-md font-semibold text-gray-600">{job.company}</p>
            <div className="flex flex-col md:flex-row gap-3 md:gap-5 text-xs font-semibold text-gray-600">
              <p>{job.location}</p>
              <p>{job.salary}</p>
              <p>Posted 3 days ago</p>
            </div>
            <div className="flex gap-2 md:gap-5 items-center ">
              {job.skills.map((skill) => (
                <p className="flex md:gap-4 text-xs font-semibold text-cyan-800 bg-cyan-100 w-fit p-1 px-3 rounded-xl">
                  {skill}
                </p>
              ))}
            </div>
          </div>
        </>
    )
}

export default jobCardTwo