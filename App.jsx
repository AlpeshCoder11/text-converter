import { useState } from 'react';

function App() {
  const [text, setText] = useState('');


  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const convertToUpperCase = () => {
    setText(text.toUpperCase());
  };

  const convertToLowerCase = () => {
    setText(text.toLowerCase());
  };

  const clearText = () => {
    setText('');
  };

  const wordCount = text.split(/\s+/).filter((word) => word.length > 0).length;
  const charCount = text.length;

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Text Changer & Analyzer</h2>
      
      <div style={{ marginBottom: '15px' }}>
        <textarea
          value={text}
          onChange={handleOnChange}
          placeholder="Enter your text here..."
          rows="8"
          style={{ width: '100%', padding: '10px', fontSize: '16px' }}
        ></textarea>
      </div>

      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <button onClick={convertToUpperCase} style={buttonStyle}>Convert to Uppercase</button>
        <button onClick={convertToLowerCase} style={buttonStyle}>Convert to Lowercase</button>
        <button onClick={clearText} style={{ ...buttonStyle, backgroundColor: '#dc3545', color: 'white' }}>Clear Text</button>
      </div>

      <div style={{ borderTop: '1px solid #ccc', paddingTop: '15px' }}>
        <h3>Text Summary</h3>
        <p>
          <strong>Words:</strong> {wordCount} | <strong>Characters:</strong> {charCount}
        </p>
      </div>

      <div>
        <h3>Preview</h3>
        <p style={{ minHeight: '50px', padding: '10px', backgroundColor: '#f4f4f4', border: '1px solid #ddd' }}>
          {text.length > 0 ? text : "Nothing to preview"}
        </p>
      </div>
    </div>
  );
}


const buttonStyle = {
  padding: '10px 15px',
  fontSize: '14px',
  cursor: 'pointer',
  border: '1px solid #ccc',
  borderRadius: '4px'
};

export default App;