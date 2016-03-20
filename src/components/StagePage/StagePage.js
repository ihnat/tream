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
import s from './StagePage.scss';
import Link from '../Link';
import ApplicantStages from '../ApplicantStages';
import StageComments from '../StageComments';
import CandidateList from '../CandidateList';
import SmallProfile from '../SmallProfile';

class StagePage extends Component {
  render() {
      var candidateList = [
          {
              name: "Piotr Warsawski",
              role: "Senior Rails Developer",
              status: "Free",
              pic: require('../../public/pic1.jpeg')
          },
          {
              name: "Kiril Pliashkevich",
              role: "Teamlead",
              status: "Free",
              pic: require('../../public/pic2.jpeg')
          },
          {
              name: "Max Troicki",
              role: "Front-end",
              status: "Free",
              pic: require('../../public/pic3.jpeg')
          }
      ];

    return (
      <div className={s.statePage}>
        <ApplicantStages title={this.props.title}/>
        <h3>{this.props.title}</h3>
        <div className={s.statePage__main}>
          <div className={s.statePage__left}>
            <CandidateList candidateList={candidateList} />
          </div>
          <div className={s.statePage__right}>
            <SmallProfile />
            <StageComments />
          </div>
        </div>
      </div>
    );
  }

}

export default withStyles(StagePage, s);
