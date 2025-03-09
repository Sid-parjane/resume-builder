import React from 'react';
import { ResumeData } from '../../types';

interface TemplateProps {
  data: ResumeData;
}

export const MinimalTemplate: React.FC<TemplateProps> = ({ data }) => {
  return (
    <div className="p-8 bg-white shadow-lg rounded-lg max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-light text-gray-800 mb-2">{data.personalInfo.fullName}</h1>
        <div className="text-gray-600 space-x-4">
          {data.personalInfo.email && <span>{data.personalInfo.email}</span>}
          {data.personalInfo.phone && <span>• {data.personalInfo.phone}</span>}
          {data.personalInfo.location && <span>• {data.personalInfo.location}</span>}
        </div>
      </div>

      {data.personalInfo.summary && (
        <div className="mb-8">
          <p className="text-gray-700 text-center max-w-2xl mx-auto leading-relaxed">
            {data.personalInfo.summary}
          </p>
        </div>
      )}

      {data.experience.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-light text-center text-gray-800 mb-6">Experience</h2>
          <div className="space-y-6">
            {data.experience.map((exp, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-medium text-gray-800">{exp.position}</h3>
                <p className="text-gray-600">{exp.company} • {exp.location}</p>
                <p className="text-gray-500 text-sm mb-2">{exp.startDate} - {exp.endDate}</p>
                <p className="text-gray-700 max-w-2xl mx-auto">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {data.education.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-light text-center text-gray-800 mb-6">Education</h2>
          <div className="space-y-4">
            {data.education.map((edu, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-medium text-gray-800">{edu.school}</h3>
                <p className="text-gray-700">{edu.degree} in {edu.fieldOfStudy}</p>
                <p className="text-gray-500 text-sm mb-2">{edu.startDate} - {edu.endDate}</p>
                {edu.description && (
                  <p className="text-gray-600 max-w-2xl mx-auto">{edu.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {data.skills.length > 0 && (
        <div>
          <h2 className="text-2xl font-light text-center text-gray-800 mb-6">Skills</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {data.skills.map((skill, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-gray-50 rounded-full text-gray-700"
              >
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};