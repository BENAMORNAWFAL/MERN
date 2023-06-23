import React, { Component } from 'react'
import SubContents from './SubContents';
import Advertisement from './Advertisement';


export default class Main extends Component {
  render() {
    return (
      
        <div className='main'>
          <div className='block2'>
              <SubContents />
              <SubContents />
              <SubContents />
          </div>
            
            <Advertisement />
        </div>
      
    )
  }
}
