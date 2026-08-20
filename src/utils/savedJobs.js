export const getSavedJobIds = () => {
  return JSON.parse(localStorage.getItem("savedJobs")) || [];
};

export const saveJob = (jobId) => {
  const savedJobs = getSavedJobIds();

  if (!savedJobs.includes(jobId)) {
    savedJobs.push(jobId);
  }

  localStorage.setItem("savedJobs", JSON.stringify(savedJobs));
};

export const removeSavedJob = (jobId) => {
  const savedJobs = getSavedJobIds();

  const updatedJobs = savedJobs.filter((id) => id !== jobId);

  localStorage.setItem("savedJobs", JSON.stringify(updatedJobs));
};

export const isJobSaved = (jobId) => {
  const savedJobs = getSavedJobIds();

  return savedJobs.includes(jobId);
};