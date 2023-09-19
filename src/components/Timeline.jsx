// Kilde: https://www.youtube.com/watch?v=-rnkToU2_lw

import timelineElements from "../timelineElements.jsx";

import SchoolOutlined from "@mui/icons-material/SchoolOutlined";
import WorkOutlineOutlined from "@mui/icons-material/WorkOutlineOutlined";

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"

import "react-vertical-timeline-component/style.min.css";


export default function Timeline() {
  let workIconStyles = { background: "#ED7C15" }
  let schoolIconStyles = { background: "#ED7C15" }

  return (
    <div>
      <VerticalTimeline>
        {timelineElements.map(element => {
          let isWorkIcon = element.icon === "work"

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkOutlineOutlined className="timelineIcon"/> : <SchoolOutlined  className="timelineIcon"/>}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>
            </VerticalTimelineElement>
          )
        })}
      </VerticalTimeline>
    </div>
  )
}
