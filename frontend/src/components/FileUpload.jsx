import { useState } from 'react';
import './FileUpload.css';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [result, setResult] = useState(null);

  const handleFileSelect = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setResult(null);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    setUploading(true);
    try {
      const formData = new FormData();
      formData.append('document', selectedFile);

      console.log('Sending request to backend...');
      const response = await fetch('http://localhost:3001/ocr', {
        method: 'POST',
        body: formData,
      });

      console.log('Response status:', response.status);
      const data = await response.json();
      console.log('Response data:', data);
      setResult(data);
      console.log('Result state should now be:', data);
    } catch (error) {
      console.error('Upload failed:', error);
      setResult({ error: 'Upload failed' });
    } finally {
      setUploading(false);
    }
  };

  return (
    <div id="file-upload-main" className="file-upload-container">
      <header id="file-upload-header" className="file-upload-header">
        <h2 id="file-upload-title" className="file-upload-title">
          Tax Document OCR Processor
        </h2>
      </header>
      
      <section id="file-input-section" className="file-input-section">
        <div id="file-input-wrapper" className="file-input-wrapper">
          <input
            id="document-file-input"
            type="file"
            accept="image/*,.pdf"
            onChange={handleFileSelect}
            className="file-input"
          />
        </div>
        
        {selectedFile && (
          <div id="selected-file-info" className="selected-file-info">
            <p id="selected-file-name" className="selected-file-name">
              Selected: {selectedFile.name}
            </p>
          </div>
        )}
      </section>

      <section id="upload-section" className="upload-section">
        <button 
          id="upload-process-btn"
          onClick={handleUpload}
          disabled={!selectedFile || uploading}
          className="upload-button"
        >
          {uploading ? 'Processing...' : 'Upload & Process'}
        </button>
      </section>

      {result && (
        <section id="result-section" className="result-section">
          <div id="result-container" className="result-container">
            <header id="result-header" className="result-header">
              <h3 id="result-title" className="result-title">Result:</h3>
            </header>
            <div id="result-debug" className="result-debug">
              <p id="result-exists-check" className="result-exists-check">
                Result exists: {result ? 'YES' : 'NO'}
              </p>
            </div>
            <div id="result-content" className="result-content">
              <pre id="result-json" className="result-json">
                {JSON.stringify(result, null, 2)}
              </pre>
            </div>
          </div>
        </section>
      )}

      <footer id="debug-section" className="debug-section">
        <div id="debug-info" className="debug-info">
          Debug - Result state: {result ? 'HAS DATA' : 'EMPTY'}
        </div>
      </footer>
    </div>
  );
};

export default FileUpload;