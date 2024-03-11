function Text({ onClick, text, positionTop, isSelected }) {

  const className = isSelected ? 'clicked' : 'unclicked';

  return (
    <div className={className} style={{ position: 'absolute', top: `${positionTop}px`, left: '20px', fontSize: '12px', fontWeight: 'bold' }}>
      <div onClick={onClick} style={{ cursor: 'pointer' }}>{text}</div>
      <div style={{ height: '20px', cursor: 'default', pointerEvents: 'none' }}></div>
    </div>
  );
}

export default Text;