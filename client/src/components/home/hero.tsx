import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const bannerImages = [
  {
    url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    title: "Expert Insurance Support",
  },
  {
    url: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11",
    title: "Fast Claim Resolution",
  },
  {
    url: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85",
    title: "Professional Assistance",
  },
  {
    url: "https://images.unsplash.com/photo-1556742393-d75f468bfcb0",
    title: "Trusted Advisory",
  },
  {
    url: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c",
    title: "Your Claims Partner",
  },
];

export default function Hero() {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % bannerImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const scrollToAboutUs = () => {
    const aboutUsSection = document.getElementById('about-us');
    if (aboutUsSection) {
      aboutUsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative overflow-hidden bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              {bannerImages[currentBanner].title}
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              We help you navigate through insurance claim settlements and disputes. Our expert team
              ensures your rights are protected.
            </p>
            <div className="mt-8 flex gap-4">
              <Button asChild size="lg">
                <Link href="/complaint">File Complaint</Link>
              </Button>
              <Button variant="outline" size="lg" onClick={scrollToAboutUs}>
                About Us
              </Button>
            </div>
          </div>
          <div className="relative h-[300px] md:h-auto">
            {bannerImages.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.title}
                className={`absolute inset-0 w-full h-full rounded-lg object-cover shadow-xl transition-opacity duration-1000 ${
                  index === currentBanner ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}