import { FC, useEffect, useState } from 'react'
import { notesData } from './data'
import { ArrowNext, ArrowPrev } from '@/common/UI/Arrows'
import DarktBtn from '@/common/UI/Buttons/DarkBtn'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import { setActiveCardData, setNoteMessage } from '@/features/order/orderSlice'
import { addCard } from '@/features/cart/cartSlice'
import { INotesData } from '@/common/dto/getOrderDto'

interface OrderNotesProps {
  activeStep: number
  steps: number
  handleBack: () => void
  handleNext: () => void
}

const OrderNotes: FC<OrderNotesProps> = ({
  activeStep,
  steps,
  handleBack,
  handleNext,
}) => {
  const dispatch = useAppDispatch()
  const { noteMessage, activeCardData } = useAppSelector((state) => state.order)

  const itemWidth = 190
  const wrapperWidth = itemWidth * notesData.length
  const [offset, setOffset] = useState(0)
  const [countSlides, setCountSlides] = useState(4)
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [activeCard, setActiveCard] = useState<INotesData>(notesData[0])
  const [noteText, setNoteText] = useState(noteMessage || '')

  const [disabledNextBtn, setDisabledNextBtn] = useState(false)

  const handleRightClick = () => {
    setOffset((offset) => offset - itemWidth)
    console.log('click r')

    if (countSlides === notesData.length) {
      return
    } else {
      setCountSlides((prev) => prev + 1)
    }
  }

  const handleLeftClick = () => {
    if (!offset) return
    console.log('click l')

    setOffset((offset) => offset + itemWidth)
    setCountSlides((prev) => prev - 1)
  }

  const handleAddCard = (index: number, card: INotesData) => {
    setActiveIndex(index)
    setActiveCard(card)
  }

  const handleAddCardAndNotes = () => {
    dispatch(setNoteMessage(noteText))
    dispatch(setActiveCardData({ cardIndex: activeIndex, cardOffset: offset }))

    dispatch(addCard(activeCard))

    handleNext()
  }

  useEffect(() => {
    if (activeCardData?.cardOffset) {
      setActiveIndex(activeCardData.cardIndex)
      setOffset(activeCardData.cardOffset)
    }
  }, [activeCardData])

  useEffect(() => {
    if (!noteText) {
      setDisabledNextBtn(true)
    } else {
      setDisabledNextBtn(false)
    }
  }, [noteText])

  return (
    <>
      <div className="mb-6">
        <div className="relative mb-6">
          <div className="overflow-hidden w-full">
            <div
              className="flex justify-between transition-transform"
              style={{
                width: `${wrapperWidth}px`,
                transform: `translateX(${offset}px)`,
              }}
            >
              {notesData.map((item, i) => (
                <div
                  key={item.id}
                  style={{
                    width: `${itemWidth}px`,
                    paddingRight: '10px',
                    cursor: 'pointer',
                  }}
                >
                  <div
                    className="w-full h-[189px] mb-2 relative"
                    onClick={() => handleAddCard(i, item)}
                  >
                    {activeIndex === i && (
                      <div className="bg-dark w-full h-[189px] absolute top-0 left-0 opacity-50 flex justify-center items-center">
                        <img src="/images/icons/check.svg" alt="check" />
                      </div>
                    )}

                    <img
                      className="w-full object-cover"
                      src={`/images/order/${item.imgPath}`}
                      alt="Notes"
                    />
                  </div>

                  <div className="text-center leading-5 h-10">{item.name}</div>
                  <div className="text-center text-xl font-medium">
                    {item.price} $
                  </div>
                </div>
              ))}
            </div>
          </div>
          <ArrowNext
            handleClick={handleRightClick}
            dataLenght={notesData?.length}
            countSlides={countSlides}
            cssStyles="top-20 -right-3 bg-dark border-dark"
            fillColor="#fff"
          />
          <ArrowPrev
            handleClick={handleLeftClick}
            offset={!!offset}
            cssStyles="top-20 -left-6 bg-dark border-dark"
            fillColor="#fff"
          />
        </div>
        <textarea
          className="w-full h-36 rounded-3xl resize-none p-5 focus:outline-gold"
          name="noteText"
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
          placeholder="Enter the text of your note"
        ></textarea>
      </div>
      <div className="absolute bottom-12 flex justify-between right-12 left-12">
        <DarktBtn
          width="w-40 disabled:opacity-50 disabled:bg-dark"
          disabled={activeStep === 0}
          handleClick={handleBack}
          text="Back"
          type="button"
        />
        <DarktBtn
          width="w-40 disabled:opacity-50 disabled:bg-dark"
          type="button"
          disabled={disabledNextBtn}
          text={activeStep === steps ? 'Finish' : 'Next'}
          handleClick={handleAddCardAndNotes}
        />
      </div>
    </>
  )
}

export default OrderNotes
