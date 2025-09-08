import React, { useState, useEffect } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import './preliminaryRound.css';
import { MCQ } from '../../../../data/mcq';
import AudioMp3 from './alert.mp3';

const MCQComponent = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(MCQ.questions.length).fill(null));
  const [timeLeft, setTimeLeft] = useState(30);
  const [isTestSubmitted, setIsTestSubmitted] = useState(false);
  const [isCardVisible, setIsCardVisible] = useState(true);
  const [isWarningVisible, setIsWarningVisible] = useState(true);
  const [isRejectionShown, setIsRejectionShown] = useState(false);

  const questions = MCQ.questions;
  const currentQuestion = questions[currentQuestionIndex];

  // Load audio files only once
  const audioPlayer = new Audio(AudioMp3);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Page is minimized or moved to another tab
        if (isWarningVisible && isCardVisible) {
          audioPlayer.play(); // Play the warning sound
          alert("Warning: Please do not minimize or switch tabs during the test."); // Display warning alert
          setIsWarningVisible(false);
        } else if (isCardVisible) {
          audioPlayer.play(); // Play the rejection sound
          setIsTestSubmitted(true);
          setIsCardVisible(true);
          setIsRejectionShown(true);
        }
      }
    };

    const handleUnload = (event) => {
      // Page is being closed
      if (isCardVisible) {
        event.returnValue = 'Your test will be canceled. Are you sure you want to leave?';
        audioPlayer.play(); // Play the rejection sound
        setIsTestSubmitted(true);
        setIsCardVisible(true);
        setIsRejectionShown(true);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('beforeunload', handleUnload);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', handleUnload);
    };
  }, [isWarningVisible, isCardVisible, isRejectionShown]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft((prevTimeLeft) => {
          const newTimeLeft = prevTimeLeft - 1;
          if (newTimeLeft <= 10) {
            // Apply animation and red color for the last 10 seconds
            return newTimeLeft;
          }
          return newTimeLeft;
        });
      } else {
        // Auto submit when time runs out
        handleNext();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, currentQuestionIndex]);

  const handleOptionSelect = (option) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestionIndex] = option;
    setUserAnswers(updatedAnswers);
  };

  const handleNext = () => {
    // Handle next question or submit if it's the last question
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimeLeft(30); // Reset timer for the next question
    } else {
      // Handle final submission
      setIsTestSubmitted(true);
      setIsCardVisible(true);
      setIsWarningVisible(false); // No warning after submission
    }
  };

  return (
    <div className='mcq-main'>
      {!isTestSubmitted && isCardVisible ? (
        <>
          <div className='mcq-top-container'>
            <div className="mcq-question-number">{`${currentQuestionIndex + 1}/${questions.length}`}</div>
            <div className={`mcq-timer top-right ${timeLeft <= 10 ? 'last-10-seconds' : ''}`}>{`Time Left: ${timeLeft}s`}</div>
          </div>
          <div className="mcq-container">
            <div className="mcq-question-container">
              <p className="mcq-question">{currentQuestion.question}</p>
              <div className="mcq-options-container">
                {currentQuestion.options.map((option, index) => (
                  <div key={index} className={`mcq-option ${userAnswers[currentQuestionIndex] === option ? 'selected' : ''}`} onClick={() => handleOptionSelect(option)}>
                    {option}
                  </div>
                ))}
              </div>
            </div>
            <div className="mcq-button-container">
              {currentQuestionIndex < questions.length - 1 ? (
                <button className="mcq-next-button" onClick={handleNext}>
                  Next <AiOutlineArrowRight className="next-icon" />
                </button>
              ) : (
                <button className="mcq-next-button" onClick={handleNext}>
                  Submit
                </button>
              )}
            </div>
          </div>
        </>
      ) : (
        !isTestSubmitted && !isRejectionShown && (
          <div className="rejection-card">
            <h2>Your test has been closed</h2>
            <p>Due to inactivity or switching tabs, your test has been canceled.</p>
          </div>
        )
      )}
      {isTestSubmitted && (
        <div className="thank-you-card">
          <h2>Thank You!</h2>
          <p>Your test has been submitted successfully.</p>
        </div>
      )}
    </div>
  );
};

export default MCQComponent;
