import React from 'react'

 function Language({ name, image }) {
    return (
        <div className='language-item'>
        <div className='language-name'>{name} </div>
        <img className='language-image' src={image} alt=""/>
        {/* <img className='language-image' src='https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg' alt=""/> */}
      </div>
    )
}

export default Language
