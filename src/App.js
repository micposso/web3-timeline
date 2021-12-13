import "./App.css";
import { ReactComponent as WorkIcon } from "./work.svg";
import { ReactComponent as SchoolIcon } from "./school.svg";

import timelineElements from "./timelineElements";

import Navigation from "./components/Navigation"

import Chart1 from "./components/Chart1"
import Chart2 from "./components/Chart2"

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

function App() {
  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };

  return (
    <div>
      <Navigation />
      <div class="timeline-header">
        <h1 className="title">Web 1.0</h1>
        <h3>Web 1.0 was the first generation of the world wide web, also referred to as the read-only web. Web 1.0 began as an information place for businesses to broadcast their information and only allowed users to search for information and read it.</h3>
      </div>
      <VerticalTimeline>
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
              visible={element.visible}
            >
              <h1 className="vertical-timeline-element-title">
                {element.title}
              </h1>
                {element.image && <div class="module-image"><img class="image" src={`./images/${element.image}`} /></div>}
                {element.chart === "chart1" && <div class="chart-module"><Chart1 /></div>}
                {element.chart === "chart2" && <div class="chart-module"><Chart2 /></div>}
                {element.graphic && <div class="graphic-module"><img class="image" src={`./images/${element.graphic}`} /></div>}
              <p id="description">{element.description}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default App;
