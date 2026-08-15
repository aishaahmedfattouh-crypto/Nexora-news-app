import "./LoadingState.css";

function LoadingState() {
  return (
    <div
      className="loading-state"
      role="status"
      aria-label="Loading news"
    >
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          className="loading-card"
          key={index}
        >
          <div className="loading-card__image" />

          <div className="loading-card__content">
            <span />
            <span />
            <span />
          </div>
        </div>
      ))}
    </div>
  );
}

export default LoadingState;