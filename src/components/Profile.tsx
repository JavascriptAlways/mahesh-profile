const Profile = () => {
  return (
    <div className="profile">
      <img src="profile-image.jpg" alt="Profile" />
      <div className="profile-details">
        <h2>John Doe</h2>
        <h3>Software Engineer</h3>
        <p>Experienced software engineer with expertise in frontend and backend development.</p>
        <h4>Skills:</h4>
        <ul>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>SQL / NoSQL Databases</li>
          <li>HTML / CSS</li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;