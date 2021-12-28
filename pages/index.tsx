import React from 'react'
import Image from 'next/image'
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import NextLink from 'next/link'

import { Axios } from 'axios'

import {
    BodyText,
    Subtitle,
    Title,
    SectionTitle,
    ComponentTitle,
    ComponentDescription,
    Link,
} from 'components/styled/Text'

import { FiGithub } from 'react-icons/fi'
import { FaDiscord } from 'react-icons/fa'

import {
    CheckCircledIcon,
    InfoCircledIcon,
    Link2Icon,
} from '@radix-ui/react-icons'

import { Box, styled } from 'lib/stitches'

import * as Avatar from '@radix-ui/react-avatar'

import { SiteLayout } from 'components/SiteLayout'
import { Section } from 'components/styled/Section'

import CURRICULUM_DATA from 'data/curriculum.json'
import { Tooltip } from 'components/Tooltip'
import { Grid, GridItem } from 'components/styled/Grid'
import { Chip } from 'components/Chip'
import { BlueLink } from 'components/BlueLink'
import { useTheme } from 'next-themes'

const ImageRoot = styled(Avatar.Root, {
    display: 'inline-flex',

    position: 'relative',

    alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'middle',
    overflow: 'hidden',
    userSelect: 'none',
    fixedSize: 80,
    borderRadius: '100%',
    backgroundColor: '#8888881F',

    mb: '2rem',

    '@sm': { fixedSize: 121, mb: 0 },
})

const StyledImage = styled(Image, {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: 'inherit',
})

const StyledFallback = styled(Avatar.Fallback, {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#888',
    color: '$primaryText',
    fontSize: '1.25rem',
    lineHeight: 1,
    fontWeight: 500,
})

const Hero = styled('div', {
    display: 'flex',
    flexDirection: 'column-reverse',

    width: '100%',

    textSizeAdjust: '100%',

    '@sm': { flexDirection: 'row', justifyContent: 'space-between' },
})

const HeroText = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    pr: '2rem',

    alignItems: 'start',

    textSizeAdjust: '100%',
})

const ProjectCard = styled('div', {
    display: 'inline-block',

    background: '$bg-1',
    p: '2rem',
})

const CurriculumComponent = styled('div', {
    height: 250,

    flexGrow: 0,
    flexBasis: '100%',

    background: '$bg-1',

    p: '2rem',

    br: 4,

    boxSizing: 'border-box',

    overflow: 'hidden auto',

    '@sm': {
        flexBasis: '50%',
    },
    '@lg': {
        flexBasis: '33%',
    },
})

const CurriculumCheckListContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',

    gap: 15,

    px: '.5rem',
})

const CheckListComponent = styled('div', {
    display: 'flex',
    alignItems: 'center',

    gap: 15,
})

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const api = new Axios({
        baseURL: 'https://api.github.com/repos/gustavo-dev',
        headers: {
            'content-type': 'application/json; charset=utf-8',
        },
    })

    const hopes = await api.get<GithubRepo>('/hopes')
    const csgoempire = await api.get<GithubRepo>('/csgoempire-api')

    return {
        props: {
            // Axios is returning the data as a string for some reason
            // so we need to convert to a JSON object util we find a fix
            // for it
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            projects: [JSON.parse(csgoempire.data), JSON.parse(hopes.data)],
        },
    }
}

