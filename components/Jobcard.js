import React, { useContext } from "react";
import styles from "../styles/Jobcard.module.scss";

import { AppContext } from "../context/state";

const Jobcard = (props) => {
    const { data } = props;

    const { rules, click, setRules, setClick } = useContext(AppContext);

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
                    <span
                        onClick={() => {
                            if (!click.includes("role")) {
                                setRules([...rules, data.role]);
                                setClick([...click, "role"])
                            }
                        }}
                    >
                        {data.role}
                    </span>
                    <span onClick={() => {
                        if (!click.includes("level")) {
                            setRules([...rules, data.level])
                            setClick([...click, "level"])
                        }

                    }}>
                        {data.level}
                    </span>
                    {data.languages.map((dl, index) => {
                        return (
                            <span
                                onClick={() => {
                                    if (!rules.includes(dl)) {
                                        setRules([...rules, dl]);
                                        // if (!click.includes("rule")) {
                                        setClick([...click, "rule"])
                                        // }
                                    }
                                }}
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
