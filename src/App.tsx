import React, { useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Download, FileText, Layout } from 'lucide-react';
import { ResumeForm } from './components/ResumeForm';
import { ResumePreview } from './components/ResumePreview';
import { ResumeData, TemplateType } from './types';

const initialData: ResumeData = {
  personalInfo: {
    fullName: '',
    email: '',
    phone: '',
    location: '',
    summary: '',
  },
  education: [],
  experience: [],
  skills: [],
};

function App() {
  const [resumeData, setResumeData] = useState<ResumeData>(initialData);
  const [activeTab, setActiveTab] = useState<'edit' | 'preview'>('edit');
  const [template, setTemplate] = useState<TemplateType>('modern');
  const previewRef = React.useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    content: () => previewRef.current,
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
              <FileText className="h-8 w-8" />
              SmartResume Generator
            </h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Layout className="h-5 w-5 text-gray-500" />
                <select
                  value={template}
                  onChange={(e) => setTemplate(e.target.value as TemplateType)}
                  className="block w-40 rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue-500 sm:text-sm sm:leading-6"
                >
                  <option value="modern">Modern Template</option>
                  <option value="minimal">Minimal Template</option>
                  <option value="creative">Creative Template</option>
                </select>
              </div>
              <button
                onClick={handlePrint}
                className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Download className="h-5 w-5" />
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="mb-6">
          <div className="flex gap-4 border-b">
            <button
              className={`px-4 py-2 ${
                activeTab === 'edit'
                  ? 'border-b-2 border-blue-500 text-blue-500'
                  : 'text-gray-500'
              }`}
              onClick={() => setActiveTab('edit')}
            >
              Edit
            </button>
            <button
              className={`px-4 py-2 ${
                activeTab === 'preview'
                  ? 'border-b-2 border-blue-500 text-blue-500'
                  : 'text-gray-500'
              }`}
              onClick={() => setActiveTab('preview')}
            >
              Preview
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {activeTab === 'edit' ? (
            <ResumeForm data={resumeData} onChange={setResumeData} />
          ) : (
            <div ref={previewRef}>
              <ResumePreview data={resumeData} template={template} />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;