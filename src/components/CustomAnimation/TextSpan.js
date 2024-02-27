import { color, motion, useAnimationControls } from 'framer-motion'
import { useState } from 'react';
import './home.css'

const TextSpan = ({ children }) => {

    const controls = useAnimationControls();
    const [isPlaying, setIsPlaying] = useState(false);

    const animation = () => {
        controls.start({
            transform: [
                "scale3d(1,1,1)",
                "scale3d(1.4,.55,1)",
                "scale3d(.75,1.25,1)",
                "scale3d(1.25,.85,1)",
                "scale3d(.9,1.05,1)",
                "scale3d(1,1,1)",
            ],
            transition: {
                duration: 1.2,
                times: [0, .4, .6, .7, .8, .9,]
            }
        })
        setIsPlaying(true)
    }
    const color = isPlaying ? 'var(--active-color)' : 'var(--text-color)'
    const customStyle = {
        fontSize: '5rem',
        letterSpacing: '2px',
        color: color,
    };

    return (
        <motion.span style={customStyle} className="profile" animate={controls} whileHover={() => {
            if (!isPlaying) {
                animation()
            }
        }}
            onAnimationComplete={() => setIsPlaying(false)}
        >
            {children}
        </motion.span>
    )
}

export default TextSpan;