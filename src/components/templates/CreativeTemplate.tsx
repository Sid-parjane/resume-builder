import React from 'react';
import { ResumeData } from '../../types';

interface TemplateProps {
  data: ResumeData;
}

export const CreativeTemplate: React.FC<TemplateProps> = ({ data }) => {
  return (
    <div className="p-8 bg-gradient-to-br from-purple-50 to-blue-50 shadow-lg rounded-lg max-w-4xl mx-auto">
      <div className="relative mb-12 pb-4">
        <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full opacity-10" />
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
          {data.personalInfo.fullName}
        </h1>
        <div className="mt-4 flex flex-wrap gap-4 text-gray-600">
          {data.personalInfo.email && (
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-purple-500 rounded-full" />
              {data.personalInfo.email}
            </span>
          )}
          {data.personalInfo.phone && (
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-blue-500 rounded-full" />
              {data.personalInfo.phone}
            </span>
          )}
          {data.personalInfo.location && (
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-indigo-500 rounded-full" />
              {data.personalInfo.location}
            </span>
          )}
        </div>
      </div>

      {data.personalInfo.summary && (
        <div className="mb-12">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed">
              {data.personalInfo.summary}
            </p>
          </div>
        </div>
      )}

      {data.experience.length > 0 && (
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-6">
            Experience
          </h2>
          <div className="space-y-8">
            {data.experience.map((exp, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800">{exp.position}</h3>
                    <p className="text-gray-600">{exp.company} • {exp.location}</p>
                  </div>
                  <p className="text-purple-600 font-medium">
                    {exp.startDate} - {exp.endDate}
                  </p>
                </div>
                <p className="text-gray-700 mt-2">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {data.education.length > 0 && (
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-6">
            Education
          </h2>
          <div className="space-y-6">
            {data.education.map((edu, index) => (
              <div key={index}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800">{edu.school}</h3>
                    <p className="text-gray-700">{edu.degree} in {edu.fieldOfStudy}</p>
                  </div>
                  <p className="text-purple-600 font-medium">
                    {edu.startDate} - {edu.endDate}
                  </p>
                </div>
                {edu.description && <p className="text-gray-600 mt-2">{edu.description}</p>}
              </div>
            ))}
          </div>
        </div>
      )}

      {data.skills.length > 0 && (
        <div>
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-6">
            Skills
          </h2>
          <div className="flex flex-wrap gap-3">
            {data.skills.map((skill, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-100"
              >
                <div className="flex items-center gap-2">
                  <span className="font-medium text-gray-700">{skill.name}</span>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-1.5 h-1.5 rounded-full ${
                          i < skill.level
                            ? 'bg-gradient-to-r from-purple-500 to-blue-500'
                            : 'bg-gray-200'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};