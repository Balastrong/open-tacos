import React from 'react'

export interface CardProps {
  image: JSX.Element
  header: string | JSX.Element
  body: string | JSX.Element
  styles?: string
}

export default function Card ({
  header,
  image,
  body,
  styles = 'bg-base-100 drop-shadow rounded-box'
}: CardProps): JSX.Element {
  return (
    <div className={styles}>
      <CardHeader content={header} />
      <div className='card'>
        {image}
        <CardBody content={body} />
      </div>
    </div>
  )
}

export interface CardHeaderProps {
  content: any
  styles?: string
}
export const CardHeader = ({
  content,
  styles = 'container mx-auto bg-base-100 rounded-box'
}: CardHeaderProps): JSX.Element => {
  return (
    <div className={styles}>
      <div data-test='cardHeader'>{content}</div>
    </div>
  )
}

export interface CardBodyProps {
  content: any
  styles?: string
}
export const CardBody = ({
  content,
  styles = 'card-body pt-2 pb-4'
}: CardBodyProps): JSX.Element => {
  return (
    <div data-test='cardBody' className={styles}>
      {content}
    </div>
  )
}
