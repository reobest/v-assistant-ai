function SpeechRecognition() {
    const speak = (sentence) => {
      const text_speak = new SpeechSynthesisUtterance(sentence);
      text_speak.rate = 1;
      text_speak.pitch = 1;
      window.speechSynthesis.speak(text_speak);
    };
  
    const wishMe = () => {
      const day = new Date();
      const hr = day.getHours();
  
      if (hr >= 0 && hr < 12) {
        speak("Good Morning sir");
      } else if (hr === 12) {
        speak("Good noon sir");
      } else if (hr > 12 && hr <= 17) {
        speak("Good Afternoon sir");
      } else {
        speak("Good Evening sir");
      }
    };
  
    const speakThis = (message) => {
      const speech = new SpeechSynthesisUtterance();
        speech.text = "I did not understand what you said please try again";
    
        if (message.includes('hey') || message.includes('hello')) {
            const finalText = "Hello Maher";
            speech.text = finalText;
        }
    
        else if (message.includes('how are you') || message.includes('are you good')) {
            const finalText = "I am fine boss tell me how can i help you";
            speech.text = finalText;
        }
    
        else if (message.includes('name')) {
            const finalText = "My name is Inertia";
            speech.text = finalText;
        }
    
        else if (message.includes('open google')) {
            window.open("https://google.com", "_blank");
            const finalText = "Opening Google";
            speech.text = finalText;
        }
    
        else if (message.includes('open instagram')) {
            window.open("https://instagram.com", "_blank");
            const finalText = "Opening instagram";
            speech.text = finalText;
        }
    
        else if (message.includes('what is') || message.includes('who is') || message.includes('what are') || message.includes(`Search about`)) {
            window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
            const finalText = "This is what i found on internet regarding " + message;
            speech.text = finalText;
        }
    
        else if (message.includes('wikipedia')) {
            window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
            const finalText = "This is what i found on wikipedia regarding " + message;
            speech.text = finalText;
        }
    
        else if (message.includes('time')) {
            const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" })
            const finalText = time;
            speech.text = finalText;
        }
    
        else if (message.includes('date')) {
            const date = new Date().toLocaleString(undefined, { month: "short", day: "numeric" })
            const finalText = date;
            speech.text = finalText;
        }
    
        else if (message.includes('calculator')) {
            window.open('Calculator:///')
            const finalText = "Opening Calculator";
            speech.text = finalText;
        }
        else if (message.includes('ranging between')) {
            console.log(message)
            window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`,"_blank")
                const finalText = "Searching for what you need, my friend";
                speech.text = finalText;
        }
        else if (message.includes('porn') || message.includes('sex') || message.includes('anal')|| message.includes('rape')
            || message.includes('wepons') || message.includes('drugs') || message.includes('kill') || message.includes('harm') || message.includes('suicide') 
            || message.includes('violance')
        ) {
            const finalText = "Sorry I cant do That";
            speech.text = finalText;
        }
        else {
            window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
            const finalText = "I found some information for " + message + " on google";
            speech.text = finalText;
        }
    
        speech.volume = 1;
        speech.pitch = 1;
        speech.rate = 1;
    
        window.speechSynthesis.speak(speech);
    };
  
    const startRecognition = () => {
      const recognition = new (window.SpeechRecognition ||
        window.webkitSpeechRecognition)();
      recognition.onresult = (event) => {
        const current = event.resultIndex;
        const transcript = event.results[current][0].transcript;
        speakThis(transcript.toLowerCase());
      };
      recognition.start();
    };
  
    window.addEventListener("load", () => {
      speak("I am Ready To Assist You");
      wishMe();
    });
  
    return (
      <button className="talk" onClick={startRecognition}>
        <i className="fas fa-microphone-alt"></i>
      </button>
    );
  }
  
  export default SpeechRecognition;