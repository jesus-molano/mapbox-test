import { Feature } from "../types"

type Props = {
  onClick: (description: string) => void
  children?: React.ReactNode
  feature: Feature,
}

const Marker = ({ onClick, children, feature }: Props) => {
  const handleClick = () => {
    if(!feature?.properties?.description) return null
    onClick(feature.properties.description)
  }

  return (
    <div onClick={handleClick} className='bg-green-600 text-white text-center p-2 rounded-lg cursor-pointer '>
      {children}
    </div>
  )
}

export default Marker
