import React from "react";
import "./Project.css";

export default function FunZone() {
  return (
    <div className="funzone-container">
      {/* Header */}
      <div className="funzone-header">
        <h1>🌌 FunZone</h1>
        <p>Dive into DSA games — learn, play, and win coins!</p>
      </div>

      {/* Coin Display */}
      <div className="coin">
        <span role="img" aria-label="coin">🪙</span>
        <span>120</span>
      </div>

      {/* Orbit Area */}
      <div className="orbit-container">
        <div className="orbit-path" />

        <div className="planet-box">
          <div className="planet">
            <div className="planet-icon">📚</div>
            <div className="card">
              <h3>Stack Simulator</h3>
              <p>Visualize stack push & pop in real-time</p>
            </div>
          </div>

          <div className="planet">
            <div className="planet-icon">⚙️</div>
            <div className="card">
              <h3>Sorting Race</h3>
              <p>Compete sorting algorithms in speed!</p>
            </div>
          </div>

          <div className="planet">
            <div className="planet-icon">🌳</div>
            <div className="card">
              <h3>Tree Builder</h3>
              <p>Reconstruct trees from traversals</p>
            </div>
          </div>

          <div className="planet">
            <div className="planet-icon">🕸️</div>
            <div className="card">
              <h3>Graph Explorer</h3>
              <p>Travel through nodes — master graphs!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
