const { useState } = React;

const StackVisualizer = () => {
  const [stack, setStack] = useState([]);
  const [input, setInput] = useState('');

  const handlePush = () => {
    if (!input.trim()) {
      alert('Please enter a value!');
      return;
    }
    setStack([...stack, input.trim()]);
    setInput('');
  };

  const handlePop = () => {
    if (stack.length === 0) {
      alert('Stack is empty!');
      return;
    }
    const newStack = [...stack];
    newStack.pop();
    setStack(newStack);
  };

  const handleClear = () => {
    setStack([]);
  };

  return (
    <div className="react-container">
      <h1>Stack Visualizer</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter value"
      />
      <div>
        <button onClick={handlePush}>Push</button>
        <button onClick={handlePop}>Pop</button>
        <button onClick={handleClear}>Clear All</button>
      </div>
      <div className="stack-display">
        {stack.length === 0 ? (
          <p className="empty">Stack is empty</p>
        ) : (
          stack.map((item, index) => <p key={index}>{item}</p>)
        )}
      </div>
    </div>
  );
};

ReactDOM.render(<StackVisualizer />, document.getElementById('react-root'));
