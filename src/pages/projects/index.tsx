import React from "react";
import Layout from "@theme/Layout";
import Project from "@site/src/components/Project";

import styles from "@site/src/pages/projects/index.module.css";

export default function Projects(): JSX.Element {
  return (
    <Layout title="Projects" wrapperClassName={styles.layout}>
      <Project
        icon="https://avatars.githubusercontent.com/u/121239494?s=400&u=217b713d0a0226826e173ec444764cb4e68f27f2&v=4"
        name="create-discord-bot"
        tags={["cli", "npm", "other"]}
        description="Bootstrap your discord bot with blazingly fast speeds."
        link="https://github.com/create-discord-bot/create-discord-bot"
      />
      <Project
        name="larser"
        tags={["npm", "backend", "cli", "ts", "js"]}
        description="Simple, lightweight command line arguments parser."
        link="https://github.com/FLzyy/larser"
      />
      <Project
        name="strutils"
        tags={["npm", "backend", "ts", "js"]}
        description="A collection of small utilities to aid in string manipulation."
        link="https://github.com/FLzyy/strutils"
      />
      <Project
        name="timebench"
        tags={["new!", "npm", "backend", "ts", "js"]}
        description="A small helper class made to help in benchmarking and timing."
        link="https://github.com/FLzyy/timebench"
      />
      <Project
        icon="https://cdn.discordapp.com/icons/1020147370354290728/8ccef976342641f497dce1fc0e1f4db1.webp?size=100"
        name="Dot"
        tags={["backend", "ts"]}
        description="A small Discord bot made using Discord.Js."
        link="https://github.com/FLzyy/Dot"
      />
    </Layout>
  );
}
