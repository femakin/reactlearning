import React from 'react';
import './index.css' 
import Language from './Components/Language';

const languageList = [
  {
    id: 1,
    name: 'HTML & CSS',
    image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg'
  },
  {
    id: 2,
    name: 'JavaScript',
    image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/es6.svg'
  },
  {
    id: 3,
    name: 'React',
    image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/react.svg'
  },
  {
    id: 4,
    name: 'Ruby',
    image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/ruby.svg'
  },
  {
    id: 5,
    name: 'Ruby on Rails',
    image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/rails.svg'
  },
  {
    id: 6,
    name: 'Python',
    image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/python.svg'
  }
];


function App() {
    return (
      <div>
        <h1>List of Languages</h1>
        <div className="language">
         
        {languageList.map((languageItem) => {
            return (
              // Call the Language component and pass props to it
              <Language 
                key={languageItem.id}
                name={languageItem.name}
                image={languageItem.image}
              />
              
            )
          })}

        </div>
      </div>
    );
}

export default App;
