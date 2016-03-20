/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './StageComments.scss';
import Link from '../Link';
import StageComment from '../StageComment';
import DisqusThread from '../DisqusThread';

class StageComments extends Component {

  componentWillMount() {

  }

  render() {

    var items =  [{
      name: 'Silas Lenny',
      position: 'Head of Account Management',
      img: require('../../public/ava1.jpg')
    }, {
      name: 'Riley Justin',
      position: 'Data Center Support Specialis',
      img: require('../../public/ava2.jpg')
    }, {
      name: 'Thad Goddard',
      position: 'Information Technology Manager',
      img: require('../../public/ava3.jpg')
    }, {
      name: 'Ryan Easton',
      position: 'Technical Support Engineer',
      img: require('../../public/ava4.jpg')
    }].map((v, i) => <StageComment person={v} key={i} />);

    return (
      <div>

        <ul className={s.comments}>
          {items}
        </ul>
        <textarea className={s.textarea} />
        <div style={{textAlign: 'right'}}>
          <button className={s.addComment}>Add Comment</button>
        </div>
      </div>
    );
  }

}

export default withStyles(StageComments, s);
