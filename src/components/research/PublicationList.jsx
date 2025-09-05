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
        // Helper function to get single type info
        const getSingleTypeInfo = (singleType) => {
            switch (singleType) {
            case 'journal':
                return {
                label: 'Journal',
                className: 'bg-blue-800 text-blue-100 dark:bg-blue-700 dark:text-blue-300'
                };
            case 'conference':
                return {
                label: 'Conference', 
                className: 'bg-green-800 text-green-100'
                };
            case 'poster':
                return {
                label: 'Poster',
                className: 'bg-green-400 text-green-900'
                };
            case 'chapter':
                return {
                label: 'Book Chapter',
                className: 'bg-purple-400 text-purple-900'
                };
            case 'tutorial':
                return {
                label: 'Tutorial',
                className: 'bg-gray-100 text-gray-800'
                };
            default:
                return {
                label: 'Publication',
                className: 'bg-gray-100 text-gray-800'
                };
            }
        };

        // Handle array of types
        if (Array.isArray(type)) {
            return type.map(getSingleTypeInfo);
        }
        
        // Handle single type
        return getSingleTypeInfo(type);
        };

    const publications = [
        {
            title: "From Messy Data to Medical Insights: Creating Knowledge Graphs for Drug Repurposing",
            authors: "Matilde Pato, Ana Carolina Pereira, Nuno Datia",
            venue: "womENcourage™ 2025 12th ACM Celebration of Women in Computing",
            type: "tutorial",
            year: "2025",
            note: "(accepted)"
        },
        {
            title: "Knowledge Graphs as Educational Tools in Biomedical Education",
            authors: "Ana Carolina Pereira, Matilde Pato, Nuno Datia",
            venue: "womENcourage™ 2025 12th ACM Celebration of Women in Computing",
            year: "2025",
            note: "(accepted)",
            type: ["conference", "poster"] 
        },
        {
            title: "Mapping Drug Interactions and Therapeutic Clusters through Knowledge Graph Visualization",
            authors: "Ana Carolina Pereira, Matilde Pato, Nuno Datia",
            venue: "29th International Conference Information Visualisation (IV25)",
            type: "conference",
            year: "2025",
            doi: "10.1109/IV68685.2025.00074",
            note: "Best Paper",
            bibtex: `
          @INPROCEEDINGS{10714302,
            author={Pereira, Ana Carolina and Pato, Matilde and Datia, Nuno},
            booktitle={2025 29th International Conference Information Visualisation (IV)}, 
            title={Mapping Drug Interactions and Therapeutic Clusters through Knowledge Graph Visualization}, 
            year={2025},
            volume={},
            number={},
            pages={},
            keywords={Visualization;Machine learning algorithms;Visual data-analytics},
            doi={10.1109/IV68685.2025.00074}}`
        },
        {
            title: "Why do women pursue a PhD in Computer Science?",
            authors: "Erika Ábrahám, Miguel Goulão, Milena Vujovevic Janicic, Sarah Jane Delany, Amal Mersni, Oleksandra Yeremenko, Karima Boudaoud, Caroline Oehlhorn, Ute Schmid, Christina Büsing, Helen Bolke-Hermanns, Kaja Köhnle, Matilde Pato, Deniz Sunar Cerci, Larissa Schmid",
            venue: "The Journal of Systems & Software",
            type: "journal",
            year: "2025",
            doi: "10.1016/j.jss.2025.112586",
            bibtex: `
          @article{ABRAHAM2026112586,
            title = {Why do women pursue a Ph.D. in Computer Science?},
            journal = {Journal of Systems and Software},
            volume = {231},
            pages = {112586},
            year = {2026},
            issn = {0164-1212},
            doi = {https://doi.org/10.1016/j.jss.2025.112586},
            url = {https://www.sciencedirect.com/science/article/pii/S0164121225002559},
            author = {Erika Ábrahám and Miguel Goulão and Milena Vujošević Janičić and Sarah Jane Delany and Amal Mersni and Oleksandra Yeremenko and Özge Büyükdağlı and Karima Boudaoud and Caroline Oehlhorn and Ute Schmid and Christina Büsing and Helen Bolke-Hermanns and Kaja Köhnle and Matilde Pato and Deniz Sunar Cerci and Larissa Schmid},
            keywords = {Computer science education, Female under-representation, Gender, Ph.D. career path, Ph.D. challenges and opportunities},
            abstract = {Context:
            Computer science, even now, attracts a small number of women, and the proportion of women in the field decreases through advancing career stages. Consequently, few women progress to Ph.D. studies in computer science after completing master’s studies. Empowering women at this stage in their careers is essential, not just for equality reasons, but to unlock untapped potential for society, industry and academia.
            Objective:
            This paper aims to identify students’ career assumptions and information related to Ph.D. studies focused on gender-based differences. We propose a program to inform female master students about Ph.D. studies that explains the process, clarifies misconceptions, and alleviates concerns.
            Method:
            An extensive survey was conducted to identify factors that encourage and discourage students from undertaking Ph.D. studies. The analysis identified statistically significant differences between those who undertook Ph.D. studies and those who did not, as well as statistically significant gender differences. A catalogue of questions to initiate discussions with potential Ph.D. students which allowed them to explore these factors was developed. These were structured into a Women’s Career Lunch program where students can explore and discuss the benefits of Ph.D. study.
            Results:
            Encouraging factors towards Ph.D. study include interest and confidence in research arising from a research involvement during earlier studies; enthusiasm for and self-confidence in computer science in addition to an interest in an academic career; encouragement from external sources; and a positive perception towards Ph.D. studies which can involve achieving personal goals. Discouraging factors include uncertainty and lack of knowledge of the Ph.D. process, a perception of lower job flexibility, and the requirement for long-term commitment. Gender differences highlighted that female students who pursue a Ph.D. have less confidence in their technical skills than males but a higher preference for interdisciplinary areas. Female students are less inclined than males to perceive the industry as offering better job opportunities and more flexible career paths than academia.
            Conclusions:
            The insights collected from the survey facilitated the development of a questions catalogue structured into the Women Career Lunch program to help students make a more informed decision concerning whether they should pursue a Ph.D. in computer science. Localised versions of this program, in 8 languages, were created to support its adoption in different countries and assist in mitigating the female under-representation challenge.}
                    }`
        },
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
            title: "Best Practices From Bachelor/Master Studies to Ph. D",
            authors: "Amal Mersni, Caroline Oehlhorn, Erika Abraham, Karima Boudaoud, Larissa Schmid, Matilde Pato, Miguel Goulao, Milena Vujošević Janičić, Oleksandra Yeremenko, Ozge Buyukdaglıand Sarah Jane Delany, Ute Schmid",
            venue: "EUGAIN, Informatics Europe, COST",
            type: "journal",
            year: "2024",
            bibtex: `
          @article{mersni2024best,
            title={Best Practices From Bachelor/Master Studies to Ph. D},
            author={Mersni, Amal and Oehlhorn, Caroline and Abraham, Erika and Boudaoud, Karima and Schmid, Larissa and Pato, Matilde and Goulao, Miguel and Vujo{\v{s}}evi{\'c} Jani{\v{c}}i{\'c}, Milena and Yeremenko, Oleksandra and Delany, Ozge Buyukdagl{\i}and Sarah Jane and others},
            year={2024},
            publisher={EUGAIN, Informatics Europe, COST}
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
            doi: "10.1145/3704137.37041",
            bibtex: `@inproceedings{costa2024empirical,
            title={An empirical study on the application of KANs for classification},
            author={Costa, Samuel Sampaio and Pato, Matilde and Datia, Nuno},
            booktitle={Proceedings of the 2024 8th International Conference on Advances in Artificial Intelligence},
            pages={308--314},
            year={2024}}`
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
                        console.log('pubType for', pub.title, ':', pubType);
                        return (
                            <li key={index} className="text-gray-600 dark:text-gray-300">
                                <div>
                                    <span>{pub.authors} ({pub.year}). <span className="font-bold">{pub.title}</span>. </span>
                                    <span className="italic">
                                        {(() => {
                                            // Get the first/primary type if it's an array, otherwise use the single type
                                            const primaryType = Array.isArray(pub.type) ? pub.type[0] : pub.type;
                                            if (primaryType === 'chapter') {
                                                return `In: ${pub.venue} (${pub.publisher})`;
                                            } else if (primaryType === 'journal') {
                                                return pub.venue;
                                            } else {
                                                return `In: ${pub.venue}`;
                                            }
                                            })()}
                                    </span>
                                    <span>. </span>
                                    {pub.note && <span className="text-orange-600 dark:text-orange-400 font-medium">{pub.note}</span>}
                                    <div className="space-y-1 text-sm md:text-base">
                                    
                                    {pub.doi && (
                                    <a href={`https://doi.org/${pub.doi}`}
                                        className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        [DOI]
                                    </a>
                                    )}
                                    
                                    {pub.bibtex && (
                                    <button
                                        onClick={() => copyBibtex(pub.bibtex, index)}
                                        className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                                    >
                                        {copiedIndex === index ? "[BibTeX copied!]" : "[BibTeX]"}
                                    </button>
                                    )}
                                    {Array.isArray(pubType) ? 
                                        pubType.map((type, i) => (
                                            <span 
                                            key={i} 
                                            className={`${type.className} mr-1`}
                                            >
                                            {type.label}
                                            </span>
                                        ))
                                        :
                                        <span 
                                            className={pubType.className}
                                        >
                                            {pubType.label}
                                        </span>
                                        }
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