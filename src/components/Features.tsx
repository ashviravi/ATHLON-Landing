// components/Features.tsx
import { Clock, Users, Map, CreditCard, CalendarDays, BarChart3 } from 'lucide-react';


const Features = () => {
  return (
    <section id="features" className="py-20 bg-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <section className="mb-16" style={{ marginTop: "2px" }}>
          <h2 className="text-2xl font-semibold text-center mb-8 text-yellow-500">Why Choose Athlon?</h2>
          <h1 className="text-4xl font-bold text-center mb-4 text-[#020d30]">Elevate Your Sports Facility Experience with Athlon</h1>
          <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-8">
            Athlon combines cutting-edge technology with user-friendly features to transform your sports facility
            experience. Whether you're a player, facility owner, or event organizer, our platform simplifies bookings, improves
            management, and ensures the best experience for everyone.
          </p>
        </section>

        <section className="mb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[ 
              {
                icon: <Clock className="w-8 h-8 text-orange-600" />,
                title: "Real-Time Booking",
                description: "Check live availability and instantly book courts across multiple locations. Get immediate confirmations and updates."
              },
              {
                icon: <Users className="w-8 h-8 text-orange-600" />,
                title: "Group Booking & Cost Splitting",
                description: "Organize team sports easily with group bookings and split costs automatically among participants."
              },
              {
                icon: <Map className="w-8 h-8 text-orange-600" />,
                title: "Interactive 3D Maps",
                description: "Explore facilities in detail with our interactive 3D maps. View court layouts and amenities before booking."
              },
              {
                icon: <CreditCard className="w-8 h-8 text-orange-600" />,
                title: "Flexible Payment Options",
                description: "Pay securely using digital wallets, credit cards, or cash on-site. Manage group payments effortlessly."
              },
              {
                icon: <CalendarDays className="w-8 h-8 text-orange-600" />,
                title: "Multi-Facility Management",
                description: "Book multiple courts across different locations in a single transaction. Perfect for events and tournaments."
              },
              {
                icon: <BarChart3 className="w-8 h-8 text-orange-600" />,
                title: "Dynamic Pricing",
                description: "Optimize revenue with smart pricing that adjusts based on peak hours, demand, and special events."
              }
            ].map((feature, index) => (
              <div key={index} className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 transform">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Features;
export {};