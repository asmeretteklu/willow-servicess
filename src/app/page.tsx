import { services, testimonials } from '@/data/mockData';

export default function Home() {
  const featuredServices = services.filter(service => service.featured);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 border-b border-gray-700">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 bg-gold-500 rounded-full"></div>
          <span className="text-xl font-bold">hhhhm</span>
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

      {/* Services Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map(service => (
              <div key={service.id} className="border border-gray-700 bg-gray-800 rounded-lg p-6 text-white">
                <h3 className="text-xl font-bold text-gold-500 mb-2">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="text-2xl font-bold text-gold-500">
                  ${service.price} <span className="text-sm text-gray-400">/{service.duration}</span>
                </div>
                <button className="mt-4 bg-gold-500 text-black px-4 py-2 rounded-md hover:bg-gold-600">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="border border-gray-700 bg-gray-800 rounded-lg p-6">
                <p className="text-gray-300 italic mb-4">&ldquo;{testimonial.content}&rdquo;</p>
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-gold-500 rounded-full mr-3"></div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-700 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-8 w-8 bg-gold-500 rounded-full"></div>
            <span className="text-xl font-bold">hhhhm</span>
          </div>
          <p className="text-gray-400">© 2023 hhhhm. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}