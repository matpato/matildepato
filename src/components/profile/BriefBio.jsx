// src/components/profile/BriefBio.jsx
import React from 'react';

const BriefBio = () => {
  return (
    <div className="mb-2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
    <p className="text-gray-600 dark:text-gray-300">
    Matilde Pato is an Adjunct Professor in Computer Science at the <a href="https://www.isel.pt/en/department/computer-engineering" target="_blank" rel="noopener noreferrer" className="font-bold">
    Department of Computer Engineering</a> of the <a href="https://www.isel.pt/en" target="_blank" rel="noopener noreferrer" className="font-bold">
    Lisbon School of Engineering</a> at <a href="https://www.ipl.pt/en/ureka" target="_blank" rel="noopener noreferrer" className="font-bold">Polytechnic University of Lisbon | Ureka</a>, 
    and a senior researcher at <span className="font-bold">IBEB</span> and <span className="font-bold">LASIGE</span> (FCUL) and <span className="font-bold">NOVA LINCS</span> (FCT-UNL). 
    
    With a multidisciplinary background in Biomedical Engineering and Applied Mathematics, she conducts research at the 
    intersection of Artificial Intelligence and Data Science. Currently, she is part of the Management Committee of the COST ACTION Digital Mental 
    Health for Young People (YouthDMH) in WG4 (Theory, Design and Implementation). She participates in European and national 
    R&D projects with industrial partners and other universities and COST Actions. She participated in organising a Lecture-Style 
    Tutorial on KDD 2021 entitled 
    "Creating Recommender Systems Datasets in Scientific Fields". Furthermore, she has a talk where teachers 
    and researchers can discuss computer science topics. Currently, her research focuses on Information Systems, 
    AI in healthcare, Machine Learning, Recommender Systems and Bioinformatics.
    </p>
  </div>
  );
};

export default BriefBio;