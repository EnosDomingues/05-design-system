import type { Meta, StoryObj } from '@storybook/react'
import { Toast, ToastProps } from '@enos-ui/react'

export default {
  title: 'Data display/Toast',
  component: Toast,
  args: {
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 23 de Outubro às 16h',
  },
} as Meta<ToastProps>

export const Dark: StoryObj<ToastProps> = {}