const Home: NextPage<HomeProps> = ({ projects }) => {
    const { theme } = useTheme()

    const iconsColor = theme === 'dark' ? '#FFF' : '#000'

    return (
        <>
            <Head>
                <title>Gustavo Vargas</title>
            </Head>
            <SiteLayout>
                <Hero>
                    <HeroText>
                        <Title>Gustavo Vargas</Title>
                        <Subtitle>18 y.o, Full Stack developer</Subtitle>
                        <BodyText>
                            Studying programming before going to college.
                            Welcome to my portifolio
                        </BodyText>
                    </HeroText>
                    <ImageRoot>
                        <StyledImage
                            src="/images/me.png"
                            alt="Gustavo Vargas"
                            layout="fill"
                            quality={100}
                            priority
                        />
                        <StyledFallback delayMs={1000}>G</StyledFallback>
                    </ImageRoot>
                </Hero>
                <Box
                    css={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 15,
                        mt: '1.5rem',
                    }}
                >
                    <Link
                        href="https://www.github.com/gustavo-dev"
                        target="_blank"
                    >
                        <FiGithub color={iconsColor} size={20} />
                    </Link>
                    <Tooltip
                        delay={100}
                        trigger={
                            <Box
                                css={{ cursor: 'pointer' }}
                                onClick={() =>
                                    navigator.clipboard.writeText('tavin#5205')
                                }
                            >
                                <FaDiscord color={iconsColor} size={20} />
                            </Box>
                        }
                    >
                        Copy to clipboard
                    </Tooltip>
                </Box>
                <Section>
                    <SectionTitle>Projects</SectionTitle>

                    {projects.map((project, i) => (
                        <ProjectCard key={i} css={{ mt: i > 0 ? '1rem' : 0 }}>
                            <Box css={{ display: 'inline-block' }}>
                                <Link href={project.html_url}>
                                    <ComponentTitle
                                        css={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 5,
                                        }}
                                    >
                                        <Box css={{ mb: '-.25rem' }}>
                                            <Link2Icon />
                                        </Box>
                                        {project.full_name}
                                    </ComponentTitle>
                                </Link>
                            </Box>
                            <ComponentDescription>
                                {project.description}
                            </ComponentDescription>
                            <Box
                                css={{
                                    mt: '1.2rem',
                                    display: 'inline-flex',
                                    gap: 5,
                                }}
                            >
                                {project.topics.map((topic, i) => {
                                    return <Chip key={i} value={topic} />
                                })}
                            </Box>
                        </ProjectCard>
                    ))}

                    <ProjectCard css={{ mt: '1rem' }}>
                        <ComponentTitle>Others</ComponentTitle>
                        <ComponentDescription>
                            I have created a few JavaScript BOTs for&nbsp;
                            <BlueLink href="https://www.csgoempire.com/">
                                CSGOEmpire
                            </BlueLink>
                            &nbsp;and&nbsp;
                            <BlueLink href="https://www.binance.com/">
                                Binance
                            </BlueLink>
                            &nbsp;for a few clients as well. Feel free to
                            contact me via Discord if you have any questions
                            about these projects.
                        </ComponentDescription>
                    </ProjectCard>
                </Section>
                <Section>
                    <SectionTitle>Curriculum</SectionTitle>
                    <Grid>
                        {CURRICULUM_DATA.blocks.map(
                            ({ title, checklist }, i) => {
                                return (
                                    <GridItem key={`block-${i}`} xs={12} sm={6}>
                                        <CurriculumComponent>
                                            <ComponentTitle
                                                css={{
                                                    marginBottom: '1.25rem',
                                                }}
                                            >
                                                {title}
                                            </ComponentTitle>
                                            <CurriculumCheckListContainer>
                                                {checklist.map(
                                                    ({ name, status }, j) => {
                                                        return (
                                                            <CheckListComponent
                                                                key={`checklist-${j}`}
                                                            >
                                                                {status ===
                                                                    'complete' && (
                                                                    <CheckCircledIcon color="#00ff08" />
                                                                )}
                                                                {status ===
                                                                    'due' && (
                                                                    <Tooltip
                                                                        trigger={
                                                                            <InfoCircledIcon
                                                                                color="orange"
                                                                                cursor="pointer"
                                                                            />
                                                                        }
                                                                    >
                                                                        Scheduled
                                                                    </Tooltip>
                                                                )}
                                                                <BodyText>
                                                                    {name}
                                                                </BodyText>
                                                            </CheckListComponent>
                                                        )
                                                    }
                                                )}
                                            </CurriculumCheckListContainer>
                                        </CurriculumComponent>
                                    </GridItem>
                                )
                            }
                        )}
                    </Grid>
                </Section>
            </SiteLayout>
        </>
    )
}

export default Home
