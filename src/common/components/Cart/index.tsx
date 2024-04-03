const CartIcon = () => {
  return (
    <button className="ml-3 flex items-center">
      <img src="images/user/icon_cart.svg" />
      <div className="w-9 h-9 bg-dark rounded-full ml-0.5 flex items-center justify-center">
        <span className="text-white text-sm font-inter">89</span>
      </div>
    </button>
  )
}

export default CartIcon
