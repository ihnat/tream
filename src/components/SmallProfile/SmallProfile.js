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
import s from './SmallProfile.scss';
import Link from '../Link';
import Navigation from '../Navigation';

class SmallProfile extends Component {

  render() {
    return (
      <div className={s.smallProfile}>
        <div className={s.smallProfile__navigation}>
          <a href="/">Good</a>
          <a href="/">Bad</a>
        </div>

        <div className={s.smallProfile__block}>
          <div className={s.smallProfile__pic}>
            <img src={require('./logo-small.png')} width="38" height="38" alt="React" />
          </div>
          <div className={s.smallProfile__info}>
            <h3 className={s.smallProfile__title}>Max Troicki</h3>
            <p className={s.smallProfile__role}>Front-end</p>
          </div>
        </div>
      </div>
    );
  }

}

export default withStyles(SmallProfile, s);
