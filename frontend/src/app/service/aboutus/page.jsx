

export const  metadata = {
    title : 'About us | Crazy Poll'
}

export default function Page() {
  return (
    <div className="bg-gray-100 text-gray-800">
      <section className="bg-blue-600 text-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">
            About <span className="text-yellow-400">CrazyPolls</span>
          </h1>
          <p className="text-lg">
            Your go-to platform for creating fun, engaging, and insightful
            polls. Vote, discuss, and discover opinions on trending topics!
          </p>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg text-gray-600">
            At PollMaster, we aim to make polling more interactive and social.
            Whether you want to collect opinions, start a discussion, or simply
            have fun, our platform makes it easy and engaging!
          </p>
        </div>
      </section>

      <section className="py-12 bg-white px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-6">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-gray-100 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">
                📊 Public & Private Polls
              </h3>
              <p className="text-gray-600">
                Create private polls for exclusive voting or public polls for
                everyone to join.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">
                🎮 Gamified Experience
              </h3>
              <p className="text-gray-600">
                Earn rewards, badges, and rankings by participating in polls.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">
                🔍 Real-Time Insights
              </h3>
              <p className="text-gray-600">
                See instant voting results and engage in discussions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Meet the Team</h2>
          <p className="text-lg text-gray-600 mb-6">
            We are a group of tech enthusiasts passionate about creating
            interactive and engaging online experiences.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">👨‍💻 Siddharth Singh</h3>
              <p className="text-gray-600">Founder & Developer</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">🎨 UI/UX Designer</h3>
              <p className="text-gray-600">
                Crafting an engaging and user-friendly experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-6 bg-blue-600 text-white text-center">
        <p>© 2025 CrazyPolls. All rights reserved.</p>
      </footer>
    </div>
  );
}
