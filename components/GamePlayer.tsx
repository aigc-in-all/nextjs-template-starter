// components/GamePlayer.tsx
'use client'

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { Rocket, Maximize2, Minimize2 } from 'lucide-react';

type Props = {
    img: string;
    url: string;
};

const GamePlayer = ({ img, url }: Props) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isIOSDevice, setIsIOSDevice] = useState(false);

    useEffect(() => {
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
        setIsIOSDevice(isIOS);
    }, []);

    const handlePlay = () => {
        setIsPlaying(true);
    };

    const toggleFullscreen = useCallback(() => {
        const gameContainer = document.getElementById('game-container');
        if (!gameContainer) return;

        if (isIOSDevice) {
            if (!isFullscreen) {
                gameContainer.style.position = 'fixed';
                gameContainer.style.top = '0';
                gameContainer.style.left = '0';
                gameContainer.style.width = '100%';
                gameContainer.style.height = '100%';
                gameContainer.style.zIndex = '9999';
                document.body.style.overflow = 'hidden';
            } else {
                gameContainer.style.position = 'relative';
                gameContainer.style.top = 'auto';
                gameContainer.style.left = 'auto';
                gameContainer.style.width = '100%';
                gameContainer.style.height = 'auto';
                gameContainer.style.zIndex = 'auto';
                document.body.style.overflow = 'auto';
            }
            setIsFullscreen(!isFullscreen);
        } else {
            if (!document.fullscreenElement) {
                if (gameContainer.requestFullscreen) {
                    gameContainer.requestFullscreen();
                } else if ((gameContainer as any).webkitRequestFullscreen) {
                    (gameContainer as any).webkitRequestFullscreen();
                } else if ((gameContainer as any).msRequestFullscreen) {
                    (gameContainer as any).msRequestFullscreen();
                }
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if ((document as any).webkitExitFullscreen) {
                    (document as any).webkitExitFullscreen();
                } else if ((document as any).msExitFullscreen) {
                    (document as any).msExitFullscreen();
                }
            }
        }
    }, [isIOSDevice, isFullscreen]);

    useEffect(() => {
        const handleFullscreenChange = () => {
            if (!isIOSDevice) {
                setIsFullscreen(Boolean(document.fullscreenElement));
            }
        };

        document.addEventListener('fullscreenchange', handleFullscreenChange);
        return () => {
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
        };
    }, [isIOSDevice]);

    return (
        <div
            id="game-container"
            className="relative w-full aspect-video bg-gray-900 rounded-lg overflow-hidden"
        >
            {!isPlaying ? (
                <div className="relative w-full h-full">
                    <Image
                        src={img}
                        alt="Game preview"
                        fill
                        className="object-cover filter blur-[2px] hover:blur-0 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <button
                            onClick={handlePlay}
                            className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-full
                            transition-all duration-300 transform hover:scale-105 active:scale-95
                            flex items-center space-x-3"
                        >
                            <Rocket className="h-6 w-6" />
                            <span className="text-lg">Play Game Now</span>
                        </button>
                    </div>
                </div>
            ) : (
                <div className="relative w-full h-full">
                    <iframe
                        src={url}
                        className="w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                        allowFullScreen
                    />
                    <button
                        onClick={toggleFullscreen}
                        className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white p-2 rounded-lg
                        transition-all duration-300 transform hover:scale-110 active:scale-95"
                        aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
                    >
                        {isFullscreen ? (
                            <Minimize2 className="h-5 w-5" />
                        ) : (
                            <Maximize2 className="h-5 w-5" />
                        )}
                    </button>
                </div>
            )}
        </div>
    );
};

export default GamePlayer;