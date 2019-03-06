import React from 'react';
import MiddlePicture from '../components/MiddlePicture';
import MiddleContainer from '../components/MiddleContainer';
import MiddlePictureRow from '../components/MiddlePictureRow';

export default class YourChoice extends React.Component {

  render() {
    return (
        <div>
          <MiddlePicture/>
          <MiddleContainer/>
          <MiddlePictureRow/>
        </div>
    );
  }
}
