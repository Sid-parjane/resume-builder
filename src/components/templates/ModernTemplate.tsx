import React from 'react';
import { ResumeData } from '../../types';

interface TemplateProps {
  data: ResumeData;
}

export const ModernTemplate: React.FC<TemplateProps> = ({ data }) => {
  return (
    <div className="p-8 bg-white shadow-lg rounded-lg max-w-4xl mx-auto">
      <div className="border-l-4 border-blue-500 pl-6 mb-8">
        <h1 className="text-4xl font-bold text-gray-800">{data.personalInfo.fullName}</h1>
        <div className="text-gray-600 mt-2 flex flex-wrap gap-4">
          {data.personalInfo.email && <span>{data.personalInfo.email}</span>}
          {data.personalInfo.phone && <span>{data.personalInfo.phone}</span>}
          {data.personalInfo.location && <span>{data.personalInfo.location}</span>}
        </div>
      </div>

      {data.personalInfo.summary && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-500 mb-4">About Me</h2>
          <p className="text-gray-700 leading-relaxed">{data.personalInfo.summary}</p>
        </div>
      )}

      {data.experience.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-500 mb-4">Professional Experience</h2>
          <div className="space-y-6">
            {data.experience.map((exp, index) => (
              <div key={index} className="relative pl-6 border-l-2 border-gray-200">
                <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-2" />
                <div className="mb-1">
                  <h3 className="text-xl font-semibold text-gray-800">{exp.position}</h3>
                  <p className="text-gray-600">{exp.company} • {exp.location}</p>
                  <p className="text-gray-500 text-sm">{exp.startDate} - {exp.endDate}</p>
                </div>
                <p className="text-gray-700 mt-2">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {data.education.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-500 mb-4">Education</h2>
          <div className="space-y-4">
            {data.education.map((edu, index) => (
              <div key={index} className="relative pl-6 border-l-2 border-gray-200">
                <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-2" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{edu.school}</h3>
                  <p className="text-gray-700">{edu.degree} in {edu.fieldOfStudy}</p>
                  <p className="text-gray-500 text-sm">{edu.startDate} - {edu.endDate}</p>
                  {edu.description && <p className="text-gray-600 mt-2">{edu.description}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {data.skills.length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold text-blue-500 mb-4">Skills</h2>
          <div className="grid grid-cols-2 gap-4">
            {data.skills.map((skill, index) => (
              <div key={index} className="bg-gray-50 p-3 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">{skill.name}</span>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full ${
                          i < skill.level ? 'bg-blue-500' : 'bg-gray-300'
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