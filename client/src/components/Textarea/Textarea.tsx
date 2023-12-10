import type { FC, TextareaHTMLAttributes } from 'react'

import { type Control, useController } from 'react-hook-form'

import style from './textarea.module.css'

interface ITextarea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  control: Control<Record<string, any>, any>
  textareaName: string
}

export const Textarea: FC<ITextarea> = ({
  control,
  textareaName,
  ...props
}) => {
  const { field } = useController({ control, name: textareaName })

  const { onChange, value } = field

  return (
    <textarea
      className={style.Textarea}
      name={textareaName}
      onChange={onChange}
      placeholder={props.placeholder}
      value={value}
    />
  )
}
