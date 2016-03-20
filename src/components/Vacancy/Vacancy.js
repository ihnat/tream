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
import s from './Vacancy.scss';
import Link from '../Link';

class Vacancy extends Component {
    render() {
        return (
            <div className={s.statePage}>
                <img src={require('../../public/logo.png')} className={s.logo} width="38" height="38" alt="React" />
                <div className={s.point}>
                    <h3>JavaScript Developer</h3>
                    <div>Минск</div>
                </div>

                <div className={s.wrapper}>
                    <div className={s.column}>
                        <div className={s.point}>
                            <h3 className={s.point_header}>Описание вакансии</h3>
                            <p>Экстремум функции существенно позиционирует линейно зависимый график функции многих переменных, как и предполагалось. Постоянная величина специфицирует стремящийся двойной интеграл. Дисперсия небезынтересно упорядочивает отрицательный математический анализ, откуда следует доказываемое равенство.</p>
                        </div>

                        <h3 className={s.point_header}>Желаемые навыки и опыт</h3>

                        <div className={s.point}>
                            <h4 className={s.point_header}>Мы ждем, что вы:</h4>

                            <ul>
                                <li>отлично знаете JavaScript;</li>
                                <li>держите руку на пульсе современных технологий;</li>
                            </ul>
                        </div>

                        <div className={s.point}>
                            <h4 className={s.point_header}>Обязанности:</h4>

                            <ul>
                                <li>принятие технических решений;</li>
                                <li>проектирование архитектуры приложения и внешнего API;</li>
                            </ul>
                        </div>
                    </div>
                    <div className={s.column}>
                        <div className={s.point}>
                            <h4 className={s.point_header}>Отрасль</h4>
                            Интернет-технологии
                        </div>
                        <div className={s.point}>
                            <h4 className={s.point_header}>Тип занятости</h4>
                            Полный рабочий день
                        </div>
                        <div className={s.point}>
                            <h4 className={s.point_header}>Опыт работы</h4>
                            Руководитель среднего звена
                        </div>
                        <div className={s.point}>
                            <h4 className={s.point_header}>Должностные обязанности</h4>
                            Разработка и конструирование
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default withStyles(Vacancy, s);
