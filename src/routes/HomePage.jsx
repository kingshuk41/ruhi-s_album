import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Bars } from 'react-loader-spinner';

export default function SongPage() {

    const words = ['Hello!', 'Ruhi!', 'I am sorry!'];
    const [index, setIndex] = React.useState(0);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 3000); // Change the interval time as needed

        return () => clearInterval(interval);
    }, []);

    React.useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    return (
        <>
            {
                loading
                    ? <div style={{ height: "100vh" }}
                        className="loading-page w-100 d-flex align-items-center justify-content-center" >
                        <Bars
                            height="40"
                            width="40"
                            color="#ff6fab"
                            ariaLabel="bars-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                        />
                    </div>
                    : <main className='home d-flex flex-column align-items-center justify-content-center'>
                        <motion.div
                            className='motion-write text-center mulish ibm-plex-sans text-uppercase'
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 60 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.5, delay: 0.25 }}
                            exit={{ opacity: 0, y: -20 }}
                        >
                            {words[index]}
                        </motion.div>
                        <motion.div className="transition-write-box text-center overpass d-flex align-items-center justify-content-center"
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.5, delay: 0.35 }}
                            exit={{ opacity: 0, y: -20 }}
                        >
                            <Typewriter
                                className="transition-write"
                                words={[
                                    'Sorry Ruhi!',
                                    'I’m sorry for hurting you. You mean the world to me, and I’ll do whatever it takes to make things right.',
                                    'I miss the smile I put on your face, and I’m sorry for taking it away. Please forgive me, and let me make it up to you.',
                                    'I never meant to cause you pain. I’m sorry for my actions, and I promise to be better for you, for us.'
                                ]}
                                loop={0}
                                cursor
                                cursorStyle=''
                                typeSpeed={100}
                                deleteSpeed={100}
                                delaySpeed={1000}
                            />
                        </motion.div>

                        <motion.div className="home-bottom overpass w-100 d-flex align-items-center justify-content-center"
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.5, delay: 0.45 }}
                            exit={{ opacity: 0, y: -20 }}
                        >
                            <Link
                                to='/songs'
                                className='home-btn overpass'>
                                Explore the Tunes
                            </Link>
                        </motion.div>
                    </main>
            }
        </>
    );
};