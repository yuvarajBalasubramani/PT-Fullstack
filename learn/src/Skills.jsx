const skill=({skill}) => {
  return (
    <div>
      <h3>skill</h3>
      <ul>
        {skill.map((s, index) => (
          <li key={index}>{s}</li>
        ))}
      </ul>
    </div>
  );
}

export default skill