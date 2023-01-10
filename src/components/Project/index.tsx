import React, { useEffect, useState } from "react";

import styles from "@site/src/components/Project/index.module.css";

export type ProjectTags =
  | "new!"
  | "npm"
  | "cli"
  | "free"
  | "open-source"
  | "js"
  | "ts"
  | "backend"
  | "frontend"
  | "other";

export interface ProjectProps {
  icon?: string;
  name: string;
  link: string;
  description: string;
  tags: ProjectTags[];
}

export default function Project({
  icon,
  name,
  tags,
  link,
  description,
}: ProjectProps): JSX.Element {
  if (icon) {
    return (
      <a className={styles.main} href={link} target="_blank">
        <img className={styles.icon} src={icon} />
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.desc}>{description}</p>
        <ul className={styles.tags}>
          {tags.map((tag) => (
            <li>{tag}</li>
          ))}
        </ul>
      </a>
    );
  } else {
    return (
      <a className={styles.main} href={link} target="_blank">
        <svg
          className={styles.icon}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path d="M3 2.75A2.75 2.75 0 0 1 5.75 0h14.5a.75.75 0 0 1 .75.75v20.5a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1 0-1.5h5.25v-4H6A1.5 1.5 0 0 0 4.5 18v.75c0 .716.43 1.334 1.05 1.605a.75.75 0 0 1-.6 1.374A3.251 3.251 0 0 1 3 18.75ZM19.5 1.5H5.75c-.69 0-1.25.56-1.25 1.25v12.651A2.989 2.989 0 0 1 6 15h13.5Z"></path>
          <path d="M7 18.25a.25.25 0 0 1 .25-.25h5a.25.25 0 0 1 .25.25v5.01a.25.25 0 0 1-.397.201l-2.206-1.604a.25.25 0 0 0-.294 0L7.397 23.46a.25.25 0 0 1-.397-.2v-5.01Z"></path>
        </svg>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.desc}>{description}</p>
        <ul className={styles.tags}>
          {tags.map((tag) => (
            <li>{tag}</li>
          ))}
        </ul>
      </a>
    );
  }
}
