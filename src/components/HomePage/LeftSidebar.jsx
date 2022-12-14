const LeftSidebar = () => {
  return (
    <>
      <div className="profile-cover">
        bg
        <div className="profile-picture">pic</div>
        <div className="profile-text">
          <p className="username fs-24 fw-700 margin-0">User Name</p>
          <p className="user-role fs-16">IT Specialist</p>
        </div>
      </div>
      <div>
        <p>
          Who's viewed your <br />
          profile
        </p>
        <p>
          Impressions of your <br />
          post
        </p>
      </div>
      <hr></hr>
      <div>
        <p>
          Access exclusive tools & <br />
          insights
        </p>
        <p>Try premium for free</p>
      </div>
      <hr></hr>
      <div>
        <p>My items</p>
      </div>
      <hr></hr>
    </>
  );
};

export default LeftSidebar;
