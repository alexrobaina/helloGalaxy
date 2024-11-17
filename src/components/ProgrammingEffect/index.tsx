import { motion, AnimatePresence } from 'framer-motion'
import { FC } from 'react'

import styles from './styles.module.css'
import { fadeIn } from '@/utils/motion'

interface TypingAnimationProps {
  text: string
  fontSize?: number
  typingSpeed?: number
}

const TypingAnimation: FC<TypingAnimationProps> = ({
  text,
  typingSpeed = 0.1,
  fontSize = 14,
}) => {
  return (
    <AnimatePresence>
      {text.split('').map((char: string, index: number) => (
        <motion.span
          key={char}
          style={{ fontSize }}
          exit={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -10 }}
          transition={{ delay: index * typingSpeed }}
        >
          {char}
        </motion.span>
      ))}
    </AnimatePresence>
  )
}

interface ProgrammingEffectProps {
  text: string
  fontSize?: number
  marginTop?: number
  typingSpeed?: number
}

export const ProgrammingEffect: FC<ProgrammingEffectProps> = ({
  text,
  fontSize,
  marginTop,
  typingSpeed,
}) => {
  return (
    <div style={{ marginTop }} className={styles.text}>
      <TypingAnimation text={text} typingSpeed={typingSpeed} fontSize={fontSize} />
    </div>
  )
}
