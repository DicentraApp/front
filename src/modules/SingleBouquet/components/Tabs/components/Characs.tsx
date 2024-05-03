import { useAppSelector } from '@/hooks/hooks'

const Characs = () => {
  const {
    flowerItem: { characteristic },
  } = useAppSelector((state) => state.flowers)

  const characteristicArr = [
    {
      title: 'Sizes',
      props: `height: ${characteristic.height} cm, width: ${characteristic.width} cm`,
    },
    { title: 'Colors', props: characteristic.color.join(', ') },
    { title: 'Mixture', props: characteristic.compound.join(', ') },
    { title: 'Events', props: characteristic.events.join(', ') },
  ]

  return (
    <>
      {characteristicArr.map((char) => (
        <div className="flex mb-1 w-full" key={char.title}>
          <div className="w-2/12 mr-4 font-semibold">{char.title}:</div>
          <div className="w-10/12">{char.props}</div>
        </div>
      ))}
    </>
  )
}

export default Characs
