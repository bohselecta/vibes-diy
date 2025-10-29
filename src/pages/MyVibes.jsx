import { useState, Suspense } from 'react';
import Dither from '../components/Dither';

function MyVibes() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Sample vibes data - would come from API in real app
  const myVibes = [
    { id: 1, title: 'Reality Distortion Field', description: 'Interactive experience', createdAt: '2 days ago' },
    { id: 2, title: 'Trivia Showdown', description: 'Quiz app', createdAt: '5 days ago' },
    { id: 3, title: 'Ultra-Haptic', description: 'Haptic feedback demo', createdAt: '1 week ago' },
    { id: 4, title: '303 Synth', description: 'Music synthesizer', createdAt: '2 weeks ago' },
    { id: 5, title: 'ASCII Camera', description: 'Camera filter', createdAt: '3 weeks ago' },
    { id: 6, title: 'BMX Legends', description: 'Game prototype', createdAt: '1 month ago' },
  ];

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

      {/* Page Header */}
      <div className="page-header">
        <h2>My Vibes</h2>
        <p className="page-subtitle">Your collection of interactive vibes</p>
      </div>

      {/* Vibes Grid */}
      <section className="my-vibes-section">
        <div className="vibes-grid">
          {myVibes.map(vibe => (
            <div key={vibe.id} className="my-vibe-card">
              <div className="vibe-preview">Preview</div>
              <div className="my-vibe-content">
                <h3 className="my-vibe-title">{vibe.title}</h3>
                <p className="my-vibe-description">{vibe.description}</p>
                <span className="my-vibe-date">{vibe.createdAt}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default MyVibes;
