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
        How to develop Serpent OS
      </>
    ),
    link: '',
  },
  {
    title: 'Packagers',
    Svg: require('@site/static/img/package.svg').default,
    description: (
      <>
        How to build packages for Serpent OS
      </>
    ),
    link: '',
  },
  {
    title: 'Users',
    Svg: require('@site/static/img/user.svg').default,
    description: (
      <>
        Documentation on how to use Serpent OS
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
