import React from "react";
import "./index.css";
import Language from "./Components/Language/";
import Test from "./Components/Test/";

const languageList = [
  {
    id: 1,
    name: "HTML & CSS",
    image:
      "https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg",
  },
  {
    id: 2,
    name: "JavaScript",
    image:
      "https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/es6.svg",
  },
  {
    id: 3,
    name: "React",
    image:
      "https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/react.svg",
  },
  {
    id: 4,
    name: "Ruby",
    image:
      "https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/ruby.svg",
  },
  {
    id: 5,
    name: "Ruby on Rails",
    image:
      "https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/rails.svg",
  },
  {
    id: 6,
    name: "Python",
    image:
      "https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/python.svg",
  },
];

function App() {
  const getLanguageItem = languageList.map((item) => 
  <Language 
  key={item.id}
  name={item.name}
  image={item.image}
/>
  )
  return (
    <div>
      <h1>List of Languages</h1>
      <div className="language">
        { getLanguageItem }

        {/* {languageList.map((item) => {
          return (
            <div className="language-item" key={item.id}>
              <div className="language-name">{item.name} </div>
              <img className="language-image" src={item.image} alt={item.name} />
            </div>
          );
        })} */}
      </div>
    </div>
  );
}

export default App;
