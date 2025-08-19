interface Service {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: string;
}

export function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="border border-gray-700 bg-gray-800 rounded-lg p-6 text-white">
      <h3 className="text-xl font-bold text-gold-500 mb-2">{service.title}</h3>
      <p className="text-gray-300 mb-4">{service.description}</p>
      <div className="text-2xl font-bold text-gold-500">
        ${service.price} <span className="text-sm text-gray-400">/{service.duration}</span>
      </div>
      <button className="mt-4 bg-gold-500 text-black px-4 py-2 rounded-md hover:bg-gold-600">
        Learn More
      </button>
    </div>
  );
}