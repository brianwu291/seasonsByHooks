import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
  summer:{
    text:"Let's hit the beach！",
    iconName:"sun icon"
  },
  winter:{
    text:"Burr it is chilly！",
    iconName:"snowflake icon"
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  }

  if (month < 3 || month > 8) {
    return lat > 0 ? 'winter' : 'summer';
  }
}

//<i class="snowflake icon"></i>
//<i class="sun icon"></i>

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const{text, iconName} = seasonConfig[season];
  //const text = season === 'winter' ? "Burr, it is chilly!" : "Let's hit the beach";
  //const iconName = season === 'winter' ? "snowflake icon" :"sun icon";
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName}`}></i>
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName}`}></i>
    </div>
  );
}
export default SeasonDisplay;
