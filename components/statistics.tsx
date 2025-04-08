export default function Statistics() {
  return (
    <section className="py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-green-600">50,000+</h3>
            <p className="text-gray-600">Plastic pieces removed from oceans</p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-green-600">1M+</h3>
            <p className="text-gray-600">People educated on sustainable practices</p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-green-600">1000+</h3>
            <p className="text-gray-600">Ocean Clean-Up Projects</p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-green-600">100+</h3>
            <p className="text-gray-600">Eco-Businesses supported worldwide</p>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative w-80 h-80 rounded-full bg-blue-100 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/turtlevector.png?height=320&width=320')" }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

