import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  HelpCircle,
} from "lucide-react";

export default function ContactPage() {
  return (
    <main>

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">

          <h1 className="text-4xl font-bold">
            Contact Us
          </h1>

          <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
            We're here to help students, teachers, and
            institutions. Reach out to our team anytime.
          </p>

        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-slate-50 rounded-3xl p-8 text-center">
              <Phone className="w-12 h-12 mx-auto text-blue-700" />
              <h3 className="mt-5 text-xl font-bold">
                Call Us
              </h3>
              <p className="mt-2 text-slate-500">
                +91 98765 43210
              </p>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8 text-center">
              <Mail className="w-12 h-12 mx-auto text-blue-700" />
              <h3 className="mt-5 text-xl font-bold">
                Email Us
              </h3>
              <p className="mt-2 text-slate-500">
                support@jsyc.in
              </p>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8 text-center">
              <MapPin className="w-12 h-12 mx-auto text-blue-700" />
              <h3 className="mt-5 text-xl font-bold">
                Visit Us
              </h3>
              <p className="mt-2 text-slate-500">
                Ranchi, Jharkhand
              </p>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8 text-center">
              <Clock className="w-12 h-12 mx-auto text-blue-700" />
              <h3 className="mt-5 text-xl font-bold">
                Working Hours
              </h3>
              <p className="mt-2 text-slate-500">
                Mon - Sat, 9 AM - 6 PM
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Contact Form */}
  
      {/* Office Locations */}
      <section className=" bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">
            <h2 className="text-3xl font-bold">
              Our Offices
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-10">

            {[
              "Ranchi Office",
              "Jamshedpur Office",
              "Dhanbad Office",
            ].map((office) => (
              <div
                key={office}
                className="bg-slate-50 rounded-3xl p-8"
              >
                <MapPin className="text-blue-700 w-10 h-10" />

                <h3 className="mt-5 text-xl font-bold">
                  {office}
                </h3>

                <p className="mt-3 text-slate-500">
                  Jharkhand, India
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* FAQ */}
      <section className="py-24 bg-slate-50">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center">
            <h2 className="text-3xl font-bold">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-14">

            {[
              "How do I enroll?",
              "How can teachers register?",
              "Where are the centers located?",
              "How do I contact support?",
            ].map((faq) => (
              <div
                key={faq}
                className="bg-white rounded-2xl p-6 shadow-sm"
              >
                <div className="flex gap-3">
                  <HelpCircle className="text-blue-700" />
                  <h3 className="font-semibold">
                    {faq}
                  </h3>
                </div>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Map */}
      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="bg-slate-200 h-[450px] rounded-3xl flex items-center justify-center">
            <p className="text-slate-500 text-lg">
              Google Map Integration Here
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-800 to-cyan-700 text-white py-20">

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-5xl font-bold">
            Need Immediate Assistance?
          </h2>

          <p className="mt-5 text-xl text-blue-100">
            Our support team is available to help you.
          </p>

          <button className="mt-8 bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold">
            Contact Support
          </button>

        </div>

      </section>

    </main>
  );
}