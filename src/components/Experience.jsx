import { useEffect } from "react";
import { getExperienceAction } from "../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";

const Experience = () => {
  const experiences = useSelector((state) => state.experience.expData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExperienceAction());
  }, []);

  return (
    <div className="experience-section ">
      <div className="d-flex experience-subsection">
        <h3 className="activity-title fs-20 fw-700 d-block">Experience</h3>
        {/* this gets displayed when on user page */}
        <div>
          {" "}
          <button className="experience-buttons">+</button>
          <button className="experience-buttons">-</button>
        </div>
        {/* end here */}
      </div>
      {experiences.map((experience) => (
        <div className="experience-content">
          {/* <div className="experience-logo">
            <img
              src="https://media-exp1.licdn.com/dms/image/C4D0BAQEFWO_s8a0FHQ/company-logo_200_200/0/1647618816994?e=1678924800&v=beta&t=odzOEdC0guAqvuVCim8HVjfOOqC4KwNoQmSMZQ69EPg"
              alt=""
            />
          </div> */}
          <div>
            <p className="fs-16 fw-800">{experience.role}</p>
            <p className="fs-14">{experience.company}</p>
            <span className="fs-14 ld-grey">
              from {experience.startDate.slice(0, 10)}
            </span>
            {/* <span className="fs-14 ld-grey"> until </span>
            <span className="fs-14 ld-grey">
              {experience.updatedAt.slice(0, 10)}
            </span> */}
            <p className="fs-14 ld-grey">{experience.area}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
