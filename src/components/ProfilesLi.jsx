import { useNavigate } from "react-router-dom";
import GreyBorderBtn from "./GreyBorderBtn";

const ProfilesLi = (props) => {
  const navigate = useNavigate();

  return (
    <li className="sidebarLi d-flex">
      <div className="pt-3">
        <div className="xs-profiles fs-12 d-flex align-items-center text-center">
          <img
            className="xs-profiles pointer"
            src={props.profile.image}
            alt="mini-profile-pics"
            onClick={() => navigate(`/profile/${props.profile._id}`)}
          />
        </div>
      </div>

      <ul className="ml-3">
        <li className="pt-3">
          <span
            className="fw-bold pointer"
            onClick={() => navigate(`/profile/${props.profile._id}`)}
          >
            {props.profile.name} {props.profile.surname} |{" "}
          </span>
          <span className="linkedin-d-grey">1st</span>
        </li>
        <li className="py-2 fs-14 linkedin-d-grey">{props.profile.title}</li>
        <li className="pb-3">
          <GreyBorderBtn icon={props.icon} content="Message" />
        </li>
      </ul>
    </li>
  );
};

export default ProfilesLi;
