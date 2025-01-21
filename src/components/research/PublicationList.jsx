// src/components/PublicationList.jsx
import React, { useState } from 'react';

const PublicationList = () => {
    const [copiedIndex, setCopiedIndex] = useState(null);

    const copyBibtex = (bibtex, index) => {
        navigator.clipboard.writeText(bibtex);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    const getPublicationType = (type) => {
        switch (type) {
            case 'journal':
                return {
                    label: 'Journal',
                    className: 'bg-blue-800 text-blue-100 dark:bg-blue-700 dark:text-blue-300'
                };
            case 'conference':
                return {
                    label: 'Conference',
                    className: 'bg-teal-600 text-teal-100 dark:bg-teal-600 dark:text-teal-200'
                };
            case 'chapter':
                return {
                    label: 'Book Chapter',
                    className: 'bg-yellow-600 text-yellow-100 dark:bg-yellow-600 dark:text-yellow-200'
                };
            default:
                return {
                    label: 'Publication',
                    className: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                };
        }
    };

    const publications = [
        {
            title: "Survey on Recommender Systems for Biomedical Items in Life and Health Sciences",
            authors: "Matilde Pato, Márcia Barros, Francisco M Couto",
            venue: "ACM Computing Surveys 56(6)",
            type: "journal",
            year: "2024",
            doi: "10.1145/3639047",
            bibtex: `
          @article{10.1145/3639047,
            author = {Pato, Matilde and Barros, Márcia and Couto, Francisco M.},
            title = {Survey on Recommender Systems for Biomedical Items in Life and Health Sciences},
            year = {2024},
            issue_date = {June 2024},
            publisher = {Association for Computing Machinery},
            address = {New York, NY, USA},
            volume = {56},
            number = {6},
            issn = {0360-0300},
            url = {https://doi.org/10.1145/3639047},
            doi = {10.1145/3639047},
            abstract = {The generation of biomedical data is of such magnitude that its retrieval and analysis have posed several challenges. A survey of recommender system (RS) approaches in biomedical fields is provided in this analysis, along with a discussion of existing challenges related to large-scale biomedical information retrieval systems. We collect original studies, identify entities and models, and discuss how knowledge graphs (KGs) can improve results. As a result, most of the papers used model-based collaborative filtering algorithms, most of the available datasets did not follow the standard format <&nbsp;user, item, rating&nbsp;>, and regarding qualitative evaluations of RSs use mainly classification metrics. Finally, we have assembled and coded a unique dataset of 60 papers — Sur-RS4BioT, available for download at DOI:10.34740/kaggle/ds/2346894},
            journal = {ACM Comput. Surv.},
            month = feb,
            articleno = {149},
            numpages = {32},
            keywords = {Recommender systems, biomedical informatics, information retrieval, knowledge graphs, reproducibility datasets}
            }
        }`
        },
        {
            title: "How NLP and Visual Analytics Can Improve Asset Management",
            authors: "Pedro Santos, Matilde PM Pato, Nuno Datia, José Sobral",
            venue: "Artificial Intelligence and Visualization: Advancing Visual Knowledge Discovery",
            publisher: "Springer Nature",
            type: "chapter",
            year: "2024",
            doi: "10.1007/978-3-031-46549-9_15",
            bibtex: `
          @Inbook{Santos2024,
            author="Santos, Pedro
            and Pato, Matilde P. M.
            and Datia, Nuno
            and Sobral, José",
            editor="Kovalerchuk, Boris
            and Nazemi, Kawa
            and Andonie, R{\u{a}}zvan
            and Datia, Nuno
            and Banissi, Ebad",
            title="How NLP and Visual Analytics Can Improve Asset Management",
            bookTitle="Artificial Intelligence and Visualization: Advancing Visual Knowledge Discovery",
            year="2024",
            publisher="Springer Nature Switzerland",
            address="Cham",
            pages="423--441",
            abstract="In Asset Management, maintenance work is mainly reported through Work Orders (WO), which are technical documents that specify the asset to be repaired. These works are described in free text, with no imposed structure or fixed vocabulary, which makes them difficult to analyse automatically. This challenge becomes more significant as the number and variety of assets increase. This study presents the use of Natural Language Processing (NLP) to automate the processing of work order descriptions. NLP algorithms can summarise large amounts of text into concise summaries. To understand the text corpus and effectively communicate the results to understand the underlying semantic patterns better, two well-known Word Embeddings (WE) models, Word2Vec and Fasttext, capture the semantic and syntactic relationships between words. By reducing the dimensions of the encoded vectors, it becomes possible to explore a 3D vector space through vector visualisation interactively. The results show that the Fasttext approach outperforms Word2Vec in capturing semantic information. This allows the development of machine learning algorithms to summarise a work order using a small set of predefined words.",
            isbn="978-3-031-46549-9",
            doi="10.1007/978-3-031-46549-9_15",
            url="https://doi.org/10.1007/978-3-031-46549-9_15"
            }
        }`
        },
        {
            title: "Anxolotl, an Anxiety Companion App Stress Detection",
            authors: "Nuno Gomes, Matilde Pato, Pedro Santos, André Lourenço, Lourenço Rodrigues",
            venue: "Human Activity and Behavior Analysis",
            publisher: "CRC Press",
            type: "chapter",
            year: "2024",
            doi: "10.1007/978-3-031-46549-9_15",
            bibtex: `
          @Inbook{Gomes2024-Anxolotl,
            author="Nuno Gomes, Matilde Pato, Pedro Santos, André Lourenço, Lourenço Rodrigues",
            editor="Md Atiqur Rahman Ahad, Sozo Inoue, Guillaume Lopez, Tahera Hossain",
            title="Anxolotl, an Anxiety Companion App Stress Detection",
            bookTitle="Human Activity and Behavior Analysis",
            year="2024",
            publisher="CRC Press",
            address="Cham",
            abstract="Stress has a great effect on people’s lives that can not be understated. While it can be good, since it helps humans to adapt to new and different situations, it can also be harmful when not dealt with properly, leading to chronic stress. The objective of this paper is developing a stress monitoring solution, that can be used in real life, while being able to tackle this challenge in a positive way. The SMILE data set was provided to team Anxolotl, and all it was needed was to develop a robust model. We developed a supervised learning model for classification in Python, presenting the final results of 64.1% in accuracy and a f1-score of 54.96%. The resulting solution stood the robustness test, presenting low variation between runs, which was a major point for it’s possible integration in the Anxolotl app in the future. The code is available at https://github.com/matpato/CfP-Workshop-and-Challenge-Wellbeing.git",
            isbn="9781003371540",
            doi="10.1201/9781003371540-10",
            url="https://doi.org/10.1201/9781003371540-10"
            }
        }`
        },
        {
            title: "Enhancing Drug Reviews Insights through Exploratory Data Analysis and Sentiment Analysis",
            authors: "Ana Sofia Pinto, Matilde Pato, Nuno Datia",
            venue: "2024 28th International Conference Information Visualisation (IV)",
            type: "conference",
            year: "2024",
            doi: "10.1109/IV64223.2024.00042",
            bibtex: `
          @INPROCEEDINGS{10714287,
            author={Pinto, Ana Sofia and Pato, Matilde and Datia, Nuno},
            booktitle={2024 28th International Conference Information Visualisation (IV)}, 
            title={Enhancing Drug Reviews Insights through Exploratory Data Analysis and Sentiment Analysis}, 
            year={2024},
            volume={},
            number={},
            pages={190-195},
            keywords={Drugs;Sentiment analysis;Data analysis;Reviews;User-generated content;Data visualization;Medical services;NLP;Sentiment Analysis;Exploratory Data Analysis;Drug Recommendation System;Healthcare Support},
            doi={10.1109/IV64223.2024.00042}}
        }`
        },
        {
            title: "Understanding Portuguese Users of Parcel Locker Services",
            authors: "Marta Ferreira, Matilde Pato, António Serrador, Rogério Campos-Rebelo, Nuno Datia, Jose Simão, Pedro Sampaio",
            venue: "2024 28th International Conference Information Visualisation (IV)",
            type: "conference",
            year: "2024",
            doi: "10.1109/IV64223.2024.00018",
            bibtex: `
          @INPROCEEDINGS{10714302,
            author={Ferreira, Marta and Pato, Matilde and Serrador, António and Campos-Rebelo, Rogério and Datia, Nuno and Simão, Jose and Sampaio, Pedro},
            booktitle={2024 28th International Conference Information Visualisation (IV)}, 
            title={Understanding Portuguese Users of Parcel Locker Services}, 
            year={2024},
            volume={},
            number={},
            pages={45-51},
            keywords={Visualization;Machine learning algorithms;Pandemics;Education;Employment;Machine learning;Market research;Robustness;Electronic commerce;Population density;Visual data-analytics;locker service case study;decision-making;locker load;sociodemographic factors},
            doi={10.1109/IV64223.2024.00018}}
        }`
        },
        {
            title: "Explainable Feature Ranking Using Interactive Dashboards",
            authors: "Diogo Amorim, Matilde Pato, Nuno Datia",
            venue: "2024 28th International Conference Information Visualisation (IV)",
            type: "conference",
            year: "2024",
            doi: "10.1109/IV64223.2024.00050",
            bibtex: `
          @INPROCEEDINGS{10714295,
            author={Amorim, Diogo and Pato, Matilde and Datia, Nuno},
            booktitle={2024 28th International Conference Information Visualisation (IV)}, 
            title={Explainable Feature Ranking Using Interactive Dashboards}, 
            year={2024},
            volume={},
            number={},
            pages={1-6},
            keywords={Measurement;Visualization;Machine learning algorithms;Heuristic algorithms;Refining;Decision making;Machine learning;Feature extraction;Complexity theory;Usability;Ensemble Learning;EEFR;Feature Ranking;Explainability;Interactive Dashboard},
            doi={10.1109/IV64223.2024.00050}}
        }`
        },
        {
            title: "An empirical study on the application of KANs for classification",
            authors: "Samuel Costa, Matilde Pato, Nuno Datia",
            venue: "2024 The 8th International Conference on Advances in Artificial Intelligence (ICCAI)",
            type: "conference",
            year: "2024",
            doi: "",
            bibtex: `
        }`
        },
        {
            title: "Evaluating the performance of algorithms in axillary microwave imaging towards improved breast cancer staging",
            authors: "Matilde Pato, Ricardo Eleutério, Raquel C. Conceição, Daniela Godinho",
            venue: "Sensors 23 (3)",
            type: "journal",
            year: "2023",
            doi: "10.3390/s23031496",
            bibtex: `
          @article{pato2023evaluating,
            title={Evaluating the performance of algorithms in axillary microwave imaging towards improved breast cancer staging},
            author={Pato, Matilde and Eleutério, Ricardo and Conceição, Raquel C and Godinho, Daniela M},
            journal={Sensors},
            volume={23},
            number={3},
            pages={1496},
            year={2023},
            publisher={MDPI}
            }
        }`
        },
        {
            title: "A Survey on Wearable Sensors for Mental Health Monitoring",
            authors: "Nuno Gomes, Matilde Pato, André Ribeiro Lourenço, Nuno Datia",
            venue: "Sensors 23 (3)",
            type: "journal",
            year: "2023",
            doi: "10.3390/s23031330",
            bibtex: `
          @article{gomes2023survey,
            title={A survey on wearable sensors for mental health monitoring},
            author={Gomes, Nuno and Pato, Matilde and Lourenco, Andre Ribeiro and Datia, Nuno},
            journal={Sensors},
            volume={23},
            number={3},
            pages={1330},
            year={2023},
            publisher={MDPI}
            }
        }`
        },
        {
            title: "Data Visualisation on a Mobile App for Real-Time Mental Health Monitoring",
            authors: "Nuno Gomes, Matilde Pato, André Lourenço, Renato Marcelo, Pedro Santos, Nuno Datia",
            venue: "2023 27th International Conference Information Visualisation (IV)",
            publisher: "IEEE",
            type: "conference",
            year: "2023",
            doi: "10.1109/IV60283.2023.00073",
            bibtex: `
          @INPROCEEDINGS{10303455,
            author={Gomes, Nuno and Pato, Matilde and Lourenço, André and Marcelo, Renato and Santos, Pedro and Datia, Nuno},
            booktitle={2023 27th International Conference Information Visualisation (IV)}, 
            title={Data Visualisation on a Mobile App for Real-Time Mental Health Monitoring}, 
            year={2023},
            volume={},
            number={},
            pages={396-402},
            keywords={Wearable computers;Anxiety disorders;Data visualization;Mental health;Tutorials;Real-time systems;Mobile applications;Data visualisation;Machine Learning;Telemon-itoring;Mental Health},
            doi={10.1109/IV60283.2023.00073}}
        }`
        },
        {
            title: "NLP for Enterprise Asset Management: An Emerging Paradigm",
            authors: "Pedro Santos, Nuno Datia, Matilde Pato, José Sobral, Nuno Gomes, Noel Leitão",
            venue: "2023 27th International Conference Information Visualisation (IV)",
            publisher: "IEEE",
            type: "conference",
            year: "2023",
            doi: "10.1109/IV60283.2023.00049",
            bibtex: `
          @INPROCEEDINGS{10303525,
            author={Santos, Pedro and Datia, Nuno and Pato, Matilde and Sobral, José and Gomes, Nuno and Leitão, Noel and Ferreira, Manuel R.},
            booktitle={2023 27th International Conference Information Visualisation (IV)}, 
            title={NLP for Enterprise Asset Management: An Emerging Paradigm}, 
            year={2023},
            volume={},
            number={},
            pages={238-243},
            keywords={Automation;Annotations;Force;Manuals;Maintenance engineering;Natural language processing;Human in the loop;NLP;Asset Management;KB curation;Interactive interface;Industry 4.0},
            doi={10.1109/IV60283.2023.00049}}
        }`
        },
        {
            title: "Comparing word embeddings through visualisation",
            authors: "Pedro Santos, Nuno Datia, Matilde Pato, José Sobral",
            venue: "2022 26th International Conference Information Visualisation (IV)",
            type: "conference",
            year: "2022",
            doi: "10.1109/IV56949.2022.00024",
            bibtex: `
          @INPROCEEDINGS{10017461,
            author={Santos, Pedro and Datia, Nuno and Pato, Matilde and Sobral, José},
            booktitle={2022 26th International Conference Information Visualisation (IV)}, 
            title={Comparing Word Embeddings through Visualisation}, 
            year={2022},
            volume={},
            number={},
            pages={91-97},
            keywords={Visualization;Vocabulary;Shape;Semantics;Neural networks;Writing;Maintenance engineering;NLP;Word Embeddings;Visualisation;Asset Management},
            doi={10.1109/IV56949.2022.00024}}
        }`
        },
    ];

    return (
        // <section>
        //   <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Selected Publications</h2>
        //   <div className="space-y-6">
        //     {publications.map((pub, index) => (
        //       <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm transition-colors duration-200">
        //         <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{pub.title}</h3>
        //         <p className="text-gray-600 dark:text-gray-300 mt-2">{pub.authors}</p>
        //         <p className="text-gray-500 dark:text-gray-400 mt-1">
        //           {pub.journal} ({pub.year})
        //         </p>
        //         <div className="flex items-center mt-2">
        //           <a 
        //             href={`https://doi.org/${pub.doi}`} 
        //             className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
        //             target="_blank"
        //             rel="noopener noreferrer"
        //           >
        //             DOI: {pub.doi}
        //           </a>
        //         </div>
        //         <div className="mt-3">
        //           <button
        //             onClick={() => copyBibtex(pub.bibtex, index)}
        //             className="inline-flex items-center text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 px-3 py-1 rounded-md transition-colors duration-200"
        //           >
        //             {copiedIndex === index ? (
        //               "Copied BibTeX!"
        //             ) : (
        //               "Copy BibTeX"
        //             )}
        //           </button>
        //         </div>
        //       </div>
        //     ))}
        //   </div>
        // </section>
        <section>
            <h2 className="text-1xl font-bold text-gray-900 dark:text-white mb-2">Selected Publications</h2>
            <ul className="space-y-1 list-disc pl-5">
                {publications
                    .sort((a, b) => b.year - a.year) // Sort by year, newest first
                    .map((pub, index) => {
                        const pubType = getPublicationType(pub.type);
                        return (
                            <li key={index} className="text-gray-600 dark:text-gray-300">
                                <div>
                                    <span>{pub.authors} ({pub.year}). <span className="font-bold">{pub.title}</span>. </span>
                                    <span className="italic">
                                        {pub.type === 'chapter'
                                            ? `In: ${pub.venue} (${pub.publisher})`
                                            : pub.type === 'journal'
                                                ? pub.venue
                                                : `In: ${pub.venue}`}
                                    </span>
                                    <span>. </span>
                                    <div className="space-y-1 text-sm md:text-base">
                                        <a
                                            href={`https://doi.org/${pub.doi}`}
                                            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            [DOI]
                                        </a>
                                        <button
                                            onClick={() => copyBibtex(pub.bibtex, index)}
                                            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                                        >
                                            {copiedIndex === index ? "[BibTeX copied!]" : "[BibTeX]"}
                                        </button>
                                        <span className={`text-xs px-2 py-1 rounded ${pubType.className}`}>
                                            {pubType.label}
                                        </span>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
            </ul>
        </section>
    );
};

export default PublicationList;