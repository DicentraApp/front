const Intro = () => {
  return (
    <section className="container relative">
      <p className="font-medium text-xl w-5/12 mb-32">
        We created Dicentra so that you no longer have to think about the best
        way to express your feelings.
      </p>

      <div className="flex justify-between mb-48">
        <div className="w-5/12 text-base">
          <img src="images/intro/intro-1.jpg" alt="intro" />
          <h4 className="text-xl my-5 font-semibold">
            Service from the first second
          </h4>
          <p className="w-80">
            We scrupulously control all stages of interaction with our clients,
            from the moment of placing an order to its full implementation.
          </p>
        </div>
        <div className="w-5/12 text-base -mt-32">
          <img src="images/intro/intro-2.jpg" alt="intro" />
          <h4 className="text-xl my-5 font-semibold">Wow assortment</h4>
          <p className="w-80 mb-2">
            And here we have no time for jokes either!)))
          </p>
          <p className="w-80">
            4676 types of cut flowers and about 100 types of potted plants.
          </p>
        </div>
      </div>

      <div className="absolute -top-20 right-0">
        <img src="images/intro/intro-fone.png" alt="intro" />
      </div>
    </section>
  )
}

export default Intro
