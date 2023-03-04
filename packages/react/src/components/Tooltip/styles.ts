import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'
import { Text } from '../Text'

export const TooltipProvider = styled(Tooltip.Provider, {})

export const TooltipRoot = styled(Tooltip.Root, {})

export const TooltipTrigger = styled(Tooltip.Trigger, {})

export const TooltipPortal = styled(Tooltip.Portal, {})

export const TooltipContent = styled(Tooltip.Content, {
  backgroundColor: '$gray900',
  padding: '0.75rem 1rem',
  borderRadius: '5px',
  color: '$gray100',
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
})

export const Content = styled(Text, {
  color: '$gray100',

  defaultVariants: {
    size: 'sm',
  },
})
