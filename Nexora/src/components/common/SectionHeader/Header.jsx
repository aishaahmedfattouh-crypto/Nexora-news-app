import "./Header";

function SectionHeader({
  eyebrow,
  title,
  description,
  action,
}) {
  return (
    <header className="section-header">
      <div className="section-header__content">
        {eyebrow && (
          <span className="section-header__eyebrow">
            {eyebrow}
          </span>
        )}

        <h2 className="section-header__title">
          {title}
        </h2>

        {description && (
          <p className="section-header__description">
            {description}
          </p>
        )}
      </div>

      {action && (
        <div className="section-header__action">
          {action}
        </div>
      )}
    </header>
  );
}

export default SectionHeader;