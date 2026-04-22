'use client';

import Image from 'next/image';
import backgroundHome from '../../public/background-home.jpg';

const Home = () => {
    return (
        <section
            id="home"
            className="h-screen relative flex items-center justify-center bg-cover bg-center"
            style={{
                backgroundImage: `url(${backgroundHome.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Dark Transparent Overlay (No Blur) */}
            <div className="absolute inset-0 bg-black bg-opacity-40 z-0" />

            {/* Content */}
            <div className="text-center text-white z-10 px-4">
                <h1
                    className="text-6xl md:text-8xl font-extrabold tracking-wide"
                    style={{ fontFamily: '"Playfair Display", serif' }}
                >
                    Coral Revive
                </h1>
                <p className="mt-4 text-xl md:text-2xl">
                    Let's Restore the "Rainforests of the Sea"
                </p>
            </div>

            {/* Animated Tall Seamless Wave */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                <style>
                    {`
                    @keyframes waveMove {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    `}
                </style>
                <div
                    style={{
                        display: 'flex',
                        width: '200%',
                        animation: 'waveMove 8s linear infinite',
                    }}
                >
                    <svg
                        className="w-full h-20 md:h-32"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M0,60 C150,160 350,-40 600,60 C850,160 1050,-40 1200,60 L1200,120 L0,120 Z"
                            fill="#ffffff"
                        />
                    </svg>
                    <svg
                        className="w-full h-20 md:h-32"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M0,60 C150,160 350,-40 600,60 C850,160 1050,-40 1200,60 L1200,120 L0,120 Z"
                            fill="#ffffff"
                        />
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default Home;
