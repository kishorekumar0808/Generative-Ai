import { useState } from "react";
import InputBox from "./components/InputBox";
import ExplanationBoard from "./components/ExplanationBoard";
import HistoryPanel from "./components/HistoryPanel";

export default function App() {
  const [question, setQuestion] = useState("");
  const [history, setHistory] = useState([]);

  const handleQuestionSubmit = (newQuestion) => {
    setQuestion(newQuestion);
    setHistory((prev) => [...prev, newQuestion]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Ask Anything!</h1>
        <InputBox onSubmit={handleQuestionSubmit} />
        <ExplanationBoard question={question} />
        {history.length > 0 && <HistoryPanel history={history} />}
      </div>
    </div>
  );
}
