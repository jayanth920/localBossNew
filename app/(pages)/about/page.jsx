export default function AboutUs() {
  return (
    <section
      className="mt-[20vh] max-w-4xl mx-[10vw] md:mx-auto p-4 bg-amber-50 sm:mt-[5vh] mb-[5vh] md:mb-0 rounded-lg shadow-md"
      aria-labelledby="about-us-heading"
    >
      <h1 id="about-us-heading" className="text-3xl font-bold mb-4">
        About LocalBoss
      </h1>
      <p className="text-lg text-gray-800 mb-4">
        LocalBoss is your go-to app for everything local—whether it's fresh groceries, tasty food, daily essentials, or even electronics and drinks. We’re here to support neighborhood stores and make shopping convenient for you.
      </p>
      <p className="text-lg text-gray-800 mb-4">
        Our mission is simple: bring the local market to your fingertips. With LocalBoss, you can shop from trusted stores in your area, support your community, and get your needs delivered faster than ever.
      </p>
      <p className="text-lg text-gray-800">
        Whether you're stocking up on groceries, craving a snack, or just browsing around, LocalBoss is here to make your life easier—one local purchase at a time.
      </p>
    </section>
  );
}
