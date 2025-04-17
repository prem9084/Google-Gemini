import React, { useState } from "react";
import "./Main.css";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { FaRegUserCircle } from "react-icons/fa";
import { CiCompass1 } from "react-icons/ci";
import { FaRegLightbulb } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { TfiGallery } from "react-icons/tfi";
import { FaMicrophone } from "react-icons/fa";
import { IoSend } from "react-icons/io5";

const API_URL = "https://google-gemini-ab5g.onrender.com";

const Main = () => {
  const [prompt, setPrompt] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await axios.post(`${API_URL}/api/generate-ai-response`, {
        prompt,
      });

      setAiResponse(res.data.response);
      setPrompt("");
    } catch (error) {
      setError(error.message);
      setAiResponse("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="main">
        <div className="nav ">
          <p>Gemini</p>
          <FaRegUserCircle size={20} />
        </div>
        <div className="main-container">
          {aiResponse ? (
            <></>
          ) : (
            <div className="greet">
              <div>
                <span>Hello,Prem</span>
                <p>How can i Help You today</p>
              </div>
            </div>
          )}

          {aiResponse ? (
            <></>
          ) : (
            <>
              <div className="cards">
                <div className="card">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem, accusamus!
                  </p>
                  <CiCompass1 size={30} className="icons" />
                </div>
                <div className="card">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Tempore?
                  </p>
                  <FaRegLightbulb size={30} className="icons" />
                </div>
                <div className="card">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Culpa facere blanditiis saepe?
                  </p>
                  <MdMessage size={30} className="icons" />
                </div>
                <div className="card">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Unde facere veritatis odio voluptatem.
                  </p>
                  <FaCode size={30} className="icons" />
                </div>
              </div>
            </>
          )}

          {error && <p style={{ color: "red" }}>Error: {error}</p>}
          {!aiResponse ? (
            loading && (
              <>
                <div className="d-flex justify-content-center">
                  <div class="spinner-grow " role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </div>
              </>
            )
          ) : (
            <>
              <div className="responce-box">
                <ReactMarkdown>{aiResponse}</ReactMarkdown>
              </div>
            </>
          )}
          <form onSubmit={handleSubmit} className="forms">
            <div className="main-bottom">
              <div className="search-box position-fixed bottom-0">
                <input
                  type="text"
                  onChange={(e) => setPrompt(e.target.value)}
                  value={prompt}
                  placeholder="Ask Gamini.."
                  required
                />

                <div className="search-box-icon">
                  {loading ? (
                    <>
                      <div
                        className="spinner-border text-primary"
                        role="status"
                      >
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <button
                        type="submit"
                        className="border-0 bg-transparent "
                        style={{ marginTop: "-5px" }}
                      >
                        <IoSend />
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Main;
