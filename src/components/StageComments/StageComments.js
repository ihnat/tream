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

class StageComments extends Component {

  componentWillMount() {

  }

  render() {

    var items = [5,4,3].map(v => <StageComment />);

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
