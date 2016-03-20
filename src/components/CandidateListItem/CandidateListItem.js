/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './CandidateListItem.scss';
import Link from '../Link';
import Navigation from '../Navigation';

class CandidateListItem extends Component {

  render() {

    var candidate = this.props.candidate;

    return (
        <li className={s.userListItem}>
          <div className={s.userListItem__pic}>
            <img src={candidate.pic} width="38" height="38" alt="React" />
          </div>
          <div className={s.userListItem__block}>
            <Link to="/" className={s.userListItem__name}>{candidate.name}</Link>
            <p className={s.userListItem__role}>{candidate.role}</p>
            <span className={s.userListItem__status}>{candidate.status}</span>
          </div>
        </li>
    );
  }

}

export default withStyles(CandidateListItem, s);
