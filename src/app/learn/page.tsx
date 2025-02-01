import React from "react";

const BinaryPageBlog = () => {
  return (
    <div className="tw-bg-gray-100 tw-min-h-screen tw-py-10 tw-px-4">
      <div className="tw-max-w-4xl tw-mx-auto tw-bg-white tw-rounded-2xl tw-shadow-lg tw-p-6">
        <h1 className="tw-text-3xl tw-font-bold tw-text-center tw-mb-6">
          Binary Page Study Material
        </h1>
        
        <section className="tw-mb-6">
          <h2 className="tw-text-2xl tw-font-semibold tw-mb-2">Introduction</h2>
          <p className="tw-text-gray-700">
            Binary numbers are the foundation of computing. They represent values using only 0s and 1s. This system is essential in digital electronics and computer science.
          </p>
        </section>

        <section className="tw-mb-6">
          <h2 className="tw-text-2xl tw-font-semibold tw-mb-2">Key Topics</h2>
          <ul className="tw-list-disc tw-list-inside tw-text-gray-700">
            <li>Binary to Decimal Conversion</li>
            <li>Decimal to Binary Conversion</li>
            <li>Binary Arithmetic</li>
            <li>Bitwise Operations</li>
            <li>Applications of Binary System</li>
          </ul>
        </section>

        <section className="tw-mb-6">
          <h2 className="tw-text-2xl tw-font-semibold tw-mb-2">Example</h2>
          <p className="tw-text-gray-700">
            Convert the binary number <strong>1011</strong> to decimal:
          </p>
          <div className="tw-bg-gray-200 tw-p-4 tw-rounded-lg tw-mt-2">
            (1 × 2³) + (0 × 2²) + (1 × 2¹) + (1 × 2⁰) = 8 + 0 + 2 + 1 = <strong>11</strong>
          </div>
        </section>

        <section className="tw-mb-6">
          <h2 className="tw-text-2xl tw-font-semibold tw-mb-2">Quick Quiz</h2>
          <p className="tw-text-gray-700 tw-mb-2">What is the decimal equivalent of 1101?</p>
          <button className="tw-bg-blue-500 tw-text-white tw-font-semibold tw-py-2 tw-px-4 tw-rounded-lg tw-mt-2 hover:tw-bg-blue-600">
            Check Answer
          </button>
        </section>
      </div>
    </div>
  );
};

export default BinaryPageBlog;
