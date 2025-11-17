import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <h1 className="text-3xl font-bold mb-4">About This Project</h1>
      <p className="max-w-xl text-center">
        This page will describe how the Digit CSV Classifier works, its goals,
        and the model architecture used. You can explain the dataset, accuracy,
        and key learnings here.
      </p>
      <Link
        to="/"
        className="mt-6 text-emerald-500 hover:text-emerald-400 underline"
      >
        <div className="max-w-2xl mb-8 p-6 border rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-2">Our Problem:</h2>
          <p className="mb-2">
            The LAM Museum at Wake Forest University is currently is currently in possession of 400 clay human figurines that they would like to repatriate to Mexico. However, there is no known provenance for any of the figurines or any documentation of each artifact’s traits. The Lam Museum does not have any system in place to accurately identify or classify any of the artifacts. Manual classification is labor-intensive and requires specialized expertise and is further complicated by the subjective nature of traditional archaeological categorization, which lacks well-defined, quantitative criteria. Currently, they do not have the staff or time available to build its own system. If they were to make time to do this, other essential managing activities for the museum would have to be halted, causing major issues. Students and staff also cannot efficiently sort through the collection to determine where these figurines belong. Furthermore, analyzing the details of so many artifacts by hand would be time-consuming and may lead to mistakes, which would decrease public and educational engagement. A seasoned expert in the field is also required for identification, and it is neither cost-effective nor timely to acquire one. 
           
        ← Back to Home
      </Link>
    </div>
  );
}
