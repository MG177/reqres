
import Users from "./components/user";
import "./styles.css";
import Fade from 'react-reveal/Fade';
export default function App() {
  return (
    <div>
      <Fade top>
        <h1>USER LIST</h1>
      </Fade>
      <Fade>
        <Users/>
      </Fade>
    </div>
  )
}

