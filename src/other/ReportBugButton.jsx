// ReportBugButton.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ReportBugButton.css';
import Contact from '../components/showcase/Contact';

const ReportBugButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };


//   useEffect(() => {
//     if (formMessage.length > 0) {
//         setTimeout(() => {
//             setFormMessage('');
//             setFormMessageColor('');
//         }, 4000);
//     }
// }, [formMessage]);

    // event.preventDefault();
    // Handle form submission logic here, e.g., send data to a backend server
    // console.log({ description, email });

    // Close the modal after submission
    // setIsModalOpen(false);
  

  const handleReport = async (event) => {
    event.preventDefault();
    try {
      await axios.post('/api/report-bug', { description, email });
      alert('Bug report submitted successfully!');
    } catch (error) {
      console.error('There was an error submitting the bug report:', error);
      alert('There was an error submitting your bug report. Please try again.');
    }
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal} className="report-btn">Report Bug<i class="fi fi-sr-bug"></i></button>
      
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close1" onClick={handleCloseModal}>&times;</span>
            <form onSubmit={handleReport}>
              <label>
                Description:
                <textarea 
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </label>
              <label>
                Email (optional):
                <input 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label><br/><br/>
              <button type="submit" onClick={handleReport} className='sbtn' >Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReportBugButton;
