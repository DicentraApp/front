import { useAppSelector } from '@/hooks/hooks'

const Description = () => {
  const {
    flowerItem: { description },
  } = useAppSelector((state) => state.flowers)

  return <p>{description}</p>
}

export default Description
