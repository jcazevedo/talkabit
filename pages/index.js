import React, { useRef } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Landing from '../components/landing'
import Topbar from '../components/topbar'
import PreviousYears from '../components/previousYears'

export default function Home() {
    const editionsRef = useRef(null)
    return (
        <div className={styles.container}>
            <Head>
                <title>Talk A Bit</title>
                <meta
                    name="description"
                    content="Currently on the way to its 10th edition, Talk a Bit offers its participants
            an event that promotes learning, exchange of ideas and socializing.
            Talk a Bit is one of the largest annual events in FEUP for
            software enthusiasts."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Topbar editionsRef={editionsRef} />

            <Landing />

            <main className={styles.main}>
                <section className={styles.intro}>
                    <h3>Who We Are</h3>
                    <p>
                        <b>Talk a Bit</b> is a conference organized every year
                        by FEUP students in the last year of the Master&apos;s
                        in Informatics and Computing Engineering.
                    </p>
                    <p>
                        Started in 2013 and currently on the way to its{' '}
                        <b>11th edition</b>, Talk a Bit offers its participants
                        a wide range of conversations with the objective not
                        only to know the state of the industry through the voice
                        of the professionals who work in it, but also to promote
                        the debate of ideas among all the participants of the
                        conference. Participants can also to attend some
                        workshops.
                    </p>
                    <p>
                        With the help of our partners, people will be able to
                        get to know better some companies in the area and even
                        find some job opportunities.
                    </p>
                    <p>
                        Finally, in this edition we are back with the event in a
                        fully presential mode on <b>January 28, 2023 at FEUP</b>{' '}
                        with the theme{' '}
                        <b>
                            &quot;Data. How it&apos;s created, how it&apos;s
                            stored, how it&apos;s streamed, how it&apos;s
                            processed&quot;
                        </b>
                        .
                    </p>
                </section>
            </main>

            <PreviousYears refProp={editionsRef} />

            <style jsx global>{`
                html,
                body {
                    padding: 0;
                    margin: 0;
                    font-family: Poppins;
                }
            `}</style>

            {/* <main className={styles.main}></main>

            <footer className={styles.footer}></footer> */}
        </div>
    )
}
