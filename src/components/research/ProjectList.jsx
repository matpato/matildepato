// src/components/ProjectList.jsx
import React from 'react';

const ProjectList = () => {
  const projects = [
    {
        title: "Digital Mental Health for Young People (YouthDMH)",
        timeframe: "2024-2028",
        grant: "N/A",
        funding: "COST ACTION European Cooperation in Science & Technology",
        reference: "CA23153",
        role: "Management Comitte (WG4)",
        objective: "The YouthDMH COST Action aims to maximize the positive impact of technology on youth mental health while mitigating its potential negative effects. By establishing an inclusive, interdisciplinary, and intersectoral pan-European network, the initiative will promote knowledge transfer, creation, and dissemination."
      },
      {
      title: "CTT Locker",
      timeframe: "2023-2025",
      grant: "€40.000",
      funding: "CTT",
      reference: "PTDC/123/456/2023",
      role: "Researcher",
      objective: "The project aims to comprehensively investigate ways to enhance the functionality of CTT lockers, focusing on innovative methods to improve user interaction and accessibility."
    },
    {
      title: "ATE - Aliança para a Transição Energética",
      timeframe: "2021-2025",
      grant: "€274.195.106,32",
      funding: "Plano de Recuperação e Resiliência (PRR) and European Union",
      reference: "02/C05-i01.02/2022.PC644914747-00000023",
      role: "Researcher",
      objective: "The Alliance for Energy Transition aims to enhance the competitiveness and resilience of companies in the energy sector by fostering the development of innovative and export-oriented products and solutions. Building on established technology and expertise in the sector, it positions Portugal as a leader in decarbonization and promotes an effective energy transition."
    },
    {
        title: "European Network for Gender Balance in Informatics (EUGAIN)",
        timeframe: "2020-2024",
        grant: "N/A",
        funding: "COST ACTION European Cooperation in Science & Technology",
        reference: "CA19222",
        role: "Management Comitte (WG3)",
        objective: "The main aim was to improve gender balance in Informatics through the creation and strengthening of a truly multi-cultural European network of academics working on the forefront of the efforts in their countries, institutions and research communities."
      },
      {
        title: "REV@CONSTRUCTION – Digital Construction Revolution",
        timeframe: "2020-2024",
        grant: "€4.699.767,62",
        funding: "ANI",
        reference: "POCI-01-0247-FEDER-046123",
        role: "Researcher",
        objective: "REV@CONSTRUCTION is a mobilizing, aggregating, and inclusive project for the AEC sector (Architecture, Engineering, and Construction), bringing together large companies, SMEs, and the scientific community to address current industry challenges and enhance productivity and competitiveness."
      },
  ];

  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Research Projects</h2>
      <ol className="list-decimal pl-5 space-y-2">
        {projects.map((project, index) => (
          <li key={index} className="text-gray-600 dark:text-gray-300">
            <div className="space-y-1 text-sm md:text-base">
              <h4 className="text-gray-900 dark:text-white">
              {project.timeframe}: <span className="font-semibold">{project.title}</span> 
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
              <div className="flex items-start">
                  <span className="font-medium mr-2">Reference:</span>
                  <span>{project.reference}</span>
                </div>
                
                <div className="flex items-start">
                  <span className="font-medium mr-2">Role:</span>
                  <span>{project.role}</span>
                </div>
                <div className="flex items-start">
                  <span className="font-medium mr-2">Funding:</span>
                  <span>{project.grant}</span>
                </div>
                <div className="flex items-start">
                  <span className="font-medium mr-2">Agency:</span>
                  <span>{project.funding}</span>
                </div>
              </div>
              <div>
                <span className="font-medium mt-1">Objective: </span>
                <span>{project.objective}</span>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default ProjectList;