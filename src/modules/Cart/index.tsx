import CartTable from './components/CartTable'

const Cart = () => {
  return (
    <div className="pt-48 bg-light relative font-roboto">
      <div className="container">
        <h2 className="text-center text-3xl font-medium mb-10">
          You have added to cart
        </h2>

        <CartTable />
      </div>
    </div>
  )
}

export default Cart
