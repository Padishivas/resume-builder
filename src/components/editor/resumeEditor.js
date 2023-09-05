import { useSelector } from "react-redux";
import {
  add as educationAdd,
  modify as educationModify,
  remove as educationRemove,
} from "../../redux/slices/educationSlice";
import {
  add as employmentAdd,
  modify as employmentModify,
  remove as employmentRemove,
} from "../../redux/slices/employmentSlice";
import {
  add as skillsAdd,
  modify as skillsModify,
  remove as skillsRemove,
} from "../../redux/slices/skillsSlice";
import Header from "./header";
import PersonalDetails from "./personalDetails";
import Section from "./section";
import Summary from "./summary";
const ResumeEditor = () => {
    // const educationState = useSelector(state => state.Education.value);
    // const employmentState = useSelector(state => state.Employment.value);
  const employment = {
    inputs: [
      {
        label: "Job Title",
        col: 6,
        element:"input",
        type: "text",
      },
      {
        label: "Employer",
        col: 6,
        element:"input",
        type: "text",
      },
      {
        label: "Start",
        col: 3,
        element:"input",
        type: "date",
      },
      {
        label: "End",
        col: 3,
        element:"input",
        type: "date",
      },
      {
        label: "City",
        col: 6,
        element:"input",
        type: "text",
      },
      {
        label: "Description",
        col: 12,
        element:"input",
        type: "textarea",
      },
    ],
    title: "Employment History",
    desc: "Show your relevant experience (last 10 years). Use bullet points to note your achievements, if possible - use numbers/facts (Achieved X, measured by Y, by doing Z).",
    redux: {
      actions: {
        add: employmentAdd,
        modify: employmentModify,
        remove: employmentRemove,
      },
      state: "Employment"
    },
  };
  const education = {
    inputs: [
      {
        label: "School",
        col: 6,
        element:"input",
        type: "text",
      },
      {
        label: "Degree",
        col: 6,
        element:"input",
        type: "text",
      },
      {
        label: "Start",
        col: 3,
        element:"input",
        type: "date",
      },
      {
        label: "End",
        col: 3,
        element:"input",
        type: "date",
      },
      {
        label: "City",
        col: 6,
        element:"input",
        type: "text",
      },
      {
        label: "Description",
        col: 12,
        element:"input",
        type: "textarea",
      },
    ],
    title: "Education",
    desc: "A varied education on your resume sums up the value that your learnings and background will bring to job.",
    redux: {
      actions: {
        add: educationAdd,
        modify: educationModify,
        remove: educationRemove,
      },
      state: "Education"
    },
  };
  const skills = {
    title: "Skills",
    desc: "Choose 5 important skills that show you fit the position. Make sure they match the key skills mentioned in the job listing (especially when applying via an online system).",
    inputs: [
      {
        label: "Skill",
        col: 6,
        element:"input",
        type: "text",
      },
      {
        label: "Level",
        col: 6,
        element:"slider",
      },
    ],
    redux : {
      actions: {
        add: skillsAdd,
        modify: skillsModify,
        remove: skillsRemove
      },
      state: "Skill"
    }
  }
  return (
    <div>
      <Header />
      <PersonalDetails />
      <Summary />

      <Section formData={education} />
      <Section formData={employment} />
      <Section formData={skills} />
    </div>
  );
};

export default ResumeEditor;
