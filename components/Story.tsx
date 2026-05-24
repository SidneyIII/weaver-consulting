import Image from "next/image";
import { MortarboardIcon, CheckCircleIcon, RibbonIcon } from "@/components/icons";

const credentials = [
  {
    Icon: MortarboardIcon,
    text: "Columbia University, Class of 2026",
  },
  {
    Icon: CheckCircleIcon,
    text: "30+ College Acceptances",
  },
  {
    Icon: RibbonIcon,
    text: "Millions in Scholarship Offers",
  },
];

export default function Story() {
  return (
    <div className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="text-center mb-16">
          <p className="text-sm font-body font-semibold tracking-widest text-brand-teal uppercase mb-3">
            My Story
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-navy">
            From Council Bluffs to Columbia University
          </h2>
          <div className="mt-5 mx-auto w-16 h-0.5 bg-brand-teal" />
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Photo */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-3 rounded-2xl border border-brand-teal/20" />
              <div className="relative rounded-xl overflow-hidden shadow-sm">
                <Image
                  src="/images/sidney.png"
                  alt="Sidney Weaver III at Columbia University graduation"
                  width={2613}
                  height={4000}
                  className="w-auto rounded-xl max-h-[580px]"
                  priority
                />
              </div>
              <p className="mt-3 text-center font-body text-sm text-brand-secondary">
                Sidney Weaver III
              </p>
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <div className="space-y-6">
              <p className="font-body text-brand-secondary text-lg leading-relaxed">
                I grew up attending Thomas Jefferson High School and I know firsthand what it
                feels like to navigate the college process without the resources elite institutions
                hand their students. I did not have access to those tools &mdash; so I learned to
                find them myself.
              </p>
              <p className="font-body text-brand-secondary text-lg leading-relaxed">
                I applied to colleges on my own, got accepted to 27+ schools including multiple Ivy
                Leagues, UCLA, Berkeley, Georgetown, and UNC, received several full-ride offers, and
                ultimately chose Columbia University in New York City.
              </p>
              <p className="font-body text-brand-secondary text-lg leading-relaxed">
                I built Weaver Consulting because every student in this region deserves access to
                the same level of guidance that students at elite private schools take for granted.
                Your zip code should not determine your ceiling.
              </p>
            </div>

            {/* Credentials */}
            <div className="mt-10 space-y-4">
              {credentials.map(({ Icon, text }) => (
                <div key={text} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-sage flex items-center justify-center flex-shrink-0">
                    <Icon size={22} />
                  </div>
                  <p className="font-body font-semibold text-brand-navy text-base">{text}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded bg-brand-green text-white font-body font-semibold text-base hover:bg-brand-navy transition-colors duration-200 shadow-sm"
              >
                Work With Sidney
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
