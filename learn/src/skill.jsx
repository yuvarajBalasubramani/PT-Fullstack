const skill=({skill}) => {
  return (
    <div className="skill">
      <h3>{skill.name}</h3>
      <p>{skill.description}</p>
      <ul>
        {skill.topics.map((topic, index) => (
          <li key={index}>{topic}</li>
        ))}
      </ul>
    </div>
  );
}

export default skill;