import message from "../Icon/Send.svg";
import plus from "../Icon/Plus.svg";

const ProfileSection = () => {
  return (
    <div className="profile-main">
      <div className="profile-cover">
        {" "}
        <img src="https://images.ctfassets.net/7thvzrs93dvf/wpImage18643/2f45c72db7876d2f40623a8b09a88b17/linkedin-default-background-cover-photo-1.png?w=790&h=196&q=90&fm=png" alt="" />
        <div className="profile-picture">
          <img src="https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg" alt="" />
        </div>
      </div>
      <div className="profile-text-area">
        <div className="profile-text">
          <p className="username">User Name</p>
          <p className="user-role">IT Specialist</p>
          <div className="contact-location">
            <p className="location">Location, Area</p>
            <p className="contact-info">Contact info</p>
          </div>
        </div>
        <div className="profile-buttons">
          <button className="first-button">
            <img src={message} alt="" />
            Message
          </button>
          <button className="second-button">
            <img src={plus} alt="" />
            Follow
          </button>
          <button className="third-button">More</button>
        </div>
      </div>
    </div>
  );
};
export default ProfileSection;
