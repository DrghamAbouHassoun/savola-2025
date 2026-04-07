import React from 'react'

interface SmallContainerProps extends React.HTMLAttributes<HTMLDivElement> {}


const SmallContainer = (props: SmallContainerProps) => {
  return (
    <div
      {...props}
      className={`container mx-auto px-4 w-full max-w-5xl ${props.className}`}
    >
      {props.children}
    </div>
  )
}

export default SmallContainer