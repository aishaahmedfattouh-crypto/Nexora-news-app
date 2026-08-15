import "./ErrorState.css";

function ErrorState({
  message = "Something went wrong.",
}) {
  return (
    <div className="error-state">
      <div className="error-state__icon">
        !
      </div>

      <div>
        <h3>We couldn't load the news</h3>

        <p>{message}</p>
      </div>
    </div>
  );
}

export default ErrorState;