import React, { Component } from 'react'

export class Language extends Component {
  render() {
    return (
        <div className='language-item'>
        <div className='language-name'>{this.props.name} </div>
        <img className='language-image' src={this.props.image} alt=""/>
        {/* <img className='language-image' src='https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg' alt=""/> */}
      
        
      
      
      
    
      
      </div>
    )
  }
}

export default Language
