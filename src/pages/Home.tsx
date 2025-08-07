const HomePage = () => {
  return (
    <section id="home" className="flex flex-col py-20 text-center">
      <h2 className="text-4xl font-bold">Hi, I'm An Bui 👋</h2>
      <p className="mt-4 text-lg">
        Experienced Full-Stack Developer with approximately 10 years of hands-on experience in
        designing, building, and maintaining scalable applications across both frontend and backend.
        Proficient in{' '}
        <b>
          React, NestJS, Node.js, Java, Spring Boot, JavaScript, TypeScript, and Agile
          methodologies.
        </b>{' '}
        Passionate about solving real- world problems, embracing new technologies, and working
        collaboratively with cross-functional teams to deliver high-impact solutions.
      </p>
      <div className="mt-6 space-x-4">
        <a href="#projects" className="bg-blue-600 text-white px-4 py-2 rounded">
          View Projects
        </a>
        <a
          href="/An-Bui-Resume.pdf"
          download
          className="border border-blue-600 text-blue-600 px-4 py-2 rounded"
        >
          Download CV
        </a>
      </div>
    </section>
  );
};

export default HomePage;
