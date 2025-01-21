import React from 'react';

const AcademicLinks = () => {
    return (
        <div className="flex flex-col space-y-1">
            <a href="http://orcid.org/0000-0001-8976-7651" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                <i className="ai ai-orcid ai-2x"></i>
                <span className="ml-2">0000-0001-8976-7651</span>
            </a>
            {/* <a href="https://www.cienciavitae.pt/portal/FA11-8E2D-DC05" 
            className="text-gray-600 hover:text-gray-800 flex items-center">
            <i className="ai ai-ciencia-vitae ai-2x"></i>
            <span className="ml-2">FA11-8E2D-DC05</span>
            </a> */}
            <a href="http://scholar.google.pt/citations?user=xtCBV-wAAAAJ&hl=pt-PT" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                <i className="ai ai-google-scholar ai-2x"></i>
                <span className="ml-2">Google Scholar</span>
            </a>
            <a href="https://www.researchgate.net/profile/Matilde_Pato" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                <i className="ai ai-researchgate ai-2x"></i>
                <span className="ml-2">ResearchGate</span>
            </a>
            {/* <a href="https://www.scopus.com/authid/detail.uri?authorId=16550896700" className="text-gray-600 hover:text-gray-800 flex items-center">
            <i className="ai ai-scopus ai-2x"></i>
            <span className="ml-2">16550896700</span>
            </a> 
            <a href="https://www.webofscience.com/wos/author/record/AAM-8381-2020" className="text-gray-600 hover:text-gray-800 flex items-center">
            <i className="ai ai-researcherid ai-2x"></i>
            <span className="ml-2">AAM-8381-2020</span>
            </a>
            <a href="http://pt.linkedin.com/in/matildepato" className="text-gray-600 hover:text-gray-800 flex items-center">
            <i className="fa fa-linkedin ai-2x"></i>
            <span className="ml-2">Matilde</span>
            </a>*/}
        </div>
    );
};

export default AcademicLinks;