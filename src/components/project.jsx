import { Element } from "react-scroll";
import "./components.css";
import iete from "../photo/iete.png";
import amazon from "../photo/amazonclane.png";
import game from "../photo/game.png";
import minithon from "../photo/minithon.png";
import port from "../photo/portfilo.png";
import Stopwatch from "../photo/Stopwatch.png";
import vowel from "../photo/vowel.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


function Projects() {
    return (
        <div className="flex flex-col content-center justify-center items-center">
            {/* Section 1 */}

            <Element name="sec-1" className="my-12 md:my-0 section sec-1 ">
                <div className="sec-1 flex h-screen items-center my-5 mx-auto w-5/6 ">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className=" projectimg bg-black text-white  w-full"
                    >
                        <img src={minithon} alt="c" className="rounded-3xl bg-cover" />
                    </motion.div>

                    <motion.div
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 1 }}
                        initial={{ opacity: 0 }}
                        className=" text-gray-100 md:m-3 md:w-2/3 text-center"
                    >
                        <h1 className="text-4xl md:text-6xl m-3 ">CYBERRIDE HUB</h1>
                        <p className="text-xl">
                            <span className="opacity-100">My first minithon</span>{" "}
                            <span className="opacity-60">
                                with a team of four members, it is my very first minithon which
                                was organized in my college,
                            </span>
                        </p>
                        <p className="font-medium text-xl">
                            <span className="font-black">Tools used:</span> Javascript, HTML,
                            CSS, Bootstrap, Graphics, Animation
                        </p>

                        <div>

                            <button className="c-button c-button--gooey m-2">
                                <Link to="https://github.com/SARVESHYOGI/csi-minithon" target="_blank" rel="noreferrer">view code</Link>

                                <div className="c-button__blobs">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </button>
                            <button className="c-button c-button--gooey m-2">
                                <Link to="https://sarveshyogi.github.io/csi-minithon/" rel="noreferrer" target="_blank">view site</Link>
                                <div className="c-button__blobs">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </button>
                        </div>

                    </motion.div>
                </div>
            </Element >

            {/* Section 2 */}

            < Element name="sec-2" className="section sec-2" >
                <div className="sec-2 flex h-screen items-center my-5 mx-auto w-5/6">
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 1 }}
                        initial={{ opacity: 0 }}
                        className="  projectimg bg-black text-white m-3 w-full"
                    >
                        <img src={iete} alt="c" className="rounded-3xl bg-cover" />
                    </motion.div>
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 1 }}
                        initial={{ opacity: 0 }}
                        className=" text-gray-100 m-3 md:w-2/3 text-center"
                    >
                        <h1 className="text-4xl md:text-6xl m-3">IETE-TSEC</h1>
                        <p className="opacity-60 text-xl">
                            IETE-TSEC committee website made by a group of seven team members,
                            one of my first large projects.
                        </p>
                        <p className="font-medium text-xl">
                            <span className="font-black">Tools used:</span> React.js,
                            Javascript, JSX, CSS
                        </p>
                        <div>


                            <button className="c-button c-button--gooey m-2">
                                <Link to="https://www.ietetsec.in/" target="_blank" rel="noreferrer">view site</Link>

                                <div className="c-button__blobs">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </button>
                        </div>
                    </motion.div>
                </div>
            </ Element>

            {/* Section 3 */}

            <Element Element name="sec-3" className="section sec-3" >
                <div className="sec-3 flex h-screen items-center my-5 mx-auto w-5/6">
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 1 }}
                        initial={{ opacity: 0 }}
                        className=" projectimg bg-black text-white m-3 w-full"
                    >
                        <img src={port} alt="c" className="rounded-3xl bg-cover" />
                    </motion.div>
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 1 }}
                        initial={{ opacity: 0 }}
                        className=" text-gray-100 m-3 md:w-2/3 text-center"
                    >
                        <h1 className="text-4xl md:text-6xl m-0">PORTFOLIO</h1>
                        <p className="opacity-60 text-xl">My self-made portfolio</p>
                        <p className="font-medium text-xl">
                            <span className="font-black">Tools used:</span> React, JSX,
                            Javascript, HTML, CSS, Tailwind CSS
                        </p>
                        <div>

                            <button className="c-button c-button--gooey m-2">
                                <Link to="https://github.com/SARVESHYOGI/portfolio " target="_blank" rel="noreferrer"> view code</Link>
                                <div className="c-button__blobs">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </button>
                            {/* <button className="c-button c-button--gooey m-2"> view site
                <div className="c-button__blobs">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </button> */}
                        </div>
                    </motion.div>
                </div>
            </Element >

            {/* Section 4 */}

            <Element Element name="sec-4" className="section sec-4" >
                <div className="sec-4 flex h-screen items-center my-5 mx-auto w-5/6">
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 1 }}
                        initial={{ opacity: 0 }}
                        className=" projectimg bg-black text-white m-3 w-full"
                    >
                        <img src={game} alt="c" className="rounded-3xl bg-cover" />
                    </motion.div>
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 1 }}
                        initial={{ opacity: 0 }}
                        className=" text-gray-100 m-3 md:w-2/3 text-center"
                    >
                        <h1 className="text-3xl md:text-5xl m-0">ROCK-PAPER-SCISSORS GAME</h1>
                        <p className="opacity-60 text-xl">
                            The game is based on the basics of JavaScript. It was created in
                            my second year of engineering.
                        </p>
                        <p className="font-medium text-xl">
                            <span className="font-black">Tools used:</span> HTML, CSS,
                            JAVASCRIPT
                        </p>
                        <div>

                            <button className="c-button c-button--gooey m-2">
                                <Link to="https://github.com/SARVESHYOGI/game-sps-" target="_blank" rel="noreferrer">view code</Link>

                                <div className="c-button__blobs">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </button>
                            <button className="c-button c-button--gooey m-2"> view site
                                <div className="c-button__blobs">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </button>
                        </div>
                    </motion.div>
                </div>
            </Element >

            {/* Section 5 */}

            < Element name="sec-5" className="section sec-5" >
                <div className="sec-5 flex h-screen items-center my-5 mx-auto w-5/6">
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 1 }}
                        initial={{ opacity: 0 }}
                        className=" projectimg bg-black text-white m-3 w-full"
                    >
                        <img src={Stopwatch} alt="c" className="rounded-3xl bg-cover" />
                    </motion.div>
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 1 }}
                        initial={{ opacity: 0 }}
                        className=" text-gray-100 m-3 md:w-2/3 text-center"
                    >
                        <h1 className="text-4xl md:text-6xl">STOPWATCH</h1>
                        <p className="opacity-60 text-xl">
                            Created a sleek Stopwatch Timer using HTML, CSS, and JavaScript.
                            The minimalist design ensures user-friendly interaction, while
                            JavaScript powers accurate timing functionality
                        </p>
                        <p className="font-medium text-xl">
                            <span className="font-black">Tools used:</span> HTML, CSS,
                            JAVASCRIPT
                        </p>
                        <div>

                            <button className="c-button c-button--gooey m-2">
                                <Link to="https://github.com/SARVESHYOGI/Stopwatch-Timer" target="_blank" rel="noreferrer">view code</Link>
                                <div className="c-button__blobs">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </button>
                            <button className="c-button c-button--gooey m-2">
                                <Link to="https://sarveshyogi.github.io/Stopwatch-Timer/" target="_blank" rel="noreferrer">view site</Link>

                                <div className="c-button__blobs">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </button>
                        </div>
                    </motion.div>
                </div>
            </ Element>

            {/* Section 6 */}

            < Element name="sec-6" className="section sec-6" >
                <div className="sec-6 flex h-screen items-center my-5 mx-auto w-5/6">
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 1 }}
                        initial={{ opacity: 0 }}
                        className=" projectimg bg-black text-white m-3 w-full"
                    >
                        <img src={vowel} alt="c" className="rounded-3xl bg-cover" />
                    </motion.div>
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 1 }}
                        initial={{ opacity: 0 }}
                        className=" text-gray-100 m-3 md:w-2/3 text-center"
                    >
                        <h1 className="text-4xl md:text-6xl">VOWEL CHECKER</h1>
                        <p className="opacity-60 text-xl">
                            The simple interface allows you to input a word or sentence, and
                            the JavaScript code efficiently identifies and counts the vowels.
                        </p>
                        <p className="font-medium text-xl">
                            <span className="font-black">Tools used:</span> HTML, CSS,
                            JAVASCRIPT
                        </p>
                        <div>

                            <button className="c-button c-button--gooey m-2">
                                <Link to="https://github.com/SARVESHYOGI/Checkvowels" target="_blank" rel="noreferrer">view code</Link>

                                <div className="c-button__blobs">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </button>
                            <button className="c-button c-button--gooey m-2">
                                <Link to="https://sarveshyogi.github.io/Checkvowels/" target="_blank" rel="noreferrer"> view site
                                </Link>
                                <div className="c-button__blobs">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </button>
                        </div>
                    </motion.div>
                </div>
            </ Element>

            {/* Section 7 */}

            <Element Element name="sec-7" className="section sec-7" >
                <div className="sec-7 flex h-screen items-center my-5 mx-auto w-5/6">
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 1 }}
                        initial={{ opacity: 0 }}
                        className=" projectimg bg-black text-white m-3 w-full"
                    >
                        <img src={amazon} alt="c" className="rounded-3xl bg-cover" />
                    </motion.div>
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 1 }}
                        initial={{ opacity: 0 }}
                        className=" text-gray-100 m-3 md:w-2/3 text-center"
                    >
                        <h1 className="text-4xl md:text-6xl">AMAZON CLONE</h1>
                        <p className="opacity-60 text-xl">
                            The front page of Amazon was created when I completed learning
                            HTML and CSS.
                        </p>
                        <p className="font-medium text-xl">
                            <span className="font-black">Tools used:</span> HTML, CSS
                        </p>
                        <div>

                            <button className="c-button c-button--gooey m-2">
                                <Link to="https://github.com/SARVESHYOGI/amazon-clone" target="_blank" rel="noreferrer"> view code</Link>

                                <div className="c-button__blobs">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </button>
                            <button className="c-button c-button--gooey m-2">
                                <Link to="https://sarveshyogi.github.io/amazon-clone/" target="_blank" rel="noreferrer">view site</Link>

                                <div className="c-button__blobs">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </button>
                        </div>
                    </motion.div>
                </div>
            </Element >
        </div >
    );
}

export default Projects;