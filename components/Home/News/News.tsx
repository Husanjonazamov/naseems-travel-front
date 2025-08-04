import React from 'react';

const News = () => {
  return (
    <div className="py-20 w-[92%] sm:w-[90%] md:w-[85%] lg:w-[80%] max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left: Text Content */}
        <div>
          <h2 className="text-2xl sm:text-4xl font-bold text-blue-900 mb-6">
            HOLIDAYS THAT LET YOU BE JUST YOU
          </h2>
          <p className="text-gray-800 text-lg mb-4">
            On a Just You holiday, you're free to enjoy the experience. We're dedicated solo travel experts so we'll take care of everything else.
          </p>
          <p className="text-gray-800 text-lg mb-4">
            No worrying about where you have to be in the morning, or buying the right train ticket. It's time to just enjoy your chosen destination, relax and make friends with like-minded people.
          </p>
          <p className="text-gray-800 text-lg">
            With 25 years of experience in escorted touring specifically for solo travellers, and a Holiday Director on hand to craft your perfect trip, you will be free to do whatever feels… Just You.
          </p>
        </div>

        {/* Right: YouTube Video */}
        <div className="w-full aspect-video">
          <iframe
            className="w-full h-full rounded-xl shadow-lg"
            src="https://www.youtube.com/embed/CUX8v7J7gXs"
            title="Just You Holidays"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default News;
