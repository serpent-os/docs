import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Developers',
    Svg: require('@site/static/img/code.svg').default,
    description: (
      <>
        Learn how to develop tooling and solutions for Serpent OS
      </>
    ),
    link: '',
  },
  {
    title: 'Packagers',
    Svg: require('@site/static/img/package.svg').default,
    description: (
      <>
        Get to grips with our advanced packaging features using easy to follow guides
      </>
    ),
    link: '',
  },
  {
    title: 'Users',
    Svg: require('@site/static/img/user.svg').default,
    description: (
      <>
        Need to know how something works? You've come to the right place.
      </>
    ),
    link: '',
  },
];

function Feature({title, Svg, description, link}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <Link href={link}>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </Link>
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
