import React from 'react';

const Aboutus = () => {
  return (
    <div>
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900">About AASTU University</h2>
            <div className="mt-6">
              <img src="https://source.unsplash.com/random/800x600?student,studying,sig=1" alt="About AASTU" className="rounded-lg" />
            </div>
            <div className="mt-6 prose prose-lg text-gray-500">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra arcu a massa
                ultricies, ac tempus risus pellentesque. Nullam eget risus id ipsum bibendum
                tristique.
              </p>
              <p>
                Phasellus tincidunt sed nulla eu eleifend. Donec ultricies aliquam luctus. Nam
                efficitur arcu nec felis volutpat, nec pulvinar lacus feugiat. Integer hendrerit
                libero nec magna consectetur, ac sodales mauris tempus.
              </p>
              {/* Add more content as needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
