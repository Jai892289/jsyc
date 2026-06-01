import {
  Users,
  GraduationCap,
  Building2,
  BadgeCheck,
} from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "25,000+",
    label: "Students Enrolled",
    color: "from-blue-600 to-cyan-500",
  },
  {
    icon: GraduationCap,
    value: "500+",
    label: "Expert Teachers",
    color: "from-emerald-600 to-green-500",
  },
  {
    icon: Building2,
    value: "50+",
    label: "Learning Centers",
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: BadgeCheck,
    value: "95%",
    label: "Success Rate",
    color: "from-purple-600 to-pink-500",
  },
];

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden py-10 bg-gradient-to-b from-slate-50 to-white">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(#2563eb 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <span className="inline-flex rounded-full bg-blue-50 text-blue-700 px-4 py-2 text-sm font-medium">
            Platform Statistics
          </span>

          <h2 className="mt-5 text-3xl font-bold text-slate-900">
            Making Impact Across Jharkhand
          </h2>

          <p className="mt-5 text-lg text-slate-500 max-w-3xl mx-auto">
            Empowering students, teachers, and institutions
            through modern education and digital innovation.
          </p>

        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  group
                  bg-white
                  rounded-3xl
                  border
                  border-slate-200
                  p-8
                  text-center
                  shadow-sm
                  hover:shadow-2xl
                  hover:-translate-y-2
                  transition-all
                  duration-300
                "
              >
                <div
                  className={`
                    w-20 h-20 mx-auto rounded-2xl
                    bg-gradient-to-r ${item.color}
                    flex items-center justify-center
                    shadow-lg
                    group-hover:scale-110
                    transition-transform
                    duration-300
                  `}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="mt-8 text-3xl font-extrabold text-slate-900">
                  {item.value}
                </h3>

                <p className="mt-3 text-slate-600 font-medium">
                  {item.label}
                </p>

                <div className="w-12 h-1 bg-blue-600 rounded-full mx-auto mt-5 opacity-70" />
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}