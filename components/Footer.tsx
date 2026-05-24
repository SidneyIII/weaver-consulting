import Logo from "@/components/Logo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 px-6 py-14">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-display text-xl font-bold text-brand-navy tracking-tight">
                Weaver Consulting
              </span>
              <Logo size={32} />
            </div>
            <p className="font-body text-brand-secondary text-sm leading-relaxed">
              Serving students and families nationwide
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-body font-semibold text-brand-navy text-sm uppercase tracking-widest mb-4">
              Contact
            </h3>
            <div className="space-y-2">
              <a
                href="tel:7125244029"
                className="block font-body text-brand-secondary text-sm hover:text-brand-navy transition-colors duration-200"
              >
                712-524-4029
              </a>
              <a
                href="mailto:sidney78910@gmail.com"
                className="block font-body text-brand-secondary text-sm hover:text-brand-navy transition-colors duration-200 break-all"
              >
                sidney78910@gmail.com
              </a>
            </div>
          </div>

          {/* Accessibility note */}
          <div>
            <h3 className="font-body font-semibold text-brand-navy text-sm uppercase tracking-widest mb-4">
              Commitment
            </h3>
            <p className="font-body text-brand-secondary text-sm leading-relaxed">
              Sliding scale pricing available. No student turned away due to inability to pay — anywhere.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-body text-brand-secondary text-sm">
            &copy; {year} Weaver Consulting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
