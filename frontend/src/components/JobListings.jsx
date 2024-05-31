import React, { useState, useEffect } from "react";
import JobListing from "./JobListing";
import { Spinner } from "./Spinner";
const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome ? "/api/jobs?_limit=3" : "/api/jobs/";
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log("error fetchging data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  return (
    <section class="bg-blue-50 px-4 py-10">
      <div class="container-xl lg:container m-auto">
        <h2 class="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Jobs" : "All Jobs"}
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          {loading ? (
            <h2>{<Spinner loading={loading} />}</h2>
          ) : (
            <>
              {jobs.map((job) => (
                <JobListing key={job.id} job={job} />
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default JobListings;
