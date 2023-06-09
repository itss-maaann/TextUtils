import React, { useState, useEffect, useMemo } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState("");
    const [isSpeaking, setIsSpeaking] = useState(false);
    const speakMessage = useMemo(() => new SpeechSynthesisUtterance(), []);

    useEffect(() => {
        speakMessage.addEventListener('end', handleSpeechEnd);

        return () => {
            speakMessage.removeEventListener('end', handleSpeechEnd);
            stopSpeaking();
        };
    }, [speakMessage]);

    const handleSpeechEnd = () => {
        setIsSpeaking(false);
    };

    const convertToUpperCase = () => {
        setText(text.toUpperCase());
    };

    const convertToLowerCase = () => {
        setText(text.toLowerCase());
    };

    const convertToTitleCase = () => {
        const words = text.split(' ');
        const capitalizedWords = words.map((word) => {
            const firstLetter = word.charAt(0).toUpperCase();
            const restOfWord = word.slice(1).toLowerCase();
            return firstLetter + restOfWord;
        });
        const convertedText = capitalizedWords.join(' ');
        setText(convertedText);
    };

    const speakText = () => {
        if (charactersCount() > 0) {
            speakMessage.text = text;
            window.speechSynthesis.speak(speakMessage);
            setIsSpeaking(true);
        } else {
            alert("Please enter some text !");
        }
    };

    const stopSpeaking = () => {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
    };

    const copyText = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("success", "Text copied successfully");
    }

    const clearText = () => {
        setText("");
    };

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const calculateWordCount = () => {
        const words = text.trim().split(/\s+/).filter((word) => word !== "");
        return words.length;
    };

    const wordCount = calculateWordCount();

    const charactersCount = () => {
        return text.trim().length;
    };

    const calculateReadingTime = () => {
        const wordsPerMinute = 200; // Assuming an average reading speed of 200 words per minute
        return (wordCount / wordsPerMinute).toFixed(2);
    };

    return (
        <div className="container my-3" style={{color : props.theme === 'light' ? '#042743' : 'white'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleChange} id="myBox" rows={8}
                    style={{backgroundColor : props.theme === 'light' ? 'white' : '#13466e',
                    color : props.theme === 'light' ? '#042743' : 'white'}} />
                </div>
                <div className="d-flex">
                    <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={convertToUpperCase}>
                        Convert to Uppercase
                    </button>
                    <button disabled={text.length === 0} className="btn btn-info mx-1 my-1" onClick={convertToLowerCase}>
                        Convert to Lowercase
                    </button>
                    <button disabled={text.length === 0} className="btn btn-success mx-1 my-1" onClick={convertToTitleCase}>
                        Convert to TitleCase
                    </button>
                    {!isSpeaking && (
                        <button disabled={text.length === 0} className="btn btn-warning mx-1 my-1" onClick={speakText}>
                            Speak
                        </button>
                    )}
                    {isSpeaking && (
                        <button disabled={text.length === 0} className="btn btn-danger mx-1 my-1" onClick={stopSpeaking}>
                            Stop Speaking
                        </button>
                    )}
                    <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={copyText}>
                        Copy Text
                    </button>
                    <button className="btn btn-dark mx-1 my-1" onClick={clearText}>
                        Clear Text
                    </button>
                </div>
            <div className="container my-2">
                <h2>Your Text Summary</h2>
                {wordCount > 0 ? (
                    <>
                        <p>{`${wordCount} words and ${charactersCount()} characters`}</p>
                        <p>{`${calculateReadingTime()} minutes required to read this text.`}</p>
                    </>
                ) : (
                    <p>No text entered</p>
                )}
                <h2>Preview</h2>
                <div className={`container my-3 text-${props.theme === 'light' ? 'success' : 'warning'}`}>
                <p>{text.length > 0 ? text : 'Please write something in the above box to preview..!' }</p>
                </div>
            </div>
        </div>
    );
}
