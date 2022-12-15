import { useEffect, useState } from "react";
import {
  fetchProfile,
  getExperienceAction,
  GET_EXPERIENCE,
} from "../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { HiOutlinePlus } from "react-icons/hi";
import { HiOutlinePencil } from "react-icons/hi";
import ExperienceModal from "./ExperienceModal";
import { useParams } from "react-router-dom";

const Experience = (props) => {
  const experiences = useSelector((state) => state.experience.expData);
  const [modalShow, setModalShow] = useState(false);
  const endPoint = "https://striveschool-api.herokuapp.com/api/profile/";
  const accessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk4NGEyNzQwNWJkYTAwMTUwOTE4NDQiLCJpYXQiOjE2NzA5MjQ4MzksImV4cCI6MTY3MjEzNDQzOX0.x2Rft_8jW0eH4mFzHLq669IFCzGAFGCn7LuvHCf2udU";
  const options = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  };
  const params = useParams();
  const id =
    params.userId === props.currentProfile._id
      ? `63970d18c96dfb001521a5c9/experiences`
      : `${props.currentProfile._id}/experiences`;
  const action = GET_EXPERIENCE;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProfile(endPoint, options, id, action));
  }, [props.currentProfile._id]);

  return (
    <div className="experience-section ">
      <div className="d-flex experience-subsection">
        <h3 className="activity-title fs-20 fw-700 d-block">Experience</h3>
        {/* this gets displayed when on user page */}
        <div>
          {" "}
          <button
            className="experience-buttons"
            onClick={() => setModalShow(true)}
          >
            <HiOutlinePlus className="experience-buttons-icon" />
          </button>
          <button className="experience-buttons">
            <HiOutlinePencil className="experience-buttons-icon" />
          </button>
          <ExperienceModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
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
