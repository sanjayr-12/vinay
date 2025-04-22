const HomeIntro = () => {
  return (
    <div>
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to <span className="text-primary">SpecView</span>
          </h1>

          <br />

          <p className="mb-6 text-gray-800 dark:text-gray-200">
            <strong>SpecView</strong> is a powerful, AI-enhanced platform that
            makes building design and project communication seamless. Whether
            you're an engineer planning complex layouts or a client reviewing
            your dream project, SpecView bridges the gap with real-time
            interaction, intelligent tools, and visual clarity.
          </p>

          <ul className="text-left space-y-3 max-w-md mx-auto mb-8 text-gray-800 dark:text-gray-300">
            <li>✔️ View prebuilt diagrams and past project data</li>
            <li>
              ✔️ Suggest edits and changes with simple comments or prompts
            </li>
            <li>✔️ Instantly generate updated designs using AI</li>
            <li>✔️ Track site progress and cost estimations in one place</li>
          </ul>

          <p className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">
            With SpecView, you don’t just view a project—you collaborate,
            create, and shape it together.
          </p>
          <p className="text-xl font-bold text-primary dark:text-primary-content">
            Design smarter. Communicate better. Build with clarity.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomeIntro;
