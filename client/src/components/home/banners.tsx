export default function Banners() {
  const promotionalBanners = [
    {
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
      title: "Quick Claim Settlement",
    },
    {
      image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d",
      title: "24/7 Expert Support",
    },
    {
      image: "https://images.unsplash.com/photo-1550565118-3a14e8d0386f",
      title: "Special Insurance Offers",
    },
    {
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85",
      title: "Insurance Advisory",
    },
  ];

  return (
    <section className="py-6 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-semibold mb-6">Featured</h2>
        <div className="overflow-x-auto">
          <div className="flex gap-4 pb-4 min-w-max">
            {promotionalBanners.map((banner, index) => (
              <div
                key={index}
                className="relative min-w-[280px] h-[160px] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                  <h3 className="text-white font-semibold">{banner.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
