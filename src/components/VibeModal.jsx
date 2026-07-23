import { useEffect, useRef, useState } from 'react';
import { projects } from '../data.js';
import './vibe.css';

const AUDIO_TRACKS = [
  {
    id: 'on-and-on',
    name: 'Cartoon — On & On',
    artist: 'Cartoon ft. Daniel Levi',
    src: '/audio/on-and-on.webm',
  },
  {
    id: 'heroes-tonight',
    name: 'Janji — Heroes Tonight',
    artist: 'Janji ft. Johnning',
    src: '/audio/heroes-tonight.webm',
  },
  {
    id: 'invisible',
    name: 'Julius Dreisig — Invisible',
    artist: 'Julius Dreisig & Zeus x Crona',
    src: '/audio/invisible.webm',
  },
];

export default function VibeModal({ isOpen, onClose }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackIndex, setTrackIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoomProject, setZoomProject] = useState(null);

  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);

  const particleCanvasRef = useRef(null);
  const beamCanvasRef = useRef(null);
  const waveformRef = useRef(null);
  const audioRef = useRef(null);
  const animFrameRef = useRef(null);

  const currentTrack = AUDIO_TRACKS[trackIndex];

  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsPlaying(false);
  };

  const playCurrentTrack = () => {
    if (!audioRef.current) return;
    audioRef.current.src = currentTrack.src;
    audioRef.current
      .play()
      .then(() => setIsPlaying(true))
      .catch((e) => console.log('Autoplay waiting for user gesture', e));
  };

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((e) => console.log('Play failed', e));
    }
  };

  const nextSong = () => {
    const nextIdx = (trackIndex + 1) % AUDIO_TRACKS.length;
    setTrackIndex(nextIdx);
  };

  const prevSong = () => {
    const prevIdx = (trackIndex - 1 + AUDIO_TRACKS.length) % AUDIO_TRACKS.length;
    setTrackIndex(prevIdx);
  };

  useEffect(() => {
    if (isOpen && audioRef.current) {
      audioRef.current.src = AUDIO_TRACKS[trackIndex].src;
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  }, [trackIndex]);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        playCurrentTrack();
      }, 50);
      return () => clearTimeout(timer);
    } else {
      stopAudio();
    }
    return () => {
      stopAudio();
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const pCanvas = particleCanvasRef.current;
    const bCanvas = beamCanvasRef.current;
    if (!pCanvas || !bCanvas) return;

    const pCtx = pCanvas.getContext('2d');
    const bCtx = bCanvas.getContext('2d');

    let width = (pCanvas.width = bCanvas.width = window.innerWidth);
    let height = (pCanvas.height = bCanvas.height = window.innerHeight);

    const handleResize = () => {
      width = pCanvas.width = bCanvas.width = window.innerWidth;
      height = pCanvas.height = bCanvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const backgroundStars = Array.from({ length: 60 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.5 + 0.1,
    }));

    const funnelParticles = Array.from({ length: 90 }, () => ({
      x: (Math.random() - 0.5) * 320,
      y: Math.random() * 260,
      speed: Math.random() * 1.8 + 0.6,
      radius: Math.random() * 2.2 + 0.8,
      alpha: Math.random() * 0.8 + 0.2,
    }));

    const render = () => {
      pCtx.clearRect(0, 0, width, height);
      bCtx.clearRect(0, 0, width, height);

      backgroundStars.forEach((s) => {
        pCtx.beginPath();
        pCtx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        pCtx.fillStyle = `rgba(255, 255, 255, ${s.alpha})`;
        pCtx.fill();
      });

      const centerX = width / 2;
      const centerY = height * 0.62;

      funnelParticles.forEach((p) => {
        p.y -= p.speed;
        if (p.y < 0) {
          p.y = 260;
          p.x = (Math.random() - 0.5) * 320;
        }

        const currentX = centerX + (p.x * (p.y / 260));
        const currentY = centerY + p.y;

        bCtx.beginPath();
        bCtx.arc(currentX, currentY, p.radius, 0, Math.PI * 2);
        bCtx.fillStyle = `rgba(255, 255, 255, ${(p.alpha * (p.y / 260)).toFixed(2)})`;
        bCtx.shadowBlur = 6;
        bCtx.shadowColor = '#ffffff';
        bCtx.fill();
      });

      animFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const canvas = waveformRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let phase = 0;
    let waveAnim;

    const drawWave = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.strokeStyle = isPlaying ? '#ffffff' : '#52525b';
      ctx.lineWidth = 1.5;

      const mid = canvas.height / 2;
      const amp = isPlaying ? 5 : 1.5;

      for (let x = 0; x < canvas.width; x++) {
        const y = mid + Math.sin(x * 0.14 + phase) * amp;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }

      ctx.stroke();
      phase += isPlaying ? 0.14 : 0.02;
      waveAnim = requestAnimationFrame(drawWave);
    };

    drawWave();

    return () => cancelAnimationFrame(waveAnim);
  }, [isOpen, isPlaying]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStartX(e.clientX || (e.touches && e.touches[0].clientX) || 0);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const currentX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const diff = currentX - dragStartX;

    if (diff < -50) {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
      setIsDragging(false);
    } else if (diff > 50) {
      setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleClose = () => {
    stopAudio();
    setZoomProject(null);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="vibe-overlay">
      <audio ref={audioRef} loop onEnded={nextSong} />

      <canvas ref={particleCanvasRef} className="vibe-particle-canvas" />
      <canvas ref={beamCanvasRef} className="vibe-beam-canvas" />

      <div className="vibe-top-bar">
        <a href="#contact" className="vibe-tag-btn" onClick={handleClose}>
          CONTACT
        </a>

        <div className="vibe-controls-group">
          <button className="vibe-minimal-btn" onClick={handleClose}>
            RETURN TO MINIMAL
          </button>

          <div className="vibe-audio-bar">
            <button className="audio-step-btn" onClick={prevSong} title="Previous Song">
              &lt;
            </button>
            <span className="track-title-label">{currentTrack.name}</span>
            <canvas ref={waveformRef} width={60} height={18} className="waveform-canvas" />
            <button className="audio-play-btn" onClick={toggleAudio} title={isPlaying ? "Pause music" : "Play music track"}>
              {isPlaying ? "▌▌" : "▶"}
            </button>
            <button className="audio-step-btn" onClick={nextSong} title="Next Song">
              &gt;
            </button>
          </div>
        </div>
      </div>

      <div className="vibe-visual-carousel">
        <div
          className="vibe-cards-track"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleMouseDown}
          onTouchMove={handleMouseMove}
          onTouchEnd={handleMouseUp}
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >
          {projects.map((proj, idx) => {
            const isCenter = idx === currentIndex;
            const hasImage = Boolean(proj.image);

            return (
              <div
                key={proj.id}
                className={`vibe-preview-card ${isCenter ? 'card-active' : 'card-subtle'}`}
                onClick={() => {
                  if (isCenter) {
                    if (hasImage) setZoomProject(proj);
                  } else {
                    setCurrentIndex(idx);
                  }
                }}
                title={isCenter ? (hasImage ? "Click to open full-screen preview image!" : "Live preview coming soon") : `View ${proj.title}`}
              >
                <div className="preview-image-frame">
                  {hasImage ? (
                    <>
                      <img src={proj.image} alt={proj.title} className="preview-img" />
                      <div className="frame-hover-hint">click to expand ↗</div>
                    </>
                  ) : (
                    <div className="coming-soon-frame">
                      <span className="coming-soon-badge">COMING SOON</span>
                      <p className="coming-soon-sub">Live preview template</p>
                      <span className="coming-soon-tech">{proj.tech.slice(0, 3).join(" • ")}</span>
                    </div>
                  )}
                </div>

                <h3 className="preview-title">{proj.title.toUpperCase()}</h3>
              </div>
            );
          })}
        </div>

        <div className="vibe-carousel-nav">
          <span className="drag-hint-label">← Drag mouse left or right to switch projects →</span>
          <div className="vibe-dots">
            {projects.map((p, idx) => (
              <span
                key={p.id}
                className={`vibe-dot ${idx === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(idx)}
              />
            ))}
          </div>
        </div>
      </div>

      {zoomProject && zoomProject.image && (
        <div className="lightbox-overlay" onClick={() => setZoomProject(null)}>
          <div className="lightbox-top-bar">
            <span className="lightbox-title">{zoomProject.title.toUpperCase()} — FULL-SCREEN PREVIEW</span>
            <button className="vibe-close-btn" onClick={() => setZoomProject(null)}>
              ✕ CLOSE
            </button>
          </div>

          <div className="lightbox-content-frame" onClick={(e) => e.stopPropagation()}>
            <img src={zoomProject.image} alt={zoomProject.title} className="lightbox-full-img" />

            <div className="lightbox-actions-bar">
              <div className="lightbox-info">
                <h3>{zoomProject.title}</h3>
                <p>{zoomProject.tagline}</p>
              </div>
              <div className="lightbox-btns">
                {zoomProject.linkStatus.live === 'available' && (
                  <a href={zoomProject.links.live} target="_blank" rel="noreferrer" className="btn btn-primary">
                    Live Site ↗
                  </a>
                )}
                {zoomProject.linkStatus.repo === 'available' && (
                  <a href={zoomProject.links.repo} target="_blank" rel="noreferrer" className="btn btn-ghost">
                    View Repo ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
