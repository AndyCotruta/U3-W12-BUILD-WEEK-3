import GreyBorderBtn from "./GreyBorderBtn";

const ProfilesLi = (props) => {
  return (
    <li className="sidebarLi d-flex">
      <div className="pt-3">
        <div className="xs-profiles fs-12 d-flex align-items-center text-center">
          Profile Picture
        </div>
      </div>

      <ul className="ml-3">
        <li className="pt-3">
          <span className="fw-bold">Profile Name | </span>
          <span className="linkedin-d-grey">1st</span>
        </li>
        <li className="py-2 fs-14 linkedin-d-grey">Current Job</li>
        <li className="pb-3">
          <GreyBorderBtn icon={props.icon} content="Message" />
        </li>
      </ul>
    </li>
  );
};

export default ProfilesLi;
