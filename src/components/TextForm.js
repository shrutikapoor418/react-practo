import React, { useState } from 'react';
import CryptoJS from 'crypto-js';

export default function TextForm(props) {
  const [text, setText] = useState('enter text here');
  const [encryptedText, setEncryptedText] = useState('');
  const [decryptedText, setDecryptedText] = useState('');

  const handleClick = () => {
    console.log('uppercase clicked');
    let newtext = text.toUpperCase();
    setText(newtext);
  };

  const handleClick2 = () => {
    console.log('Lowercase clicked');
    let newtext = text.toLowerCase();
    setText(newtext);
  };

  const handleEncrypt = () => {
    const encryptionKey = 'secretkey'; // Change this to your desired encryption key
    const encrypted = CryptoJS.AES.encrypt(text, encryptionKey).toString();
    setEncryptedText(encrypted);
  };

  const handleDecrypt = () => {
    const encryptionKey = 'secretkey'; // Change this to your desired encryption key
    const decrypted = CryptoJS.AES.decrypt(encryptedText, encryptionKey).toString(CryptoJS.enc.Utf8);
    setDecryptedText(decrypted);
  };

  const handleOnChange = (event) => {
    console.log('ooooo clicked');
    setText(event.target.value);
  };

  return (
    <>
      <div className="mb-3">
        <h1 style={{ textAlign: 'center', color: 'blue' }}>{props.heading}</h1>
        <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
        <textarea
          id="mybox"
          className="form-control"
          rows="8"
          style={{ width: '100%', resize: 'vertical' }}
          value={text}
          onChange={handleOnChange}
        ></textarea>
        <button className="btn btn-primary" style={{ marginRight: '5px' }} onClick={handleClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary" style={{ marginRight: '5px' }} onClick={handleClick2}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary" style={{ marginRight: '5px' }} onClick={handleEncrypt}>
          Encrypt
        </button>
        <button className="btn btn-primary" style={{ marginRight: '5px' }} onClick={handleDecrypt}>
          Decrypt
        </button>
      </div>
      <div className="container">
        <h1>Your Text Summary</h1>
        <p>
          {text.split(' ').length} words and {text.length} characters
        </p>
        <p>{(0.008 * text.split('').length).toFixed(2)} minutes read</p>
        <h2>Preview</h2>
        
       <p style={{ backgroundColor: '#f5f5f5', padding: '10px' }}>{text.length>0?text:"enter something to preview"}</p>
        <h2>Encrypted Text</h2>

        <p>{encryptedText}</p>
        <h2>Decrypted Text</h2>
        <p>{decryptedText}</p>
      </div>
    </>
  );
}
