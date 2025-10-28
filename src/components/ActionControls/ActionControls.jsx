import './ActionControls.css';

const ActionControls = ({ deleteLastChar, clearText, undo, canUndo }) => {
  return (
    <div className="action-controls">
      <h3>Actions:</h3>
      <div className="action-buttons">
        <button onClick={deleteLastChar} className="delete-btn">🗑️ Delete Last</button>

        <button onClick={clearText} className="clear-btn">🗑️ Clear All</button>
        <button onClick={undo} disabled={!canUndo} className="undo-btn">↶ Undo</button>
      </div>
    </div>
  );
};

export default ActionControls;