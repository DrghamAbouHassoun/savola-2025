import type { HTMLAttributes } from "react"
import useInView from "../../hooks/useInView"

interface AnimationPopUpProps extends HTMLAttributes<HTMLDivElement> {}

const AnimationPopUp = ({...props} : AnimationPopUpProps) => {
    const { inView, ref } = useInView();
  return (
    <div
      {...props}
      ref={ref}
      className={`animate-pop-up ${inView ? "active" : ""} ${props.className}`}
    />
  )
}

export default AnimationPopUp