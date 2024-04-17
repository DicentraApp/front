import OrderByPhotoContent from './components/OrderByPhotoContent'
import OrderByPhotoForm from './components/OrderByPhotoForm'

const OrderByPhoto = () => {
  return (
    <section className="bg-light pt-48 pb-40 h-screen">
      <div className="container">
        <h1 className="text-4xl text-center font-medium font-dark mb-10">
          Order a bouquet from a photo
        </h1>
        <div className="w-full h-[478px] border border-gold border-solid relative flex items-center justify-center">
          <div className="flex items-center">
            <OrderByPhotoForm />
            <OrderByPhotoContent />
          </div>

          <img
            className="absolute right-0 bottom-0"
            src="images/fones/tulips.png"
            alt="tulips"
          />
          <img
            className="absolute left-0 bottom-0"
            src="images/fones/leaves.png"
            alt="leaves"
          />
        </div>
      </div>
    </section>
  )
}

export default OrderByPhoto
