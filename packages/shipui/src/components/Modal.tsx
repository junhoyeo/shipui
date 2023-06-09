import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { AnimatePresence, HTMLMotionProps, MotionProps, motion } from 'framer-motion'
import { useState } from 'react'

const backgroundMotion: MotionProps = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.2 },
}
const containerMotion: MotionProps = {
  initial: { opacity: 0, transform: 'translate3d(-50%, 50%, 0)' },
  animate: { opacity: 1, transform: 'translate3d(-50%, -50%, 0)' },
  exit: { opacity: 0, transform: 'translate3d(-50%, 50%, 0)' },
  transition: { duration: 0.2 },
}

export type ModalProps = HTMLMotionProps<'div'> & {
  isOpen: boolean
  onClose: () => void
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, ...containerProps }) => {
  const [disabled, setDisabled] = useState<boolean>(false)

  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <>
          <ModalBackground
            {...backgroundMotion}
            disabled={disabled}
            key="modal-background"
            onClick={() => {
              setDisabled(true)
              setTimeout(() => {
                onClose()
              })
              setTimeout(() => setDisabled(false), 200)
            }}
          />
          <ModalContainer key="modal" {...containerMotion} {...containerProps} />
        </>
      )}
    </AnimatePresence>
  )
}

export const ModalBackground = styled(motion.div)<{ disabled: boolean }>`
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(12px);

  ${({ disabled }) =>
    disabled &&
    css`
      &,
      & > div {
        pointer-events: none;
      }
    `};
`

export const ModalContainer = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, 100%, 0);
  z-index: 200;

  padding: 16px;
  width: 100%;
  max-width: 400px;

  background: #f2f2f2;
  border-radius: 24px;
  overflow: hidden;

  display: flex;
  flex-direction: column;
`
