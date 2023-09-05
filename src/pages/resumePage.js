import ResumeEditor from "../components/editor/resumeEditor";
import ResumePreview from "../components/preview/resumePreview"

import "../styles/resumePage.scss";

const ResumePage = () => {
  return (
    <div className="resumePage-container">
      <ResumeEditor />
      <ResumePreview />
    </div>
  );
};

export default ResumePage;
