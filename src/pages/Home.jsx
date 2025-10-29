import { useState, Suspense } from 'react';
import Dither from '../components/Dither';

function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Animated Dither Background */}
      <div className="dither-background">
        <Suspense fallback={<div style={{ width: '100%', height: '100%', background: '#0a0a0a' }} />}>
          <Dither
            waveColor={[0.5, 0.5, 0.5]}  // Greyscale
            disableAnimation={false}
            enableMouseInteraction={false}
            mouseRadius={0.3}
            colorNum={4}
            waveAmplitude={0.43}
            waveFrequency={2.5}
            waveSpeed={0.025}
          />
        </Suspense>
      </div>

      {/* Hero */}
      <section className="hero">
        <h1>Shareable in seconds</h1>
        <p className="subtitle">Make apps with your friends</p>
      </section>

      {/* Prompt Section */}
      <section className="prompt-section">
        <p className="prompt-label">Create custom vibes from a prompt</p>

        <div className="category-pills">
          {['Schedule', 'Quiz', 'Flashcards', '3D', 'Toggle', 'Blocks', 'Cook', 'Paint'].map(category => (
            <div key={category} className="pill">{category}</div>
          ))}
        </div>

        <div className="prompt-container">
          <div className="prompt-input-wrapper">
            <textarea className="prompt-input" placeholder="I want to build..." />
          </div>
          <button className="code-btn">Code</button>
        </div>
      </section>

      {/* Featured Vibes */}
      <section className="featured-section">
        <p className="featured-label">Or remix a featured vibe</p>

        <div className="vibes-grid">
          {[
            'Reality Distortion Field',
            'Trivia Showdown',
            'BMX Legends',
            'Ultra-Haptic',
            '303 Synth',
            'Ascii Camera'
          ].map(title => (
            <div key={title} className="vibe-card">
              <div className="vibe-preview">Preview Image</div>
              <div className="vibe-title">{title}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
