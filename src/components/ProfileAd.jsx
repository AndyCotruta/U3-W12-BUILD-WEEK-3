import BlueBorderBtn from "./BlueBorderBtn";

const ProfileAd = () => {
  return (
    <ul className="sidebarUL mb-1">
      <li className="pt-2 d-flex linkedin-black justify-content-end">
        <span className="fw-bold">Ad</span>
        <div className="ml-2 d-flex align-items-center">
          <img src="Vector.png" alt="" />
        </div>
      </li>
      <li className="pt-2 fs-14 text-center linkedin-d-grey">
        Get the latest jobs and industry news
      </li>
      <li className="pt-2 text-center d-flex justify-content-center align-items-center">
        <div className="mini-profile d-flex align-items-center">
          Profile Picture
        </div>
        <div>
          <img
            className="mini-profile"
            src="https://media-exp1.licdn.com/dms/image/D4E0BAQFPKDLRh1og1A/company-logo_100_100/0/1667565381322?e=1678924800&v=beta&t=W-Ze0PczOmn9aHyQ-7yCTk53Nj4u4qAw6RZQrmBz_Os"
            alt=""
          />
        </div>
      </li>
      <li className="pt-3 text-center linkedin-d-grey">
        <span>CurrentUser</span>, you might like to follow{" "}
        <span className="fw-bold linkedin-d-grey">Fraport AG</span>
      </li>
      <li className="py-3 text-center">
        <BlueBorderBtn content="Follow" />
      </li>
    </ul>
  );
};

export default ProfileAd;
