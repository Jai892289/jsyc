import { Eye, Target } from "lucide-react";

export default function VisionMission() {
  return (
    <section className="py-5 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center rounded-full bg-blue-50 text-blue-700 px-4 py-2 text-sm font-medium">
            Our Foundation
          </span>

          <h2 className="mt-5 text-3xl font-bold text-slate-900">
            Our Vision & Mission
          </h2>

          <p className="mt-5 text-lg text-slate-500 leading-relaxed">
            Building a skilled and educated Jharkhand through
            innovative digital learning solutions and accessible
            educational opportunities.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mt-16">

          {/* Vision */}
          <div className="group bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-3xl p-10 hover:shadow-xl transition-all duration-300">

            <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center">
              <Eye className="w-8 h-8 text-white" />
            </div>

            <h3 className="mt-8 text-2xl font-bold text-slate-900">
              Our Vision
            </h3>

            <p className="mt-5 text-md text-slate-600 leading-8">
              To create a comprehensive digital ecosystem that
              ensures quality education and skill development
              opportunities for every student across Jharkhand,
              empowering communities and fostering sustainable
              growth.
            </p>

            <div className="mt-8 pt-6 border-t border-blue-100">
              <span className="text-blue-700 font-semibold">
                Empower • Educate • Transform
              </span>
            </div>

          </div>

          {/* Mission */}
          <div className="group bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 rounded-3xl p-10 hover:shadow-xl transition-all duration-300">

            <div className="w-16 h-16 rounded-2xl bg-emerald-600 flex items-center justify-center">
              <Target className="w-8 h-8 text-white" />
            </div>

            <h3 className="mt-8 text-2xl font-bold text-slate-900">
              Our Mission
            </h3>

            <p className="mt-5 text-md text-slate-600 leading-8">
              To provide world-class educational infrastructure,
              modern digital learning tools, expert guidance,
              and accessible skill development programs that
              prepare students and teachers for future success.
            </p>

            <div className="mt-8 pt-6 border-t border-emerald-100">
              <span className="text-emerald-700 font-semibold">
                Innovate • Learn • Achieve
              </span>
            </div>

          </div>

        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

          <div className="text-center bg-slate-50 rounded-2xl p-6">
            <h4 className="text-4xl font-bold text-blue-700">
              25K+
            </h4>
            <p className="mt-2 text-slate-600">
              Students
            </p>
          </div>

          <div className="text-center bg-slate-50 rounded-2xl p-6">
            <h4 className="text-4xl font-bold text-blue-700">
              500+
            </h4>
            <p className="mt-2 text-slate-600">
              Teachers
            </p>
          </div>

          <div className="text-center bg-slate-50 rounded-2xl p-6">
            <h4 className="text-4xl font-bold text-blue-700">
              50+
            </h4>
            <p className="mt-2 text-slate-600">
              Centers
            </p>
          </div>

          <div className="text-center bg-slate-50 rounded-2xl p-6">
            <h4 className="text-4xl font-bold text-blue-700">
              95%
            </h4>
            <p className="mt-2 text-slate-600">
              Success Rate
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}