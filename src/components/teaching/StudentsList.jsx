// src/components/teaching/StudentsList.jsx
import React from 'react';

const StudentsList = () => {
    const students = {
        current: [
            {
                name: "Donato Aveiro",
                level: "MSc in Bioinformatics",
                topic: "Machine Learning in Healthcare",
                year: "2024-present",
                institution: "FCUL",
                thesis: "Personalized Drug Recommendations via Deep Learning and NLP"
            },
            {
                name: "Luis Campanela",
                level: "MSc in Computer Science and Engineering",
                topic: "Machine Learning in Transport, Smart Cities",
                year: "2024-present",
                institution: "ISEL",
                thesis: "Implementação de Data Lake para Transportes de Contentores Marítimos"
            },
            {
                name: "Rafael Carvalho",
                level: "MSc in Computer Science and Engineering",
                topic: "Machine Learning in Healthcare",
                year: "2024-present",
                institution: "ISEL",
                thesis: "A Topic Modelling-Based Recommender System for Drugs Using User Experience Reviews [TopicDrugRec]"
            },
            {
                name: "João Cardoso",
                level: "MSc in Computer Science and Engineering",
                topic: "Machine Learning in Transport, Smart Cities",
                year: "2024-present",
                institution: "ISEL",
                thesis: "Improving Intermodal Transfers: A Data-Based Analysis"
            },
            {
                name: "Tomás Cardoso",
                level: "MSc in Computer Science and Engineering",
                topic: "Machine Learning in Transport, Smart Cities",
                year: "2024-present",
                institution: "ISEL",
                thesis: "Factors Affecting Commercial Bus Speed: A Machine Learning-Based Analysis"
            },
            {
                name: "João Cravo",
                level: "MSc in Computer Science and Engineering",
                topic: "Machine Learning in Transports, Smart Cities",
                year: "2024-present",
                institution: "ISEL",
                thesis: "Data-Driven Optimisation of Multimodal Public Transport System"
            },
            {
                name: "Fábio Rainho",
                level: "MSc in Computer Science and Engineering",
                topic: "Machine Learning in Healthcare",
                year: "2024-present",
                institution: "ISEL",
                thesis: "Sistema de Recomendação baseado na aprendizagem automática para investigação em doenças respiratórias (BreatheEase Scholar)"
            },
            {
                name: "Filipe Silveira",
                level: "MSc in Computer Science and Engineering",
                topic: "Machine Learning in Smart Home",
                year: "2024-present",
                institution: "UAveiro",
                thesis: "User Interface for Radar-Based Smart Automation Systems in Smart-Home Environments"
            },
            // Add more current students
        ],
        past: [
            {
                name: "Ana Sofia Simões Pinto",
                level: "MSc in Computer Science and Engineering",
                topic: "Recommender System, Drugs review, ML, NLP",
                year: "2023-2024",
                institution: "ISEL",
                thesis: "Drug Recommendation System Based on Symptoms and User Sentiment Analysis [DRecSys-SUSA]",
            },
            {
                name: "Diogo Amorim",
                level: "MSc in Computer Science and Engineering",
                topic: "Big Data, Python, Feature Selection",
                year: "2023-2024",
                institution: "ISEL",
                thesis: "Biblioteca Python para seleção de características em grandes dados",
            },
            {
                name: "Samuel Sampaio Costa",
                level: "MSc in Computer Science and Engineering",
                topic: "AI, KANs, Human-Activity Recognition",
                year: "2023-2024",
                institution: "ISEL",
                thesis: "Real-time Human Activity Recognition with KANs",
            },
            {
                name: "Marta Ferreira",
                level: "MSc in Computer Science and Engineering",
                topic: "Visualization, Dashboard, ML",
                year: "2023-2024",
                institution: "ISEL",
                thesis: "Study and Modeling of CTT Locker Operation",
            },
            {
                name: "Renato Marcelo",
                level: "MSc in Computer Science and Engineering",
                topic: "Recommender System, Patient Leaftlet Information, ML",
                year: "2022-2023",
                institution: "ISEL",
                thesis: "Med2Care - Recomendação de novas terapêuticas",
            },
            {
                name: "Artur Queirós",
                level: "MSc in Electronics and Telecommunications Engineering",
                topic: "Recommender System, Patient Leaftlet Information, ML",
                year: "2022-2023",
                institution: "ISEL",
                thesis: "Future railway mobile communication system automated planning",
            },
            {
                name: "Pedro Santos",
                level: "MSc in Computer Science and Engineering",
                topic: "Recommender System, AI, ML",
                year: "2021-2022",
                institution: "ISEL",
                thesis: "Aprendizagem automática aplicada à gestão de ativos",
            },
            {
                name: "Nuno Gomes",
                level: "MSc in Computer Science and Engineering",
                topic: "AI, ML, Mental Health, App ",
                year: "2021-2022",
                institution: "ISEL",
                thesis: "Anxolotl - an anxiety companion app",
            },
            {
                name: "João Vaz",
                level: "MSc in Computer Science and Engineering",
                topic: "AI, ML, Visual Analytics, App ",
                year: "2020-2021",
                institution: "ISEL",
                thesis: "Indicador de tráfego: descoberta de padrões na cidade de Lisboa",
            },
            {
                name: "Henrique Gomes",
                level: "MSc in Computer Science and Engineering",
                topic: "AI, ML, R, Big Data",
                year: "2020-2021",
                institution: "ISEL",
                thesis: "Desenvolvimento de um package em R para ensemble feature ranking",
            },
            {
                name: "Rúben Taborda",
                level: "MSc in Computer Science and Engineering",
                topic: "AI, ML, R, Big Data, Smart Cities",
                year: "2019-2021",
                institution: "ISEL",
                thesis: "Estudo Preditivo da Evolução CO2 na cidade de Lisboa",
            },
            {
                name: "Rui Reis",
                level: "MSc in Computer Science and Engineering",
                topic: "AI, ML, R",
                year: "2018-2019",
                institution: "ISEL",
                thesis: "Modelo de recuperação da vegetação após ocorrência de incêndios florestais baseado em imagens de satélite",
            },
            {
                name: "José Paulo Nunes",
                level: "MSc in Computer Science and Engineering",
                topic: "Data mining, Microwave, MatLab",
                year: "2017-2019",
                institution: "ISEL",
                thesis: "Modelo de data mining em imagem por microondas",
            },
            {
                name: "Pedro Lopes",
                level: "MSc in Electronics and Telecommunications Engineering",
                topic: "Microwave Image, Matlab, Cancer simulation",
                year: "2017-2018",
                institution: "ISEL",
                thesis: "Deteção do Cancro da Mama por MWI",
            },
            {
                name: "João Junceira",
                level: "MSc in Computer Science and Engineering",
                topic: "R, Big Data, ML",
                year: "2016-2017",
                institution: "ISEL",
                thesis: "Análise de soluções para Big Data Mining",
            },
            {
                name: "Vasile Grigoras",
                level: "MSc in Computer Science and Engineering",
                topic: "R, Big Data, ML",
                year: "2014-2015",
                institution: "ISEL",
                thesis: "ALSMon - Sistema para monitorizar ALS",
            },
            {
                name: "Romil Kiritcumar",
                level: "MSc in Electronics and Telecommunications Engineering",
                topic: "R, Big Data, ML",
                year: "2014-2015",
                institution: "ISEL",
                thesis: "ALS-Sens: Sistema de Aquisição e Processamento de Electromiogramas para Pacientes com ALS",
            },
            {
                name: "Vírginia Ramalho",
                level: "MSc in Computer Science and Engineering",
                topic: "R, Data mining, ML",
                year: "2012-2013",
                institution: "ISEL",
                thesis: "Modelo de data mining para detecção de embolias pulmonares em exames de rastreio",
            },
            {
                name: "Vítor Santos",
                level: "MSc in Computer Science and Engineering",
                topic: "R, Data mining, ML",
                year: "2012-2013",
                institution: "ISEL",
                thesis: "Modelo de data mining para detecção de de tumores em exames de rastreio",
            },
            // Add more past students
        ]
    };

    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Students</h2>

            {/* Current Students - Keeping detailed format */}
            <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Current Students
                </h3>
                <div className="space-y-4">
                    {students.current.map((student, index) => (
                        <div key={index} className="border-l-4 border-blue-500 pl-4">
                            <p className="font-semibold text-gray-900 dark:text-white">
                                {student.name}
                            </p>
                            <p className="text-gray-600 dark:text-gray-300">
                                {student.level} Student • {student.institution}
                            </p>
                            <p className="text-gray-500 dark:text-gray-400">
                                {student.thesis} ({student.year})
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Past Students - Compact format */}
            <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Past Students
                </h3>
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                    {students.past.map((student, index) => (
                        <div key={index} className="py-2">
                            <div className="flex flex-wrap items-baseline gap-x-2">
                                <span className="font-medium text-gray-900 dark:text-white">
                                    {student.name}
                                </span>
                                <span className="text-gray-600 dark:text-gray-300">
                                    ({student.level}, {student.institution}, {student.year})
                                </span>
                                <span className="text-gray-500 dark:text-gray-400 italic">
                                    {student.title}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StudentsList;