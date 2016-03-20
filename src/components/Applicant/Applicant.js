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
import s from './Applicant.scss';
import Link from '../Link';

class Applicant extends Component {
    render() {
        return (
            <div className={s.statePage}>
                <img src={require('../../public/ava1.jpg')} className={s.img} width="100" />
                <h2>Thad Goddard</h2>
                <div className={s.header}>
                    <span>Желаемая позиция: </span>
                    <span className={s.want_position}>Head of Account Management</span>
                </div>

                <div className={s.point}>
                    <h3 className={s.point_header}>Навыки</h3>
                    <ul className={s.list}>
                        <li>Java (8 лет)</li>
                        <li>Python (2 года)</li>
                        <li>Erlang (1 год)</li>
                    </ul>
                </div>

                <div className={s.point}>
                    <h3 className={s.point_header}>Образование</h3>
                    <ul className={s.list}>
                        <li>Белорусский Государственный  Университет  Информатики и Радиоэлектронике (БГУИР), факультет «Заочного обучения», - «Системы радиосвязи, радиовещания и телевидения»</li>
                        <li>Высший Государственный колледж связи, факультет электросвязи, специальность –  «Техник по телекоммуникациям.  Линейно-кабельные сооружения».</li>
                    </ul>
                </div>

                <div className={s.point}>
                    <h3 className={s.point_header}>О себе</h3>
                    <p className={s.point_p}>коммуникабельность, организованность, грамотная речь, требовательность, добросовестность, уверенность, активная жизненная позиция.</p>
                </div>
            </div>
        );
    }

}

export default withStyles(Applicant, s);
