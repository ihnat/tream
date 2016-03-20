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
import s from './StageComment.scss';
import Link from '../Link';

class StageComment extends Component {

  componentWillMount() {

  }

  render() {

    return (
      <li className={s.li}>
        <div className={s.head}>
          <img src={this.props.person.img} style={{float: 'left'}} width="35" />
          <div>
            <span className={s.name}>Eduardo Vallento </span>
            <span>added a comment </span>
            <span className={s.published}>less than a minute ago </span>
          </div>
          <div>
            <span>Visible to</span> <Link to="/" >everyone</Link>
          </div>
        </div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium assumenda aut dolores, ducimus et fugiat ipsum libero minus nam nisi numquam praesentium quo ratione saepe sit soluta voluptas voluptatem.
        </div>
      </li>
    );
  }

}

export default withStyles(StageComment, s);
