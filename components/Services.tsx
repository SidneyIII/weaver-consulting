import type React from "react";
import {
  PathIcon,
  PenIcon,
  CompassIcon,
  DocumentIcon,
  DiamondIcon,
  RefreshIcon,
} from "@/components/icons";

interface Service {
  Icon: React.ComponentType<{ size?: number }>;
  title: string;
  description: string;
  note?: string;
}

const services: Service[] = [
  {
    Icon: PathIcon,
    title: "College Application Strategy",
    description:
      "Navigating the application process from school list to submission. Know exactly where to apply, when, and how to stand out.",
  },
  {
    Icon: PenIcon,
    title: "Essay Writing & Review",
    description:
      "Craft essays that tell your real story with clarity and confidence. Line-by-line feedback until it’s right.",
  },
  {
    Icon: CompassIcon,
    title: "Life & Career Goal Clarity",
    description:
      "Not sure what you want yet? That’s okay. We build a map together — backed by real Ivy League and Columbia University connections to show you what’s possible.",
  },
  {
    Icon: DocumentIcon,
    title: "Resume Maximization",
    description:
      "Turn your experiences into a document that opens doors, whether for college, jobs, or scholarships.",
  },
  {
    Icon: DiamondIcon,
    title: "Scholarship Discovery",
    description:
      "There is money out there. We find it, apply for it, and track it together.",
    note:
      "Weaver Consulting has access to custom AI systems built for data amalgamation — surfacing hyperlocal scholarships, networking events, clubs, internships, entrepreneurship opportunities, and more that most students never find.",
  },
  {
    Icon: RefreshIcon,
    title: "Ongoing Accountability Coaching",
    description:
      "Regular check-ins to keep you moving. Every client gets a personalized roadmap in Google Sheets — goals, deadlines, and action steps in one place.",
  },
];

export default function Services() {
  return (
    <div className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-body font-semibold tracking-widest text-brand-teal uppercase mb-3">
            What We Offer
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-navy">
            Services
          </h2>
          <div className="mt-5 mx-auto w-16 h-0.5 bg-brand-teal" />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ Icon, title, description, note }) => (
            <div
              key={title}
              className="group p-8 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-250 flex flex-col gap-5"
            >
              {/* Icon container */}
              <div className="w-12 h-12 rounded-lg bg-brand-sage flex items-center justify-center flex-shrink-0">
                <Icon size={26} />
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="font-display text-lg font-bold text-brand-navy leading-snug">
                  {title}
                </h3>
                <p className="font-body text-brand-secondary text-base leading-relaxed">
                  {description}
                </p>
                {note && (
                  <p className="font-body text-sm text-brand-teal leading-relaxed pt-3 border-t border-brand-teal/15">
                    {note}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
