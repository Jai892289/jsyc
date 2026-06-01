import { Eye, Target } from "lucide-react";

export default function VisionMission() {
  return (
    <section className="py-5 bg-white">
      <div className="max-w-7xl mx-auto px-2">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center rounded-full bg-blue-50 text-blue-700 text-sm font-medium">
            Our Foundation
          </span>

          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            Our Vision & Mission
          </h2>

          <p className="mt-5 text-lg text-slate-500 leading-relaxed">
            Building a skilled and educated Jharkhand through
            innovative digital 
          </p>
        </div>

         {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mt-16">

          {/* Vision */}
          <div className="group bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-3xl p-5 hover:shadow-xl transition-all duration-300">

            <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center">
              <Eye className="w-8 h-8 text-white" />
            </div>

            <h3 className="mt-4 text-xl font-bold text-slate-900">
              Our Vision
            </h3>

            <p className="mt-2 text-sm text-slate-600 leading-8">
              To create a comprehensive digital ecosystem that
              ensures quality education and skill development
              opportunities
            </p>

            <div className="mt-2 pt-6 border-t border-blue-100">
              <span className="text-blue-700 font-semibold text-sm">
                Empower • Educate • Transform
              </span>
            </div>

          </div>

          {/* Mission */}
          <div className="group bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 rounded-3xl p-5 hover:shadow-xl transition-all duration-300">

            <div className="w-16 h-16 rounded-2xl bg-emerald-600 flex items-center justify-center">
              <Target className="w-8 h-8 text-white" />
            </div>

            <h3 className="mt-4 text-xl font-bold text-slate-900">
              Our Mission
            </h3>

            <p className="mt-2 text-sm text-slate-600 leading-8">
              To provide world-class educational infrastructure,
              modern digital learning tools, expert guidance,
              and accessible skill development programs that
              prepare.
            </p>

            <div className="mt-4 pt-6 border-t border-emerald-100">
              <span className="text-emerald-700 font-semibold text-sm">
                Innovate • Learn • Achieve
              </span>
            </div>

          </div>

        </div>
   

      </div>
    </section>
  );
}