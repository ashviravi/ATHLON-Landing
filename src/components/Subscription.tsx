import React from 'react';
import { Check, X } from 'lucide-react';

interface Feature {
  text: string;
  included: boolean;
}

interface PricingTierProps {
  title: string;
  price: string;
  description: string;
  features: Feature[];
  cta: string;
}

const PricingTier: React.FC<PricingTierProps> = ({ title, price, description, features, cta }) => (
  <div className="w-full max-w-sm border border-gray-300 rounded-lg transform transition duration-300 hover:scale-105">
    <div className="px-6 py-4">
      <h2 className="text-xl font-bold text-[#020d30]">{title}</h2>
      <p className="mt-2 text-[#272728]">{description}</p>
    </div>
    <div className="px-6 py-4">
      <div className="mb-6">
        <span className="text-3xl font-bold text-[#020d30]">${price}</span>
        {price !== 'Custom' && <span className="text-gray-600 ml-2">/month</span>}
      </div>
      <ul className="space-y-3">
        {features?.map((feature, index) => (
          <li key={index} className="flex items-center">
            {feature.included ? (
              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
            ) : (
              <X className="h-5 w-5 text-gray-300 mr-2 flex-shrink-0" />
            )}
            <span className={`text-sm ${feature.included ? 'text-gray-900' : 'text-gray-500'}`}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
    <div className="px-6 py-4">
      <button className="w-full px-4 py-2 rounded-2xl transition-all duration-300 ease-in-out bg-[#020d30] hover:bg-gray-800 text-white hover:scale-105">
        {cta}
      </button>
    </div>
  </div>
);

const Subscription: React.FC = () => {
  const plans: PricingTierProps[] = [
    {
      title: 'Basic',
      price: '0',
      description: 'Perfect for casual sport enthusiasts',
      cta: 'Coming soon',
      features: [
        { text: 'Real-time court availability checking', included: true },
        { text: 'Basic booking management', included: true },
        { text: 'Cash payments on-site', included: true },
        { text: 'AI-powered recommendations', included: false },
        { text: 'Group booking & cost splitting', included: false },
        { text: 'Equipment rental access', included: false },
        { text: '3D facility maps', included: false },
      ],
    },
    {
      title: 'Premium',
      price: '29',
      description: 'Enhanced features for serious players',
      cta: 'Coming soon',
      features: [
        { text: 'All Basic features included', included: true },
        { text: 'AI-powered personalized recommendations', included: true },
        { text: 'Interactive 3D facility maps', included: true },
        { text: 'Group booking & cost splitting', included: true },
        { text: 'Weather-based suggestions', included: true },
        { text: 'Dynamic pricing benefits', included: true },
        { text: 'AI chatbot support', included: true },
      ],
    },
    {
      title: 'Enterprise',
      price: 'Custom',
      description: 'Custom solutions for sports organizations',
      cta: 'Contact Us',
      features: [
        { text: 'All Premium features included', included: true },
        { text: 'Custom facility branding', included: true },
        { text: 'Advanced analytics dashboard', included: true },
        { text: 'Multi-location management', included: true },
        { text: 'Custom pricing strategies', included: true },
        { text: 'Dedicated support team', included: true },
        { text: 'Bulk booking discounts', included: true },
      ],
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-[#020d30]">Choose Your Perfect Plan</h2>
        <p className="text-[#272728] max-w-2xl mx-auto">
          Get access to Sri Lanka's most advanced sports facility booking platform with AI-powered recommendations, 
          real-time availability, and seamless booking management.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {plans.map((plan) => (
          <PricingTier key={plan.title} {...plan} />
        ))}
      </div>
    </div>
  );
};

export default Subscription;
