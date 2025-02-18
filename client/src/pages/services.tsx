
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Services() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">All Services</h1>
      
      {/* Insurance Services */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Insurance Services</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {servicesByCategory.insurance.map((service) => (
            <Card key={service.title}>
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">Get expert assistance with {service.title.toLowerCase()}</p>
                <Link href={service.link}>
                  <Button className="w-full">Learn More</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Loan Services */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Loan Services</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {servicesByCategory.loan.map((service) => (
            <Card key={service.title}>
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">Get expert assistance with {service.title.toLowerCase()}</p>
                <Link href={service.link}>
                  <Button className="w-full">Learn More</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Consumer Services */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Consumer Services</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {servicesByCategory.consumer.map((service) => (
            <Card key={service.title}>
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">Get expert assistance with {service.title.toLowerCase()}</p>
                <Link href={service.link}>
                  <Button className="w-full">Learn More</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

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
    }
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
    }
  ]
};
