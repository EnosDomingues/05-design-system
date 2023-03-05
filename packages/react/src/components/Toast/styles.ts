import * as Toast from '@radix-ui/react-toast'
import { keyframes, styled } from '../../styles'

export const ToastProvider = styled(Toast.Provider, {})

const hide = keyframes({
  from: {
    opacity: '1',
  },
  to: {
    opacity: '0',
  },
})

const slideIn = keyframes({
  from: {
    transform: 'translateX(calc(100% + 25px))',
  },
  to: {
    transform: 'translateX(0)',
  },
})

const swipeOut = keyframes({
  from: {
    transform: 'translateX(calc(100% + 25px))',
  },
  to: {
    transform: 'translateX(0)',
  },
})

export const ToastRoot = styled(Toast.Root, {
  backgroundColor: '$gray800',
  borderRadius: 6,
  padding: '$3 $5',
  alignItems: 'center',

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },

  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },

  '&[data-swipe="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },

  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },

  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },
})

export const ToastTitle = styled(Toast.Title, {
  color: '$white',
  fontSize: '$xl',
  fontFamily: 'Roboto, sans-serif',
  fontWeight: 'bold',
  lineHeight: 1.6,
})

export const ToastDescription = styled(Toast.Description, {
  color: '$gray200',
  fontSize: '$sm',
  fontFamily: 'Roboto, sans-serif',
  fontWeight: '$regular',
  lineHeight: 1.6,
  marginTop: '$1',
})

export const ToastAction = styled(Toast.Action, {
  position: 'absolute',
  top: '1rem',
  right: '1rem',
})

export const ToastClose = styled(Toast.Close, {})

export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  width: 360,
  height: 82,
  right: 32,
  bottom: 32,

  display: 'flex',
  flexDirection: 'column',
  listStyle: 'none',
  zIndex: 99999,
  outline: 'none',
})

export const CloseButton = styled('button', {
  border: 0,
  outline: 0,
  cursor: 'pointer',
  backgroundColor: 'transparent',
  padding: 0,

  svg: {
    height: 20,
    width: 20,
    fill: '$gray200',
    color: '$gray200',
  },

  '&:hover': {
    svg: {
      color: '$gray100',
    },
  },
})
