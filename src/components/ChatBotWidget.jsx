import React, { useState } from 'react';
import { FiMessageSquare } from 'react-icons/fi'; // install react-icons if not done

const ChatBotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi there! 👋 Ask me anything about my portfolio.' },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { from: 'user', text: input };
    const botMessage = {
      from: 'bot',
      text: generateBotReply(input),
    };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput('');
  };

  const generateBotReply = (userInput) => {
    const lower = userInput.toLowerCase();

    if (lower.includes('project') || lower.includes('work')) {
      return 'You can check out my projects in the Projects section! 💻';
    }

    if (lower.includes('cv') || lower.includes('resume')) {
      return 'You can download my CV using the button on the homepage 📄';
    }

    if (lower.includes('contact') || lower.includes('email')) {
      return 'You can contact me at: ojanijjayasinghe123@gmail.com 📧';
    }

    if (lower.includes('skills') || lower.includes('technologies')) {
      return 'I’m skilled in R, Python, React, Node.js, SQL, and UI/UX tools like Figma 🛠️';
    }

    if (lower.includes('experience')) {
      return 'I have experience in full-stack development, UI/UX design, and data engineering. 🔧';
    }

    if (lower.includes('education') || lower.includes('university')) {
      return 'I’m currently studying Data Science at SLIIT 🎓';
    }

    if (lower.includes('availabile') || lower.includes('freelance')) {
      return 'Yes, I’m available for freelance or collaborative work. Let’s connect! 🤝';
    }

    if (lower.includes('github')) {
      return 'Check my GitHub: https://github.com/OjaniJayasinghe 🐙';
    }

    if (lower.includes('linkedin')) {
      return 'Here’s my LinkedIn: https://www.linkedin.com/in/ojani-jayasinghe-67581225b 🔗';
    }

    if (lower.includes('hobbies') || lower.includes('interests')) {
      return 'I enjoy coding, designing, reading tech blogs, and playing guitar 🎸';
    }

    

    return "That's interesting! I’ll get back to you soon 😊";
  };

  return (
    <div style={styles.container}>
      {isOpen && (
        <div style={styles.chatBox}>
          <div style={styles.chatHeader}>💬 Ask Me Anything</div>
          <div style={styles.chatContent}>
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  ...styles.message,
                  alignSelf: msg.from === 'user' ? 'flex-end' : 'flex-start',
                  backgroundColor: msg.from === 'user' ? '#e0e0e0' : '#00bcd4',
                  color: msg.from === 'user' ? '#000' : '#fff',
                }}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div style={styles.inputContainer}>
            <input
              style={styles.input}
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button style={styles.sendBtn} onClick={handleSend}>Send</button>
          </div>
        </div>
      )}

      <div style={styles.iconButton} onClick={() => setIsOpen(!isOpen)}>
        <FiMessageSquare size={26} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: 'fixed',
    bottom: 24,
    right: 24,
    zIndex: 9999,
  },
  iconButton: {
    backgroundColor: '#00bcd4',
    borderRadius: '50%',
    width: 50,
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    boxShadow: '0 0 10px rgba(0,0,0,0.2)',
    cursor: 'pointer',
  },
  chatBox: {
    width: 320,
    height: 400,
    backgroundColor: '#fff',
    borderRadius: 10,
    boxShadow: '0 0 12px rgba(0,0,0,0.2)',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 10,
    overflow: 'hidden',
  },
  chatHeader: {
    backgroundColor: '#00bcd4',
    color: '#fff',
    padding: '10px 15px',
    fontWeight: 'bold',
  },
  chatContent: {
    flex: 1,
    padding: 10,
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
  },
  message: {
    padding: '10px 14px',
    borderRadius: 16,
    maxWidth: '75%',
    fontSize: 14,
  },
  inputContainer: {
    display: 'flex',
    borderTop: '1px solid #ddd',
    padding: 8,
  },
  input: {
    flex: 1,
    border: 'none',
    outline: 'none',
    fontSize: 14,
    padding: '10px',
  },
  sendBtn: {
    backgroundColor: '#00bcd4',
    color: '#fff',
    border: 'none',
    padding: '8px 12px',
    borderRadius: 6,
    marginLeft: 8,
    cursor: 'pointer',
  },
};

export default ChatBotWidget;
