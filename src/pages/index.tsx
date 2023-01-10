import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { MarkGithubIcon, RepoIcon } from "@primer/octicons-react";

import styles from "./index.module.css";
import Link from "@docusaurus/Link";
import clsx from "clsx";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="Homepage" wrapperClassName={styles.layout}>
      <div className={styles.contain}>
        <img
          src="img/profile.gif"
          className={styles.profile}
          alt="Profile Picture"
        />
        <div className="hero-content">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <ul className={styles["dynamic-text"]}>
            <li>
              <span>Javascript Developer</span>
            </li>
            <li>
              <span>Typescript Developer</span>
            </li>
            <li>
              <span>Discord Bot Developer</span>
            </li>
            <li>
              <span>Backend Developer</span>
            </li>
          </ul>
        </div>
        <div className={styles.buttons}>
          <Link
            className={clsx(
              "button button--outline button--primary button--lg",
              styles.button
            )}
            to="/projects"
          >
            <RepoIcon size={24} />
            Projects
          </Link>
          <Link
            className={clsx(
              "button button--outline button--primary button--lg",
              styles.button
            )}
            to="https://github.com/FLzyy"
          >
            <MarkGithubIcon size={24} />
            Code
          </Link>
        </div>
      </div>
    </Layout>
  );
}
