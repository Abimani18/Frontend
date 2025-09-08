import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JobDescription from "../../components/Careers/jobDescription/jobDescription";
import Landing from "../../components/subTopic/Landing";
import JobDescriptionPageData from "../../../../data/careers/JobDescriptionPageData/JobDescriptionPageData";
import CareersSuggestionCard from "../../components/Careers/jobDescription/CareersSuggestionCard/CareersSuggestionCard";
import "./jobDescriptionPage.css";
import { jobOpeningDetails } from "../../../../data/careers/JobOpeningData/jobGalleryData";

const JobDescriptionPage = () => {
  const { routeID } = useParams();
  const [jobDetail, setJobDetail] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobDetail = async () => {
      try {
        const routeIDNumber = parseInt(routeID);
        const foundJob = jobOpeningDetails.find(
          (job) => job.routeID === routeIDNumber
        );
        if (foundJob) {
          setJobDetail(foundJob);
        } else {
          setError("Job not found");
        }
      } catch (error) {
        setError("Error fetching job details");
      }
    };

    fetchJobDetail();

    return () => {
      // Clean-up function
    };
  }, [routeID]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!jobDetail) {
    return <div>Loading...</div>; // Show loading indicator while fetching data
  }

  const filteredJobs = jobOpeningDetails.filter(
    (job) => job.routeID !== jobDetail.routeID
  );

  return (
    <div>
      <Landing Landing={JobDescriptionPageData.LandingContent} />
      <div className="jdpage-layout">
        <div className="jd-master">
          <JobDescription jobDetails={jobDetail} />
        </div>
        <div className="suggestion-card-master">
          <div className="career-suggestion-heading">
            Recommended Roles for You
          </div>
          {filteredJobs.map((job, index) => (
            <CareersSuggestionCard key={index} jobDetails={job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobDescriptionPage;
