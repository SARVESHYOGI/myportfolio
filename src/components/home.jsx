import "./components.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


function Home() {




    return (<>

        <motion.div
            className="overflow-y-hidden w-screen h-screen overflow-x-hidden text-white flex justify-center content-center">
            <div className=" flex flex-col content-center items-center align-middle justify-center">




                <motion.div
                    initial={{ y: 1000, scale: 0 }}
                    transition={{ duration: 0.5, delay: 0 }}
                    animate={{ y: 0, scale: 1 }}
                    className="mb-28 md:mb-32 bg text-white rounded-full font-bold text-4xl md:text-8xl text-center self-center items-center flex p-5 md:p-10"
                >
                    <span className="hover:animate-rubberBand hover:text-teal-300 hover:scale-y-50 duration-150">HI, <span id="colors" className=""> SARVESH YOGI</span>   HERE</span>
                </motion.div>


                <motion.div
                    initial={{ y: -1000, scale: 0 }}
                    transition={{ duration: 0.5, delay: 0 }}
                    animate={{ y: 0, scale: 1 }} className="m-2">
                    <motion.div
                        initial={{ opacity: 1, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            type: 'spring',
                            stiffness: 200,
                            damping: 1,
                            repeat: Infinity,
                            repeatType: 'mirror',
                        }} className="mb-10 text-5xl md:text-8xl text-center">
                        <button
                            className="group relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 text-sm font-medium  rounded-lg group bgg text-white hover:text-yellow-300  "
                        >
                            <span
                                className="text-8xl relative px-5 py-2.5 transition-all ease-in duration-75 bg-white bg1 rounded-md group-hover:bg-opacity-0"
                            >
                                I AM
                            </span>
                            <div className="hidden group-hover:block">
                                <div
                                    className="group absolute -top-14 md:-top-28 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center rounded-sm text-center text-sm text-slate-300 before:-top-2"
                                >
                                    <div className="rounded-sm bg-black py-1 px-2">
                                        <p className="whitespace-nowrap text-5xl md:text-8xl">SARVESH YOGI</p>
                                    </div>
                                    <div
                                        className="h-0 w-fit border-l-8 border-r-8 border-t-8 border-transparent border-t-black"
                                    ></div>
                                </div>
                            </div>
                        </button>
                    </motion.div>
                    <motion.section
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="sec text-center">
                        <span className="spann text-8xl">

                            <span className="text-5xl md:text-8xl">STUDENT</span>
                            <br />
                            <span className="text-5xl md:text-8xl">CODER</span>
                            <br />
                            <span className="text-5xl md:text-8xl">GAMER</span>
                            <br />
                            <span className="text-3xl md:text-8xl">FRONTEND developer</span>
                            <br />
                            <span className="text-3xl md:text-8xl">MERN STACK developer</span>
                            <br />
                            <span className="text-5xl md:text-8xl">backend developer</span>
                            <br />
                        </span>
                    </motion.section>
                    <motion.hr
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="text-white m-2" />
                </motion.div >



                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                >

                    <ul className="example-2">

                        {/* twitter */}
                        <li className="icon-content">
                            <Link
                                data-social="twitter"
                                aria-label="twitter"
                                to="https://twitter.com/SarveshYogi9305"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <div className="filled"></div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    className="bi bi-twitter"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"
                                    ></path>
                                </svg>
                            </Link>
                            <div className="tooltip">twitter</div>
                        </li>
                        {/* whatsapp */}
                        <li className="icon-content">
                            <Link
                                data-social="whatsapp"
                                aria-label="whatsapp"
                                to="https://api.whatsapp.com/send?phone=7588131774"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <div className="filled"></div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    className="bi bi-whatsapp"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"
                                    ></path>
                                </svg>
                            </Link>
                            <div className="tooltip">whatsapp</div>
                        </li>
                        {/* linkdin */}
                        <li className="icon-content ">
                            <Link
                                data-social="linkedin"
                                aria-label="linkedin"
                                to="https://www.linkedin.com/in/sarvesh-yogi-9b07b3252/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <div className="filled"></div>
                                <span className="fab fa-linkedin">
                                    <svg viewBox="0 0 448 512" height="1em">
                                        <path
                                            d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                                        ></path>
                                    </svg>
                                </span>
                            </Link>
                            <div className="tooltip">Linkdin</div>
                        </li>
                        {/* github */}
                        <li className="icon-content">
                            <Link
                                data-social="github"
                                aria-label="github"
                                to="https://github.com/SARVESHYOGI"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <div className="filled"></div>
                                <svg
                                    className="w-5"
                                    viewBox="0 0 15 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
                                        fill="currentColor"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </Link>
                            <div className="tooltip">github</div>
                        </li>
                        {/* telegram */}
                        <li className="icon-content">
                            <Link
                                data-social="telegram"
                                aria-label="Telegram"
                                to="https://t.me/sarveshyogi"
                            >
                                <div className="filled"></div>
                                <svg viewBox="0 0 100 100" version="1.1">
                                    <path
                                        fill="currentColor"
                                        d="M95,9.9c-1.3-1.1-3.4-1.2-7-0.1c0,0,0,0,0,0c-2.5,0.8-24.7,9.2-44.3,17.3c-17.6,7.3-31.9,13.7-33.6,14.5  c-1.9,0.6-6,2.4-6.2,5.2c-0.1,1.8,1.4,3.4,4.3,4.7c3.1,1.6,16.8,6.2,19.7,7.1c1,3.4,6.9,23.3,7.2,24.5c0.4,1.8,1.6,2.8,2.2,3.2  c0.1,0.1,0.3,0.3,0.5,0.4c0.3,0.2,0.7,0.3,1.2,0.3c0.7,0,1.5-0.3,2.2-0.8c3.7-3,10.1-9.7,11.9-11.6c7.9,6.2,16.5,13.1,17.3,13.9  c0,0,0.1,0.1,0.1,0.1c1.9,1.6,3.9,2.5,5.7,2.5c0.6,0,1.2-0.1,1.8-0.3c2.1-0.7,3.6-2.7,4.1-5.4c0-0.1,0.1-0.5,0.3-1.2  c3.4-14.8,6.1-27.8,8.3-38.7c2.1-10.7,3.8-21.2,4.8-26.8c0.2-1.4,0.4-2.5,0.5-3.2C96.3,13.5,96.5,11.2,95,9.9z M30,58.3l47.7-31.6  c0.1-0.1,0.3-0.2,0.4-0.3c0,0,0,0,0,0c0.1,0,0.1-0.1,0.2-0.1c0.1,0,0.1,0,0.2-0.1c-0.1,0.1-0.2,0.4-0.4,0.6L66,38.1  c-8.4,7.7-19.4,17.8-26.7,24.4c0,0,0,0,0,0.1c0,0-0.1,0.1-0.1,0.1c0,0,0,0.1-0.1,0.1c0,0.1,0,0.1-0.1,0.2c0,0,0,0.1,0,0.1  c0,0,0,0,0,0.1c-0.5,5.6-1.4,15.2-1.8,19.5c0,0,0,0,0-0.1C36.8,81.4,31.2,62.3,30,58.3z"
                                    ></path>
                                </svg>
                            </Link>
                            <div className="tooltip">Telegram</div>
                        </li>
                    </ul>
                </motion.div>

            </div>

        </motion.div >
    </>

    );
}

export default Home;