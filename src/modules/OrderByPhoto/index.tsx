import PageWrapper from '@/common/components/PageWrapper'
import OrderByPhotoContent from './components/OrderByPhotoContent'
import OrderByPhotoForm from './components/OrderByPhotoForm'

const navData = [
  { nav: ' Order a bouquet from a photo', link: '', isActive: true },
]

const OrderByPhoto = () => {
  return (
    <PageWrapper title="Order a bouquet from a photo" navArr={navData}>
      <div className="relative flex items-center justify-center">
        <div className="flex items-center">
          <OrderByPhotoForm />
          <OrderByPhotoContent />
        </div>

        <img
          className="absolute -right-10 -bottom-10"
          src="images/fones/tulips.png"
          alt="tulips"
        />
        <img
          className="absolute -left-10 -bottom-10"
          src="images/fones/leaves.png"
          alt="leaves"
        />
      </div>
    </PageWrapper>
  )
}

export default OrderByPhoto
