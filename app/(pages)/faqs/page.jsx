export default function Faqs() {
  return (
    <div className="max-w-4xl mx-auto p-4 bg-amber-50 mt-[5vh] rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>

      <div className="mb-4">
        <h2 className="text-xl font-semibold">📦 What kind of products can I buy on LocalBoss?</h2>
        <p className="text-gray-800">You can buy groceries, food, beverages, electronics, and other daily essentials—all from local businesses in your area.</p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold">🚚 How fast is delivery?</h2>
        <p className="text-gray-800">We aim for same-day delivery for all orders made before evening hours, depending on store hours and availability.</p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold">💳 How do I pay for my orders?</h2>
        <p className="text-gray-800">You can pay via card, UPI, or cash on delivery—whichever works best for you.</p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold">🏪 How do you support local stores?</h2>
        <p className="text-gray-800">Every item you purchase is directly fulfilled by a local shop. We handle the logistics, they focus on great service.</p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold">📍 Where is LocalBoss available?</h2>
        <p className="text-gray-800">We’re currently serving select neighborhoods and rapidly expanding. Stay tuned for updates in your area!</p>
      </div>
    </div>
  );
}
