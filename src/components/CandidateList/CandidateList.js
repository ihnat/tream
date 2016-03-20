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
import s from './CandidateList.scss';
import Link from '../Link';
import CandidateListItem from '../CandidateListItem';
import Navigation from '../Navigation';

class CandidateList extends Component {

  render() {

    var CandidateListItemNodes = this.props.candidateList.map(function(candidate) {
      return (
        <CandidateListItem candidate={candidate} />
      )
    });

    return (
        <div className={s.container}>
          <Navigation className={s.nav} />
          <Link className={s.brand} to="/">
            <span className={s.brandTxt}>Tream</span>
          </Link>
          <ul className={s.userList}>

            {CandidateListItemNodes}

          </ul>
        </div>
    );
  }

}

export default withStyles(CandidateList, s);
