import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Consistent",
    Svg: require("@site/static/img/undraw_experience_design_re_dmqq.svg")
      .default,
    description: (
      <>
        Help provide the best customer experience across GSA websites by
        implementing a consistent look and feel.
      </>
    ),
  },
  {
    title: "Compliant",
    Svg: require("@site/static/img/undraw_done_re_oak4.svg").default,
    description: (
      <>
        Ensure your website follows the guidance of the 21st Century IDEA Act,
        as well as GSA specific web policies.
      </>
    ),
  },
  {
    title: "Up to date",
    Svg: require("@site/static/img/undraw_building_websites_i78t.svg").default,
    description: (
      <>
        New guidance is released regularly, check here for new and updated
        guidance as it becomes available.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p className="line-height-sans-6">{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
