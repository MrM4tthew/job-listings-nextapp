import React, { useContext } from 'react'
import styles from '../styles/Filter.module.scss'

import { AppContext } from '../context/state'

const FilterContainer = () => {

    const { filters, deleteAllClick, deleteClick } = useContext(AppContext)

    return (
        <div className={filters.length == 0 ? `${styles.container}` : `${styles.container} ${styles.active}`}>
            <div className={styles.filterBox}>
                <div className={styles.leftFilter}>
                    {filters.map((filter, index) => {
                        return (
                            <div className={styles.filterContainer} key={index}>
                                <span className={styles.filter}>{filter}</span>
                                <span className={styles.delete} onClick={() => deleteClick(filter)}>x</span>
                            </div>

                        )
                    })}
                </div>
                <div className={styles.rightFilter}>
                    <span className={styles.clear} onClick={deleteAllClick}>Clear</span>
                </div>

            </div>
        </div>
    )
}

export default FilterContainer
