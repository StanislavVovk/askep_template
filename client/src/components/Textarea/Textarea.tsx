import style from './textarea.module.css'
import type { FC, TextareaHTMLAttributes } from 'react'
import { type Control, useController } from 'react-hook-form'

interface ITextarea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  control: Control<Record<string, any>, any>
  textareaName: string
}

export const Textarea: FC<ITextarea> = ({
  control,
  textareaName,
  ...props
}) => {
  const { field } = useController({ name: textareaName, control })

  const { value, onChange } = field

  return (
    <textarea
      value={value}
      name={textareaName}
      placeholder={props.placeholder}
      className={style.Textarea}
      onChange={onChange}
    />
  )
}
