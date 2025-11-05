/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import {
    SiDocker,
    SiEthereum,
    SiGit,
    SiKubernetes,
    SiMysql,
    SiNestjs,
    SiNextdotjs as SiNextDotJs,
    SiNodedotjs as SiNodeDotJs,
    SiPnpm,
    SiPostgresql,
    SiReact,
    SiRedis,
    SiRust,
    SiSolana,
    SiTailwindcss,
    SiTypescript,
    SiYarn,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { TbApi, TbTopologyStarRing3 } from 'react-icons/tb';
import { ListItem } from 'src/app/ListItem';
import { PinnedRepo, ProjectCard } from 'src/app/ProjectCard';
import { differenceInYears } from 'date-fns';

async function getData(): Promise<PinnedRepo[]> {
    const response = await fetch(
        `https://gh-pinned-repos.egoist.dev/?username=${process.env.VERCEL_GIT_REPO_OWNER}`,
        {
            next: {
                revalidate: 1 * 60,
            },
        }
    );

    return response.json();
}

export default async function Page() {
    const pinnedRepos = await getData();

    const birth = new Date('2003-12-28');
    const age = differenceInYears(new Date(), birth);

    return (
        <main className="mx-auto space-y-12 md:py-24">
            <div className="space-y-4">
                <div className="flex flex-col-reverse items-center justify-between gap-4 sm:flex-row">
                    <div className="flex items-center gap-4">
                        {/* <a
                            href={`https://github.com/${process.env.VERCEL_GIT_REPO_OWNER}`}
                            target="_blank"
                            rel="noreferrer"
                            className="cursor-pointer transition-all duration-200 hover:-translate-y-[2px]"
                        >
                            <SiGithub size={24} />
                        </a>
                        <a
                            href="https://twitter.com/tavin_dev"
                            target="_blank"
                            rel="noreferrer"
                            className="cursor-pointer hover:text-[#1DA1F2] transition-all duration-200 hover:-translate-y-[2px]"
                        >
                            <SiTwitter size={26} />
                        </a>
                        <a
                            href="discord://discordapp.com/users/315848583024869379"
                            rel="noreferrer"
                            className="flex items-center gap-3 cursor-pointer font-bold hover:text-[#7289DA] transition-all duration-200 hover:-translate-y-[2px] select-none flex-nowrap text-ellipsis"
                        >
                            <SiDiscord size={26} />
                        </a> */}
                    </div>
                </div>
                <h1 className="text-3xl font-bold">Hi! I'm Gustavo!</h1>
                <p className="opacity-80">
                    I'm a {age}-year-old software developer from Brazil specializing
                    in full-stack web development and complex problem-solving.
                </p>
            </div>
            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Projects</h2>
                <p className="opacity-80">
                    The majority of my work involves proprietary projects with
                    confidential source code. My focus during recent years has
                    been on freelance development. Below are a selection of my
                    public repositories, with additional projects to be published
                    over time.
                </p>
                <div className="grid gap-2 sm:gap-4 sm:grid-cols-2">
                    {pinnedRepos.map((repo, i) => {
                        return <ProjectCard key={i} {...repo} />;
                    })}
                </div>
                <div className="space-y-2">
                    <p className="opacity-80">
                        Select private projects include:
                    </p>
                    <ul className="space-y-2 list-disc opacity-80">
                        <div className="pl-12 space-y-2">
                            <li>
                                <a
                                    className="underline underline-offset-1"
                                    href="https://www.binance.com"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Binance
                                </a>{' '}
                                automated trading system
                            </li>
                            <li>
                                <a
                                    className="underline underline-offset-1"
                                    href="https://www.csgoempire.com"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    CSGOEmpire
                                </a>{' '}
                                transaction automation system
                            </li>
                            <li>
                                <a
                                    className="underline underline-offset-1"
                                    href="https://www.csgoroll.com"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    CSGORoll
                                </a>{' '}
                                deposit automation system
                            </li>
                        </div>
                    </ul>
                </div>

                <p className="opacity-80">
                    For inquiries, please reach out via Discord.
                </p>
            </section>
            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Technical Stack</h2>
                <p className="opacity-80">
                    Core technologies and tools utilized in my development work:
                </p>
                <ul className="grid grid-cols-3 gap-5 sm:grid-cols-4">
                    <ListItem icon={SiGit} text="Git" />
                    <ListItem icon={SiReact} text="React" />
                    <ListItem icon={SiNextDotJs} text="NextJs" />
                    <ListItem icon={SiNodeDotJs} text="NodeJs" />
                    <ListItem icon={SiNestjs} text="NestJS" />
                    <ListItem icon={TbTopologyStarRing3} text="Microservices" />
                    <ListItem icon={TbApi} text="gRPC" />
                    <ListItem icon={SiTypescript} text="TypeScript" />
                    <ListItem icon={SiPnpm} text="Pnpm" />
                    <ListItem icon={SiYarn} text="Yarn" />
                    <ListItem icon={SiMysql} text="MySQL" />
                    <ListItem icon={SiPostgresql} text="PostgreSQL" />
                    <ListItem icon={SiRedis} text="Redis" />
                    <ListItem icon={SiDocker} text="Docker" />
                    <ListItem icon={SiKubernetes} text="Kubernetes" />
                    <ListItem icon={FaAws} text="AWS" />
                    <ListItem icon={SiTailwindcss} text="TailwindCSS" />
                    <ListItem icon={SiRust} text="Rust" />
                    <ListItem icon={SiSolana} text="Solana" />
                    <ListItem icon={SiEthereum} text="Ethereum" />
                </ul>
            </section>
            {/* <section>
                <iframe
                    src="https://github.com/sponsors/tavindev/button"
                    title="Sponsor tavindev"
                    height="35"
                    width="116"
                    style={{ border: 0 }}
                ></iframe>
            </section> */}
        </main>
    );
}
