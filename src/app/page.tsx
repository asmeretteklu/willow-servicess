export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 border-b border-gray-700">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 bg-gold-500 rounded-full"></div>
          <span className="text-xl font-bold">Willow Services</span>
        </div>
        <div className="flex gap-6">
          <a href="#" className="text-gray-300 hover:text-white">Services</a>
          <a href="#" className="text-gray-300 hover:text-white">About</a>
          <a href="#" className="text-gray-300 hover:text-white">Contact</a>
          <button className="border border-gold-500 text-gold-500 px-4 py-2 rounded-md hover:bg-gold-500 hover:text-black">
            Sign In
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <h1 className="text-5xl font-bold mb-6">
          Professional Services for <span className="text-gold-500">Your Needs</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
          From data entry to passport services and website development, we provide expert solutions.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-gold-500 text-black px-6 py-3 rounded-md text-lg hover:bg-gold-600">
            Explore Services
          </button>
          <button className="border border-gold-500 text-gold-500 px-6 py-3 rounded-md text-lg hover:bg-gold-500 hover:text-black">
            Contact Us
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-700 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-8 w-8 bg-gold-500 rounded-full"></div>
            <span className="text-xl font-bold">Willow Services</span>
          </div>
          <p className="text-gray-400">© 2023 Willow Services. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}