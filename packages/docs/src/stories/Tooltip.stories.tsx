import type { Meta, StoryObj } from '@storybook/react'
import { Box, Tooltip, TooltipProps, Text } from '@enos-ui/react'

export default {
  title: 'Data display/Tooltip',
  component: Tooltip,
  args: {
    content: 'Tooltip example',
    avoidCollisions: true,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
    side: {
      options: ['top', 'right', 'bottom', 'left'],
      control: {
        type: 'inline-radio',
      },
    },
  },

  decorators: [
    (Story) => {
      return (
        <Box css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
          <Text>Tooltip example:</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {
  args: {
    content: 'Tooltip',
    children: (
      <Text
        css={{
          maxWidth: '4.4rem',
          textDecoration: 'underline',
          marginLeft: '1.5rem',
        }}
      >
        Hover me
      </Text>
    ),
  },
}

export const Top: StoryObj<TooltipProps> = {
  args: {
    side: 'top',
    avoidCollisions: false,
    content: 'Top',
    children: (
      <Text
        css={{
          maxWidth: '4.4rem',
          textDecoration: 'underline',
          marginLeft: '1.5rem',
        }}
      >
        Hover me
      </Text>
    ),
  },
}

export const Right: StoryObj<TooltipProps> = {
  args: {
    side: 'right',
    avoidCollisions: false,
    content: 'Right',
    children: (
      <Text
        css={{
          maxWidth: '4.3rem',
          textDecoration: 'underline',
          marginLeft: '1.5rem',
        }}
      >
        Hover me
      </Text>
    ),
  },
}

export const Bottom: StoryObj<TooltipProps> = {
  args: {
    side: 'bottom',
    avoidCollisions: false,
    content: 'Bottom',
    children: (
      <Text
        css={{
          maxWidth: '4.3rem',
          textDecoration: 'underline',
          marginLeft: '1.5rem',
        }}
      >
        Hover me
      </Text>
    ),
  },
}

export const Left: StoryObj<TooltipProps> = {
  args: {
    side: 'left',
    avoidCollisions: false,
    content: 'Left',
    children: (
      <Text
        css={{
          maxWidth: '4.3rem',
          textDecoration: 'underline',
          marginLeft: '1.5rem',
        }}
      >
        Hover me
      </Text>
    ),
  },
}
