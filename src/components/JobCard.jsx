function JobCard(props) {
  return (
    <div className="job-card">
      <h3>{props.title}</h3>

      <p>{props.company}</p>

      <p>📍 {props.location}</p>

      <p>💼 {props.type}</p>

      <button>View Details</button>
    </div>
  );
}

export default JobCard;