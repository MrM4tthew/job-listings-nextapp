import React, { useContext } from 'react'
import styles from '../styles/Filter.module.scss'

import { AppContext } from '../context/state'

const FilterContainer = () => {

    const { filters, setFilters } = useContext(AppContext)

    return (
        <div className={filters.length == 0 ? styles.container : `${styles.container} ${styles.active}`}>
            <div className={styles.filterBox}>
                {filters.map((filter, index) => {
                    return (
                        <span className={styles.filter} key={index}>{filter}</span>
                    )
                })}

                <span className={styles.clear}>Clear</span>
            </div>
        </div>
    )
}

export default FilterContainer
