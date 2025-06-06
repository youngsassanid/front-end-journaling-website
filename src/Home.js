import React, { useState } from 'react';

export const Home = ({ darkMode }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const background = darkMode
        ? 'linear-gradient(135deg, #0f0f0f, #1a1a1a)'
        : 'linear-gradient(135deg, #ffffff, #f0f0f0)';

    const textColor = darkMode ? '#f0f0f0' : '#1a1a1a';
    const quoteColor = darkMode ? '#ffddf4' : '#b30059';
    const captionColor = darkMode ? '#aaaaaa' : '#555';
    const paragraphColor = darkMode ? '#ccc' : '#333';
    const highlightBoxBg = darkMode
        ? 'rgba(255, 105, 180, 0.05)'
        : 'rgba(255, 182, 193, 0.15)';
    const highlightText = darkMode ? '#f8c8ec' : '#b30059';
    const borderColor = darkMode ? '#ff69b4' : '#b30059';
    const boxShadowColor = darkMode
        ? '0 0 10px rgba(255, 105, 180, 0.2)'
        : '0 0 10px rgba(255, 182, 193, 0.3)';

    const artists = [
        {
            name: "Frank Ocean",
            image: "/frank.png",
            quote: "Work hard in silence, let success be your noise.",
            description: "Frank Ocean is more than a musician—he’s a cultural force. Known for bending genres and emotions in his albums like Blonde and Channel Orange, he captures the beauty of vulnerability and self-expression like no one else.",
            spotify: "https://open.spotify.com/embed/artist/2h93pZq0e7k5yf4dywlkpM?utm_source=generator"
        },
        {
            name: "Woodie",
            image: "https://i.redd.it/o2w4w3vu25061.jpg",
            quote: "Through trials & tribulations, I've developed an act for patience, so I'm camouflaged while waitin' when it come to retaliation.",
            description: "Woodie was a pioneer of Northern California’s underground rap scene. Coming out of Antioch, he brought raw, authentic stories from the streets into his lyrics, leaving behind a lasting legacy of street wisdom and loyalty.",
            spotify: "https://open.spotify.com/embed/track/2zXOGINRjHuoy2ucAjkZjK?utm_source=generator"
        },
        {
            name: "021kid",
            image: "https://i.ytimg.com/vi/m7DD3EOlrlM/hqdefault.jpg?v=664fa53e",
            quote: "I came from the dirt, now I'm stacking my pounds. Persian blood, but I run this town.",
            description: "021kid blends Persian identity with UK drill, bringing fire bars and cultural pride to a genre that’s often far from home. His sound is global, raw, and revolutionary—bridging Tehran to London with a mic.",
            spotify: "https://open.spotify.com/embed/artist/5VyYLuZsK22zAgRZc1Lx0c?utm_source=generator"
        }
    ];

    const prevSlide = () => {
        setCurrentSlide((currentSlide - 1 + artists.length) % artists.length);
    };

    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % artists.length);
    };

    const artist = artists[currentSlide];

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            background,
            color: textColor,
            fontFamily: "'Georgia', serif",
            textAlign: 'center',
            padding: '2rem',
            animation: 'fadeIn 2s ease-in-out'
        }}>
            <style>
                {`
                    @keyframes fadeIn {
                        from { opacity: 0; transform: translateY(10px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                    .glow {
                        text-shadow: 0 0 8px #ff69b4, 0 0 12px #ff69b4;
                    }
                    iframe {
                        border-radius: 12px;
                    }
                    .slider-buttons {
                        display: flex;
                        gap: 1rem;
                        margin-top: 1rem;
                    }
                    .slider-button {
                        background: transparent;
                        border: 2px solid ${borderColor};
                        color: ${highlightText};
                        padding: 0.5rem 1rem;
                        font-size: 1rem;
                        border-radius: 8px;
                        cursor: pointer;
                        transition: background 0.3s;
                    }
                    .slider-button:hover {
                        background: ${highlightBoxBg};
                    }
                `}
            </style>

            <img
                src={artist.image}
                alt={artist.name}
                style={{
                    width: '300px',
                    borderRadius: '16px',
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
                    marginBottom: '2rem'
                }}
            />

            <blockquote className="glow" style={{
                fontSize: '1.5rem',
                fontStyle: 'italic',
                lineHeight: '1.6',
                maxWidth: '600px',
                borderLeft: `4px solid ${borderColor}`,
                paddingLeft: '1rem',
                color: quoteColor,
                marginBottom: '1.5rem'
            }}>
                “{artist.quote}” <br />
                <span style={{
                    fontSize: '1rem',
                    display: 'block',
                    marginTop: '1rem',
                    color: captionColor
                }}>
                    — {artist.name}
                </span>
            </blockquote>

            <p style={{
                maxWidth: '600px',
                fontSize: '1rem',
                color: paragraphColor,
                marginBottom: '1.5rem'
            }}>
                {artist.description}
            </p>

            <p style={{
                maxWidth: '600px',
                fontSize: '1.05rem',
                color: highlightText,
                fontStyle: 'italic',
                background: highlightBoxBg,
                padding: '1rem',
                border: `1px solid ${borderColor}`,
                borderRadius: '12px',
                boxShadow: boxShadowColor,
                marginBottom: '2rem'
            }}>
                This site is your canvas—just like {artist.name.split(' ')[0]}, you can write your truth, craft lyrics, or jot down raw emotions before they fade. Whether you're working on your next song, poem, or thought—start here. The next masterpiece begins with a single sentence.
            </p>

            <iframe
                src={artist.spotify}
                width="300"
                height="80"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                style={{ marginBottom: '1rem' }}
            ></iframe>

            <div className="slider-buttons">
                <button className="slider-button" onClick={prevSlide}>◀ Prev</button>
                <button className="slider-button" onClick={nextSlide}>Next ▶</button>
            </div>
        </div>
    );
};

