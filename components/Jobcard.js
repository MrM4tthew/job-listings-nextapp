import React, { useContext } from "react";
import styles from "../styles/Jobcard.module.scss";

import { AppContext } from "../context/state";

const Jobcard = (props) => {
    const { data } = props;

    const { filters, setFilters, handleClick } = useContext(AppContext);

    const tags = [data.role, data.level]

    if (data.tools) {
        tags.push(...data.tools)
    }
    if (data.languages) {
        tags.push(...data.languages)
    }

    return (
        <div className={styles.container}>
            <div className={styles.leftContainer}>
                <div className={styles.imgContainer}>
                    <img src={data.logo} alt="" />
                </div>
                <div className={styles.descriptionContainer}>
                    <div className={styles.jobnameContainer}>
                        <span>{data.company}</span>
                    </div>
                    <span className={styles.position}>{data.position}</span>
                    <div className={styles.extraDescriptions}>
                        <span>{data.postedAt}</span>
                        <span></span>
                        <span>{data.contract}</span>
                        <span></span>
                        <span>{data.location}</span>
                    </div>
                </div>
            </div>
            <div className={styles.rightContainer}>
                <div className={styles.typesContainer}>
                    {tags.map((dl, index) => {
                        return (
                            <span
                                onClick={() => handleClick(dl)}
                                key={index}
                            >
                                {dl}
                            </span>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Jobcard;
