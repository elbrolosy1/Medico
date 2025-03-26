import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-12 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Our Mission
          </p>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Founded in 2025, Medico is built upon a vision to make healthcare more accessible,
            accurate, and user-friendly by leveraging advanced AI and medical imaging.
          </p>
        </div>
        <div className="mt-10 prose prose-blue dark:prose-invert max-w-none">
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            We believe in closing the gap between patients and healthcare providers, particularly 
            in rural or underserved areas, by offering timely, AI-driven diagnoses and clear, 
            actionable insights.
          </p>

          <p className="text-gray-500 dark:text-gray-400 text-lg mt-4">
            Backed by a team of healthcare professionals and AI experts, Medico integrates 
            symptom-based analysis with cutting-edge imaging technology to deliver fast, 
            reliable results. Our platform addresses critical challenges like diagnostic delays 
            and high healthcare costs, aiming to enhance patient outcomes and reduce stress 
            for both patients and providers.
          </p>

          <p className="text-gray-500 dark:text-gray-400 text-lg mt-4">
            We envision a future where managing your health is as intuitive as checking your 
            phone, where advanced AI tools empower you to make informed decisions, and where 
            no one is left behind due to distance or limited resources. Through continuous 
            innovation, data security, and a commitment to patient-centric design, we strive 
            to redefine what’s possible in modern healthcare.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
