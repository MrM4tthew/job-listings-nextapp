import React, { useContext } from 'react'
import styles from '../styles/Filter.module.scss'

import { AppContext } from '../context/state'

const FilterContainer = () => {

    const { rules, setRules } = useContext(AppContext)

    return (
        <div className={rules.length == 0 ? styles.container : `${styles.container} ${styles.active}`}>
            <div className={styles.filterBox}>
                {rules.map((rule, index) => {
                    return (
                        <span className={styles.filter} key={index}>{rule}</span>
                    )
                })}

                <span className={styles.clear}>Clear</span>
            </div>
        </div>
    )
}

export default FilterContainer
