import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const myImageStyle = {
  width: "20",
  height: "20",
}

type FeatureItem = {
  title: string;
  img: any;
  // Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'CareSpan Data Structure',
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    img: 'img/carespan-logo-mark.png',
    description: (
      <>
        The description to help build your own parser
      </>
    ),
  },
  {
    title: 'Relied upon dictionary',
    // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    img: 'img/carespan-dictionary.png',
    description: (
      <>
        We understand having the description of the data structure is not enough, we also provided the rely upon dictionary.
      </>
    ),
  },
  {
    title: 'Contact Us',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    img: 'img/carespan-contact.png',
    description: (
      <>
        Email to support@carespanhealth.com for any additional information
      </>
    ),
  },
];

function Feature({title, img, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
        <img style={{"height" : "50px", "width" : "50px"}} src={img}></img>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
