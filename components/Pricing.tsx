const tiers = [
  { income: "Up to $30,000",     rate: "$15", note: "Fully subsidized rate" },
  { income: "$30,001 – $75,000", rate: "$40", note: "" },
  { income: "$75,001 and above", rate: "$70", note: "Standard rate", standard: true },
];

function CheckmarkSVG() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      stroke="#1a6b4a"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="flex-shrink-0 mt-0.5"
    >
      <circle cx="9" cy="9" r="8" />
      <polyline points="5.5 9 8 11.5 12.5 7" />
    </svg>
  );
}

export default function Pricing() {
  return (
    <div className="bg-brand-sage py-24 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Header — centered */}
        <div className="text-center mb-14">
          <p className="text-sm font-body font-semibold tracking-widest text-brand-teal uppercase mb-3">
            Pricing
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-navy mb-5">
            Simple, Transparent Pricing
          </h2>
          <div className="mx-auto w-16 h-0.5 bg-brand-teal" />
        </div>

        {/* Standard rate callout */}
        <div className="text-center mb-10">
          <p className="font-display text-6xl md:text-7xl font-bold text-brand-navy leading-none">
            $70
          </p>
          <p className="font-body text-xl text-brand-secondary mt-2">standard rate per hour</p>
        </div>

        {/* Sliding scale table */}
        <div className="bg-white rounded-2xl border border-brand-teal/25 shadow-sm overflow-hidden mb-6">
          {/* Table header */}
          <div className="grid grid-cols-2 bg-brand-navy px-6 py-3">
            <p className="font-body text-xs font-semibold tracking-widest text-white/70 uppercase">
              Household Income
            </p>
            <p className="font-body text-xs font-semibold tracking-widest text-white/70 uppercase text-right">
              Rate / Hour
            </p>
          </div>

          {/* Rows */}
          {tiers.map((tier, i) => (
            <div
              key={tier.income}
              className={`grid grid-cols-2 items-center px-6 py-4 gap-4 ${
                i < tiers.length - 1 ? "border-b border-gray-100" : ""
              } ${tier.standard ? "bg-brand-sage/40" : ""}`}
            >
              <div>
                <p className={`font-body text-base ${tier.standard ? "font-semibold text-brand-navy" : "text-brand-navy"}`}>
                  {tier.income}
                </p>
                {tier.note ? (
                  <p className="font-body text-xs text-brand-teal mt-0.5">{tier.note}</p>
                ) : null}
              </div>
              <p className={`font-display text-right font-bold ${tier.standard ? "text-2xl text-brand-navy" : "text-xl text-brand-green"}`}>
                {tier.rate}
              </p>
            </div>
          ))}

          {/* Footer note inside table */}
          <div className="px-6 py-4 bg-brand-sage/30 border-t border-brand-teal/15">
            <p className="font-body text-xs text-brand-secondary leading-relaxed">
              Rates are based on total annual household income. Reach out and we will discuss pricing based on your situation.
            </p>
          </div>
        </div>

        {/* Callout boxes */}
        <div className="flex flex-col gap-4">
          {/* Free intro call */}
          <div className="flex items-start gap-3 bg-white rounded-xl border border-brand-teal/30 px-6 py-5 shadow-sm">
            <CheckmarkSVG />
            <div>
              <p className="font-body font-semibold text-brand-navy text-base">
                Free 30-minute intro call for all new clients
              </p>
              <p className="font-body text-brand-secondary text-sm mt-1 leading-relaxed">
                No commitment, no pressure. Get to know the process and ask every question you have.
              </p>
            </div>
          </div>

          {/* Packages (placeholder for future) */}
          <div className="flex items-start gap-3 bg-white rounded-xl border border-brand-teal/30 px-6 py-5 shadow-sm">
            <CheckmarkSVG />
            <div>
              <p className="font-body font-semibold text-brand-navy text-base">
                Session packages available
              </p>
              <p className="font-body text-brand-secondary text-sm mt-1 leading-relaxed">
                Prefer to bundle sessions? Ask about multi-session packages during your intro call.
                Sliding scale rates apply to packages as well.
              </p>
            </div>
          </div>
        </div>

        {/* No student turned away pledge */}
        <div className="mt-6 px-6 py-6 rounded-xl bg-brand-navy">
          <p className="font-body text-white text-base leading-relaxed">
            No student — regardless of where they are from — will be turned away due to inability to pay.
            Reach out and we will figure it out together.
          </p>
        </div>

        <div className="mt-10 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-10 py-4 rounded bg-brand-green text-white font-body font-semibold text-base hover:bg-brand-navy transition-colors duration-200 shadow-sm"
          >
            Book a Free Intro Call
          </a>
        </div>

      </div>
    </div>
  );
}
