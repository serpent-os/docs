import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type DocSection = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
  link: string;
};

const DocList: DocSection[] = [
  {
    title: 'Developers',
    Svg: require('@site/static/img/code.svg').default,
    description: (
      <>
        Learn how to develop tooling and solutions for Serpent OS
      </>
    ),
    link: 'docs/developers/intro',
  },
  {
    title: 'Packagers',
    Svg: require('@site/static/img/package.svg').default,
    description: (
      <>
        Get to grips with our advanced packaging features using easy to follow guides
      </>
    ),
    link: 'docs/packaging/intro',
  },
  {
    title: 'Users',
    Svg: require('@site/static/img/user.svg').default,
    description: (
      <>
        Need to know how something works? You've come to the right place.
      </>
    ),
    link: 'docs/users/intro',
  },
];

function Doc({title, Svg, description, link}: DocSection) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
        <div className="text--center padding-horiz--md">
          <Link href={link}>
            <h3>{title}</h3>
          </Link>
          <p>{description}</p>
        </div>
    </div>
  );
}

export default function DocSections(): JSX.Element {
  return (
    <section className={styles.docSection}>
      <div className="container">
        <div className="row">
          {DocList.map((props, idx) => (
            <Doc key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
