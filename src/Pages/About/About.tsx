const About = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-8 sm:py-12 md:py-16 px-4">
      <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 md:mb-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-4 sm:mb-6">About Us</h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed px-2">
          Welcome to our stationery shop, your one-stop destination for high-quality office and school supplies. Since our establishment in 2020,
          we've been committed to providing a wide range of products that inspire creativity and productivity. Whether you're an artist, student, or
          professional, we have the perfect tools to bring your ideas to life.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mb-12 sm:mb-16 md:mb-20">
        <div className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
            alt="Stationery items"
            className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover"
          />
        </div>
        <div className="space-y-4 sm:space-y-6 px-2">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-800 mb-2 sm:mb-4">Our Mission</h2>
          <p className="text-slate-600 leading-relaxed">
            Our mission is to provide top-notch stationery products that enhance creativity, organization, and efficiency. We aim to bring you the
            best in writing, drawing, and office supplies to support your daily needs.
          </p>
          <p className="text-slate-600 leading-relaxed">We are committed to:</p>
          <ul className="list-disc list-inside text-slate-600 space-y-2 ml-2 sm:ml-4">
            <li>Offering a diverse range of high-quality stationery items</li>
            <li>Encouraging creativity and productivity through our products</li>
            <li>Providing excellent customer service and support</li>
            <li>Supporting sustainability with eco-friendly product options</li>
          </ul>
        </div>
      </div>

      <div className="bg-slate-100 py-12 sm:py-16 md:py-20 px-4 mb-12 sm:mb-16 md:mb-20 rounded-2xl sm:rounded-3xl">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-800 text-center mb-8 sm:mb-12">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Quality",
                description: "We ensure that every product we offer meets high standards of durability and functionality.",
                icon: "📎",
              },
              {
                title: "Creativity",
                description: "Our products inspire artistic expression, organization, and innovation in everyday life.",
                icon: "🎨",
              },
              {
                title: "Customer Satisfaction",
                description: "We value our customers and strive to provide an exceptional shopping experience with personalized service.",
                icon: "😊",
              },
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6">{value.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-3 sm:mb-4">{value.title}</h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-2">
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-800 text-center mb-8 sm:mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {[
            { name: "Anna Thompson", position: "Founder & CEO" },
            { name: "David Miller", position: "Product Specialist" },
            { name: "Sophia Lee", position: "Creative Director" },
            { name: "John Carter", position: "Customer Support Lead" },
          ].map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-3 sm:mb-4 mx-auto w-24 h-24 sm:w-32 sm:h-32 overflow-hidden rounded-full transform group-hover:scale-105 transition-transform duration-300">
                <img src={`https://i.pravatar.cc/150?img=${index + 24}`} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-slate-800 mb-1">{member.name}</h3>
              <p className="text-sm sm:text-base text-slate-600">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
