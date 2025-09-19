export default function PrivacyContent() {
  return (
    <section className="min-h-screen bg-black py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-white mb-6">Privacy Policy</h1>

        <p className="text-white/60 text-sm mb-12">Last updated: July 19, 2025</p>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-6">Legal bases we rely on</h2>
            <ul className="space-y-4">
              <li className="text-white/80 leading-relaxed flex">
                <span className="mr-2">•</span>
                <span>Performance of a Contract: We process your data to provide, maintain, and support the Services you have requested under our Terms of Service or other agreement with you.</span>
              </li>
              <li className="text-white/80 leading-relaxed flex">
                <span className="mr-2">•</span>
                <span>Legitimate Interests: We use personal data to secure the platform, detect fraud, generate aggregate analytics, and improve AI features where these interests are not outweighed by your privacy rights.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}