import { X } from 'phosphor-react'
import { ComponentProps, useState } from 'react'
import { Button } from '../Button'
import { Text } from '../Text'
import {
  CloseButton,
  ToastAction,
  ToastDescription,
  ToastProvider,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from './styles'

export interface ToastProps extends ComponentProps<typeof ToastRoot> {
  description?: string
}

export function Toast({ title, children, description, ...props }: ToastProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <ToastProvider swipeDirection="right">
      <Button onClick={() => setIsOpen(true)}>Click</Button>

      <ToastRoot open={isOpen} onOpenChange={setIsOpen} {...props}>
        <ToastTitle>{title}</ToastTitle>
        <ToastDescription asChild>
          <Text>{description}</Text>
        </ToastDescription>
        <ToastAction asChild altText="Close toast">
          <CloseButton>
            <X width={11} height={11} />
          </CloseButton>
        </ToastAction>
      </ToastRoot>
      <ToastViewport />
    </ToastProvider>
  )
}
