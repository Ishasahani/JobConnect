function JobCard({
  title,
  company,
  location,
  type,
  isSaved,
  onSave
}) {
  return (
    <div className="job-card">
      <h3>{title}</h3>

      <p>{company}</p>

      <p>📍 {location}</p>

      <p>💼 {type}</p>

      <button onClick={() => onSave(title)}>
        {isSaved ? "❤️ Saved" : "🤍 Save Job"}
      </button>

      <button>View Details</button>
    </div>
  );
}

export default JobCard;