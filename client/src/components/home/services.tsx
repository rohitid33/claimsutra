import { Link } from "wouter";

const servicesByCategory = {
  insurance: [
    {
      title: "Health Claim",
      icon: "🏥",
      link: "/health-claim"
    },
    {
      title: "Motor Accident",
      icon: "🚗",
      link: "/motor-claim"
    },
    {
      title: "Fire Claim",
      icon: "🔥",
      link: "/fire-claim"
    },
    {
      title: "Life Insurance",
      icon: "👥",
      link: "/life-claim"
    },
    {
      title: "Travel Claim",
      icon: "✈️",
      link: "/travel-claim"
    },
    {
      title: "Property Claim",
      icon: "🏠",
      link: "/property-claim"
    },
    {
      title: "Marine Claim",
      icon: "🚢",
      link: "/marine-claim"
    },
    {
      title: "Liability Claim",
      icon: "⚖️",
      link: "/liability-claim"
    }
  ],
  loan: [
    {
      title: "Personal Loan",
      icon: "👤",
      link: "/personal-loan"
    },
    {
      title: "Home Loan",
      icon: "🏠",
      link: "/home-loan"
    },
    {
      title: "Business Loan",
      icon: "💼",
      link: "/business-loan"
    },
  ],
  consumer: [
    {
      title: "Product Issues",
      icon: "📦",
      link: "/product-issues"
    },
    {
      title: "Service Quality",
      icon: "⭐",
      link: "/service-quality"
    },
    {
      title: "Billing Disputes",
      icon: "💳",
      link: "/billing-disputes"
    },
  ],
};

const popularServices = [
  {
    title: "Health Insurance",
    icon: "🏥",
    link: "/health-insurance"
  },
  {
    title: "Car Insurance",
    icon: "🚗",
    link: "/car-insurance"
  },
  {
    title: "Life Insurance",
    icon: "👥",
    link: "/life-insurance"
  },
  {
    title: "Property Insurance",
    icon: "🏠",
    link: "/property-insurance"
  },
  {
    title: "Travel Insurance",
    icon: "✈️",
    link: "/travel-insurance"
  }
];

interface ServicesProps {
  category: string;
}

export default function Services({ category }: ServicesProps) {
  const services = servicesByCategory[category as keyof typeof servicesByCategory] || servicesByCategory.insurance;

  // Split services into two rows
  const midpoint = Math.ceil(services.length / 2);
  const row1 = services.slice(0, midpoint);
  const row2 = services.slice(midpoint);

  return (
    <>
      <section className="py-6">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-semibold mb-6">Services</h2>
          <div className="space-y-4">
            <div className="overflow-x-auto">
              <div className="flex gap-4 pb-4 min-w-max">
                {row1.map((service, index) => (
                  <Link key={index} href={service.link}>
                    <a className="flex flex-col items-center min-w-[100px]">
                      <div className="w-16 h-16 rounded-full bg-white border shadow-sm flex items-center justify-center text-2xl mb-2 hover:shadow-md transition-shadow">
                        {service.icon}
                      </div>
                      <span className="text-sm text-center whitespace-nowrap">{service.title}</span>
                    </a>
                  </Link>
                ))}
              </div>
            </div>
            <div className="overflow-x-auto">
              <div className="flex gap-4 pb-4 min-w-max">
                {row2.map((service, index) => (
                  <Link key={index} href={service.link}>
                    <a className="flex flex-col items-center min-w-[100px]">
                      <div className="w-16 h-16 rounded-full bg-white border shadow-sm flex items-center justify-center text-2xl mb-2 hover:shadow-md transition-shadow">
                        {service.icon}
                      </div>
                      <span className="text-sm text-center whitespace-nowrap">{service.title}</span>
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-semibold mb-6">Popular Services</h2>
          <div className="overflow-x-auto">
            <div className="flex gap-4 pb-4 min-w-max">
              {popularServices.map((service, index) => (
                <Link key={index} href={service.link}>
                  <a className="flex flex-col items-center min-w-[100px]">
                    <div className="w-16 h-16 rounded-full bg-white border shadow-sm flex items-center justify-center text-2xl mb-2 hover:shadow-md transition-shadow">
                      {service.icon}
                    </div>
                    <span className="text-sm text-center whitespace-nowrap">{service.title}</span>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}