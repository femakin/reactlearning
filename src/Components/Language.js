import React from 'react'

 function Language({ name, image, id }) {
    return (
      <React.Fragment>
        <div className='language-item' key={id}>
        <div className='language-name'>{name} </div>
        <img className='language-image' src={image} alt=""/>
        {/* <img className='language-image' src='https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg' alt=""/> */}
      </div>
      </React.Fragment>
    )
}

export default Language
