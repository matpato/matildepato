// src/components/teaching/CoursesList.jsx
import React from 'react';

const CoursesList = () => {
  const courses = [
    {
      name: "Introduction to Information System (ISI)",
      code: "COURSE4168",
      level: "BSc",
      institution: "ISEL",
      department: "DEETC",
      semester: "Fall 2024/2025",
      description: "Brief description of the course content and objectives"
    },
    {
        name: "Information System (SisInf)",
        code: "COURSE4175",
        level: "BSc",
        institution: "ISEL",
        department: "DEETC",
        semester: "Spring 2024/2025",
        description: "Brief description of the course content and objectives"
      },
      {
        name: "Natural Processing Language (NLP)",
        code: "COURSE123",
        level: "MSc",
        institution: "ISEL",
        department: "DEETC",
        semester: "Fall 2024/2025",
        description: "Brief description of the course content and objectives"
      },
      {
        name: "Big Data Engineering (BDE)",
        code: "COURSE123",
        level: "MSc",
        institution: "ISEL",
        department: "DEETC",
        semester: "Spring 2024/2025",
        description: "Brief description of the course content and objectives"
      },
    // Add more courses
  ];

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Teaching</h2>
      <div className="grid gap-6">
        {courses.map((course, index) => (
          <div key={index} className="border-l-4 border-indigo-500 pl-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {course.name} ({course.code})
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {course.level} • {course.department} • {course.institution}
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              {course.semester}
            </p>
            {/* <p className="text-gray-600 dark:text-gray-300 mt-2">
              {course.description}
            </p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesList;