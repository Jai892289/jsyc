import {
  Users,
  GraduationCap,
  Building2,
  Award,
  Eye,
  Target,
  CheckCircle,
} from "lucide-react";

export default function AboutPage() {
  return (
    <main>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-700 text-white">

        <div className="absolute inset-0 opacity-10">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">

          <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
            Government of Jharkhand Initiative
          </span>

          <h1 className="mt-6 text-4xl font-bold">
            About JSYC Platform
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-xl text-blue-100">
            Transforming education and skill development across
            Jharkhand through innovative digital solutions and
            accessible learning opportunities.
          </p>

        </div>

      </section>

      {/* Story */}
      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <div>
              <span className="text-blue-600 font-semibold">
                OUR STORY
              </span>

              <h2 className="mt-4 text-3xl font-bold text-slate-900">
                Empowering Education Through Innovation
              </h2>

              <p className="mt-6 text-lg text-slate-600 leading-8">
                The JSYC Digital Enrollment & Management Platform
                was established to create a unified educational
                ecosystem across Jharkhand. Our mission is to
                bridge the gap between students, educators, and
                institutions through modern technology.
              </p>

              <p className="mt-4 text-lg text-slate-600 leading-8">
                We provide seamless enrollment, training,
                monitoring, and educational management tools
                designed to improve learning outcomes and
                accessibility.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-10">

              <div className="grid grid-cols-2 gap-6">

                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <Users className="text-blue-600 w-10 h-10" />
                  <h3 className="mt-4 text-3xl font-bold">
                    25K+
                  </h3>
                  <p className="text-slate-500">
                    Students
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <GraduationCap className="text-green-600 w-10 h-10" />
                  <h3 className="mt-4 text-3xl font-bold">
                    500+
                  </h3>
                  <p className="text-slate-500">
                    Teachers
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <Building2 className="text-orange-600 w-10 h-10" />
                  <h3 className="mt-4 text-3xl font-bold">
                    50+
                  </h3>
                  <p className="text-slate-500">
                    Centers
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <Award className="text-purple-600 w-10 h-10" />
                  <h3 className="mt-4 text-3xl font-bold">
                    95%
                  </h3>
                  <p className="text-slate-500">
                    Success Rate
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Vision Mission */}
      <section className="py-24 bg-slate-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900">
              Vision & Mission
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mt-14">

            <div className="bg-white rounded-3xl p-10 shadow-sm">
              <Eye className="w-14 h-14 text-blue-600" />

              <h3 className="mt-6 text-2xl font-bold">
                Our Vision
              </h3>

              <p className="mt-4 text-slate-600 leading-8">
                To create a digitally empowered educational
                ecosystem that ensures equal opportunities for
                every learner in Jharkhand.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-sm">
              <Target className="w-14 h-14 text-green-600" />

              <h3 className="mt-6 text-2xl font-bold">
                Our Mission
              </h3>

              <p className="mt-4 text-slate-600 leading-8">
                To provide accessible, innovative, and
                technology-driven educational solutions for
                students, teachers, and institutions.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">
            <h2 className="text-3xl font-bold">
              Why Choose Us
            </h2>

            <p className="mt-4 text-xl text-slate-500">
              Building the future of education
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

            {[
              "Digital Learning Platform",
              "Expert Teachers",
              "Statewide Network",
              "Career-Oriented Programs",
            ].map((item) => (
              <div
                key={item}
                className="bg-slate-50 rounded-2xl p-6"
              >
                <CheckCircle className="text-blue-600 w-8 h-8" />

                <h3 className="mt-4 font-semibold text-lg">
                  {item}
                </h3>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-800 to-cyan-700 text-white py-20">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-4xl md:text-5xl font-bold">
            Join Our Educational Journey
          </h2>

          <p className="mt-5 text-xl text-blue-100">
            Become part of a growing community dedicated to
            learning, innovation, and success.
          </p>

          <button className="mt-8 bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition">
            Get Started Today
          </button>

        </div>

      </section>

    </main>
  );
}