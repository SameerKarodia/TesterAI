import WebcamCapture from "../Components/WebcamCapture";
import { TextAnalyzer } from "../Components/TextAnalyzer";
import EventLogger from "../Components/EventLogger";
import styles from "./CheckinPage.module.css";
import { Link } from "react-router-dom";

function CheckinPage() {
  const emotion = "";

  return (
    <div className={styles.checkinContainer}>
      <div className={styles.checkinHeader}>
        <h1>Emotion Detection</h1>
        <Link to="/">
          <button>Log Out</button>
        </Link>
      </div>

      <div className={styles.checkinWebcam}>
        <WebcamCapture />
      </div>
      <div className={styles.checkinText}>
        <TextAnalyzer />
      </div>
      <div className={styles.checkinEmotion}>
        <EventLogger emotion={emotion} />
      </div>
    </div>
  );
}

export default CheckinPage;
