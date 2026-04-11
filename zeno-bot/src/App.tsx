import React, { useState } from "react";
import "./index.css";

const QuestionPage: React.FC = () => {
  const [Time, setTime] = useState<string>("");

  const handleSubmit = () => {
      console.log(Time)
  };

  return (
    <div className="container">
      <div className="triangle"></div>
      <div className="circle"></div>
      <div className="square"></div>
      <div className="diamond"></div>
      <div className="star"></div>
      <div className="shape shape1"></div>
      <div className="shape shape2"></div>
      <div className="shape shape3"></div>
      <div className="tab">
      <h1>We’ll use this to create your daily AI schedule</h1>
      <div className="card">
        <div className="question">
        <label>Wake Up Timing</label>
        <input
          type="time"
          className="time-input"
          value={Time}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTime(e.target.value)
          }
        ></input>
        </div>
        <div className="question">
        <label>Breakfast Timing</label>
        <input
          type="time"
          className="time-input"
          value={Time}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTime(e.target.value)
          }
        ></input>
        </div>
        <div className="question">
        <label>Morning Break Timing</label>
        <input
          type="time"
          className="time-input"
          value={Time}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTime(e.target.value)
          }
        ></input>
        </div>
        <div className="question">
        <label>Lunch Timing</label>
        <input
          type="time"
          className="time-input"
          value={Time}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTime(e.target.value)
          }
        ></input>
        </div>
        <div className="question">
        <label>Snacks Timing</label>
        <input
          type="time"
          className="time-input"
          value={Time}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTime(e.target.value)
          }
        ></input>
        </div>
        <div className="question">
        <label>Evening Freshup Timing</label>
        <input
          type="time"
          className="time-input"
          value={Time}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTime(e.target.value)
          }
        ></input>
        </div>
        <div className="question">
        <label>Dinner Timing</label>
        <input
          type="time"
          className="time-input"
          value={Time}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTime(e.target.value)   
          }
        ></input>
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
    </div>
  );
};

export default QuestionPage;

