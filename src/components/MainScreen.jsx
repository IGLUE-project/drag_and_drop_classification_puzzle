import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from "./GlobalContext";
import './../assets/scss/main.scss';
import MainDropComponent from './MainDropComponent.jsx';
const MainScreen = (props) => {
  const { escapp, appSettings, Utils, I18n } = useContext(GlobalContext);
  let [showModalStart, setShowModalStart] = useState(true);
  let [showModalEnd, setShowModalEnd] = useState(false);
  let [showModalCodes, setShowModalCodes] = useState(false);
  let [showModalFeedback, setShowModalFeedback] = useState(false);
  const [centerImages, setCenterImages] = useState(JSON.parse(appSettings.initialImages || "[]"));
  const [leftImages, setLeftImages] = useState([]);
  const [rightImages, setRightImages] = useState([]);
  const [processingSolution, setProcessingSolution] = useState(false);
  const [passed, setPassed] = useState(undefined);

  const getCurrentAnswer = () => {
    const orderedleftImages = leftImages.map(x => x.id).sort((a, b) => a - b).join("_");
    const orderedrightImages = rightImages.map(x => x.id).sort((a, b) => a - b).join("_");
    return orderedleftImages + ";" + orderedrightImages;
  }
     
  const onClickCheck = () => {
    if (processingSolution) {
      return;
    }
    setProcessingSolution(true);
    checkSolution();
  }

  const checkSolution = () => { 
    let audio;
    const solution = getCurrentAnswer();
    
    escapp.checkNextPuzzle(solution, {}, (success, erState) => {
      Utils.log("Check solution Escapp response", success, erState);
      try {
        if (success) {
          setPassed(true);
          audio = document.getElementById("audio_success");
        } else {
          setPassed(false);
          audio = document.getElementById("audio_failure");
        }
        audio.play();

        setTimeout(() => {
          if (success) {
            props.onPuzzleSolved(solution);
          } else {
            setPassed(undefined);
            setProcessingSolution(false);
          }
        }, 1500);

      } catch(e){
        Utils.log("Error in checkNextPuzzle",e);
      }
    });
  }
  
  return <div className={passed !== undefined ? `passed-${passed}` : ""}>
    <MainDropComponent 
          passed = {passed} 
          setCenterImages={setCenterImages}
          setLeftImages={setLeftImages}
          setRightImages={setRightImages}
          rightImages={rightImages}
          leftImages={leftImages}
          centerImages={centerImages}/>
      <div className='confirm-div'>
          <button className="confirm" onClick={onClickCheck}>{appSettings.confirmationText}</button> 
      </div>
      <audio id="audio_failure" src={appSettings.soundNok} autostart="false" preload="auto" />
      <audio id="audio_success" src={appSettings.soundOk} autostart="false" preload="auto" />
    </div>;
};

export default MainScreen;



