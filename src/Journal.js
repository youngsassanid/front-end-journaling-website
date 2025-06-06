import React, { useState, useEffect } from 'react';

export const Journal = ({ darkMode }) => {
    const [entries, setEntries] = useState([]);
    const [currentText, setCurrentText] = useState('');
    const [wordCount, setWordCount] = useState(0);
    const [lastSaved, setLastSaved] = useState(null);
    const [typingTimeout, setTypingTimeout] = useState(null);
    const [copied, setCopied] = useState(false);

    const background = darkMode
        ? 'linear-gradient(135deg, #0f0f0f, #1a1a1a)'
        : 'linear-gradient(135deg, #ffffff, #f0f0f0)';
    const textColor = darkMode ? '#f0f0f0' : '#1a1a1a';
    const textareaBg = darkMode ? '#1e1e1e' : '#ffffff';
    const textareaText = darkMode ? '#f0f0f0' : '#1a1a1a';
    const borderColor = darkMode ? '#ff69b4' : '#b30059';
    const boxShadowColor = darkMode
        ? '0 0 10px rgba(255, 105, 180, 0.2)'
        : '0 0 10px rgba(255, 182, 193, 0.3)';

    const handleTextChange = (e) => {
        const value = e.target.value;
        setCurrentText(value);
        setWordCount(value.trim().split(/\s+/).filter(Boolean).length);

        if (typingTimeout) clearTimeout(typingTimeout);
        const timeout = setTimeout(() => setLastSaved(new Date()), 2000);
        setTypingTimeout(timeout);
    };

    const handleSubmit = () => {
        if (!currentText.trim()) return;
        const newEntry = {
            id: Date.now(),
            text: currentText.trim(),
            timestamp: new Date()
        };
        setEntries([newEntry, ...entries]);
        setCurrentText('');
        setWordCount(0);
        setLastSaved(null);
    };

    const handleDelete = (id) => {
        setEntries(entries.filter(entry => entry.id !== id));
    };

    const formatTimestamp = (date) => {
        return date?.toLocaleString('en-US', {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(currentText)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            });
    };

    return (
        <div style={{
            minHeight: '100vh',
            width: '100%',
            background,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontFamily: "'Georgia', serif",
            padding: '2rem',
        }}>
            <style>
                {`
                    .glow-border {
                        border: 2px solid ${borderColor};
                        box-shadow: ${boxShadowColor};
                    }

                    .submit-button, .copy-button {
                        background-color: #ff69b4;
                        color: white;
                        font-size: 1rem;
                        padding: 0.75rem 2rem;
                        border: none;
                        border-radius: 8px;
                        margin-top: 1.5rem;
                        cursor: pointer;
                        transition: all 0.3s ease;
                        font-weight: bold;
                        box-shadow: 0 4px 12px rgba(255, 105, 180, 0.3);
                    }

                    .submit-button:hover, .copy-button:hover {
                        background-color: #ff85c1;
                        transform: scale(1.05);
                        box-shadow: 0 6px 20px rgba(255, 105, 180, 0.5);
                    }

                    .fade-in {
                        animation: fadeIn 0.3s ease-in-out;
                    }

                    @keyframes fadeIn {
                        from { opacity: 0; }
                        to { opacity: 1; }
                    }

                    .entry-card {
                        padding: 1rem;
                        border-radius: 10px;
                        margin-top: 1rem;
                        background-color: ${textareaBg};
                        color: ${textareaText};
                        box-shadow: ${boxShadowColor};
                        width: 100%;
                        max-width: 700px;
                        transition: all 0.3s ease-in-out;
                    }

                    .entry-card:hover {
                        transform: scale(1.01);
                    }

                    .delete-button {
                        background: transparent;
                        color: ${borderColor};
                        border: none;
                        cursor: pointer;
                        font-weight: bold;
                        float: right;
                    }

                    .delete-button:hover {
                        text-decoration: underline;
                    }
                `}
            </style>

            <h1 style={{
                color: textColor,
                fontSize: '2rem',
                marginBottom: '1rem',
                textShadow: boxShadowColor
            }}>
                Journal Entry
            </h1>

            <textarea
                className="glow-border"
                placeholder="Start writing your thoughts, lyrics, or dreams..."
                value={currentText}
                onChange={handleTextChange}
                style={{
                    width: '100%',
                    maxWidth: '700px',
                    height: '300px',
                    backgroundColor: textareaBg,
                    color: textareaText,
                    padding: '1rem',
                    fontSize: '1rem',
                    borderRadius: '12px',
                    resize: 'vertical',
                    outline: 'none',
                    fontFamily: 'monospace',
                    border: 'none',
                }}
            />

            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                maxWidth: '700px',
                marginTop: '1rem',
            }}>
                <span style={{ color: textColor, fontSize: '0.9rem' }}>
                    Word Count: {wordCount}
                </span>
                {lastSaved && (
                    <span className="fade-in" style={{ fontStyle: 'italic', color: '#ff69b4', fontSize: '0.9rem' }}>
                        Saved {formatTimestamp(lastSaved)}
                    </span>
                )}
            </div>

            <div style={{
                width: '100%',
                maxWidth: '700px',
                display: 'flex',
                justifyContent: 'flex-end',
                marginTop: '0.5rem'
            }}>
                <button className="copy-button" onClick={handleCopy}>
                    {copied ? "Copied!" : "Copy to Clipboard"}
                </button>
            </div>

            <button className="submit-button" onClick={handleSubmit}>
                Submit
            </button>

            {entries.map(entry => (
                <div className="entry-card fade-in" key={entry.id}>
                    <button className="delete-button" onClick={() => handleDelete(entry.id)}>Delete</button>
                    <div style={{ whiteSpace: 'pre-wrap', marginTop: '0.5rem' }}>{entry.text}</div>
                    <div style={{ marginTop: '0.5rem', fontSize: '0.75rem', opacity: 0.6 }}>
                        {formatTimestamp(entry.timestamp)}
                    </div>
                </div>
            ))}

            <footer style={{
                marginTop: '3rem',
                color: textColor,
                fontSize: '0.8rem',
                opacity: 0.6
            }}>
                Page loaded: {formatTimestamp(new Date())}
            </footer>
        </div>
    );
};
