import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { getSiteUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy — CASA DI BIZ | Luxury Packaging",
  description:
    "Privacy Policy explaining how CASA DI BIZ collects, uses, stores and protects personal and business information in accordance with UAE data protection standards.",
  alternates: {
    canonical: `${getSiteUrl()}/privacy-policy/`,
  },
  openGraph: {
    title: "Privacy Policy — CASA DI BIZ",
    description:
      "Learn how CASA DI BIZ handles and protects personal and business information collected through our website.",
    url: `${getSiteUrl()}/privacy-policy/`,
    siteName: "CASA DI BIZ",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-[#0F2744] font-sans">
      <SiteHeader />

      <main className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 py-10 sm:py-16">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 sm:gap-3 mb-10 sm:mb-12 border-b border-[#0F2744]/10 pb-5 sm:pb-6">
          <Link
            href="/terms-and-conditions"
            className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase transition-colors duration-200 bg-white text-[#0F2744]/75 hover:text-[#0F2744] border border-[#0F2744]/20 hover:border-[#0F2744]/50"
          >
            TERMS & CONDITIONS
          </Link>
          <Link
            href="/privacy-policy"
            className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase transition-colors duration-200 bg-[#0F2744] text-white"
          >
            PRIVACY POLICY
          </Link>
        </div>

        {/* Page Header */}
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#0F2744] mb-3">
          PRIVACY POLICY
        </h1>
        <p className="text-sm font-medium text-[#0F2744]/60 mb-8 sm:mb-12">
          Last Updated: 1 November 2026
        </p>

        {/* Legal Content */}
        <div className="space-y-6 text-sm sm:text-base leading-relaxed text-[#0F2744]/85">
          <p>
            At CASA DI BIZ, we respect your privacy and are committed to protecting
            the personal information entrusted to us.
          </p>
          <p>
            This Privacy Policy explains how we collect, use, process, store and
            protect information when you visit our website, submit an enquiry or
            communicate with our business.
          </p>
          <p>
            This policy applies to visitors, prospective customers, business
            representatives and other individuals who interact with CASA DI BIZ
            through our website.
          </p>

          <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#0F2744] pt-6">
            1. About CASA DI BIZ
          </h2>
          <p>
            CASA DI BIZ is a UAE-registered business specialising in bespoke luxury
            packaging and customised packaging solutions for businesses and brands.
          </p>
          <p>
            For the purposes of this Privacy Policy, &ldquo;CASA DI BIZ&rdquo;,
            &ldquo;we&rdquo;, &ldquo;us&rdquo; and &ldquo;our&rdquo; refer to the
            business operating under the CASA DI BIZ name.
          </p>
          <p>
            We handle personal information in accordance with applicable data
            protection requirements, including the UAE Personal Data Protection Law
            where applicable.
          </p>

          <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#0F2744] pt-6">
            2. Information We Collect
          </h2>
          <p>
            We may collect information that you voluntarily provide when
            contacting us, submitting an enquiry or requesting information about our
            products and services.
          </p>
          <p>This information may include:</p>

          <h3 className="text-base font-semibold text-[#0F2744] pt-2">
            Personal and Business Information
          </h3>
          <ul className="list-disc pl-5 sm:pl-6 space-y-2">
            <li>Full name.</li>
            <li>Company or business name.</li>
            <li>Business email address.</li>
            <li>Contact telephone number.</li>
            <li>Country, city or business location.</li>
            <li>Job title or professional role, where provided.</li>
          </ul>

          <h3 className="text-base font-semibold text-[#0F2744] pt-2">
            Enquiry and Project Information
          </h3>
          <ul className="list-disc pl-5 sm:pl-6 space-y-2">
            <li>Product interests and packaging requirements.</li>
            <li>Customisation preferences.</li>
            <li>Requested quantities and specifications.</li>
            <li>Messages, questions and correspondence.</li>
            <li>Logos, artwork, reference photographs and files voluntarily submitted.</li>
          </ul>

          <h3 className="text-base font-semibold text-[#0F2744] pt-2">
            Technical Information
          </h3>
          <p>
            When you visit our website, certain technical information may also be
            collected, depending on the technologies and services being used.
          </p>
          <p>This may include:</p>
          <ul className="list-disc pl-5 sm:pl-6 space-y-2">
            <li>Internet Protocol (IP) address.</li>
            <li>Browser type and version.</li>
            <li>Device type and operating system.</li>
            <li>Pages visited and navigation activity.</li>
            <li>Referring website or source.</li>
            <li>General website interaction and performance information.</li>
          </ul>

          <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#0F2744] pt-6">
            3. How We Collect Information
          </h2>
          <p>We may collect information through:</p>
          <ul className="list-disc pl-5 sm:pl-6 space-y-2">
            <li>Contact and enquiry forms on our website.</li>
            <li>Email correspondence.</li>
            <li>Telephone or WhatsApp communications.</li>
            <li>Business meetings and customer interactions.</li>
            <li>Website analytics and technical technologies.</li>
            <li>
              Other communication channels through which you voluntarily contact us.
            </li>
          </ul>
          <p>
            We only seek information that is reasonably relevant to our business
            activities and the purposes described in this policy.
          </p>

          <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#0F2744] pt-6">
            4. How We Use Your Information
          </h2>
          <p>
            We may use collected information for legitimate business and operational
            purposes, including:
          </p>
          <ul className="list-disc pl-5 sm:pl-6 space-y-2">
            <li>Responding to product enquiries and quotation requests.</li>
            <li>Understanding your packaging requirements.</li>
            <li>Preparing quotations and proposals.</li>
            <li>Communicating about customisation, samples and orders.</li>
            <li>Managing customer and business relationships.</li>
            <li>Coordinating production and delivery arrangements.</li>
            <li>Improving website content, functionality and user experience.</li>
            <li>Monitoring website performance and visitor activity.</li>
            <li>Maintaining business and transaction records.</li>
            <li>
              Protecting our website and business against fraud, misuse and
              security threats.
            </li>
            <li>Meeting applicable legal and regulatory obligations.</li>
          </ul>
          <p>
            Where required, we will obtain consent or rely on another lawful basis
            permitted by applicable data protection law.
          </p>

          <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#0F2744] pt-6">
            5. Website Analytics
          </h2>
          <p>
            CASA DI BIZ uses Vercel Web Analytics to understand website traffic and
            monitor website performance.
          </p>
          <p>
            Analytics technologies may process information relating to website
            visits, browser types, device categories, page views and general
            visitor interactions.
          </p>
          <p>We use this information to:</p>
          <ul className="list-disc pl-5 sm:pl-6 space-y-2">
            <li>Understand how visitors use our website.</li>
            <li>Identify frequently visited pages.</li>
            <li>Evaluate website performance.</li>
            <li>Identify technical issues.</li>
            <li>Improve the website experience.</li>
          </ul>
          <p>
            The information available to us depends on the analytics
            configuration and the service provider&apos;s processing practices.
          </p>
          <p>
            For more information about Vercel&apos;s services and data practices,
            please refer to Vercel&apos;s official privacy information.
          </p>
          <p>
            We do not intentionally use website analytics to identify individual
            visitors personally.
          </p>

          <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#0F2744] pt-6">
            6. Cookies and Similar Technologies
          </h2>
          <p>
            Our website may use cookies or similar technologies to support website
            functionality, security, performance measurement and other permitted
            purposes.
          </p>
          <p>
            The specific technologies used may depend on the website
            configuration and third-party services integrated into the website.
          </p>
          <p>
            You can manage or restrict cookies through your browser settings.
            Disabling certain cookies may affect the functionality of some
            website features.
          </p>
          <p>
            Where applicable law requires consent before particular cookies or
            tracking technologies are used, we will seek the required consent.
          </p>

          <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#0F2744] pt-6">
            7. Sharing of Information
          </h2>
          <p>
            CASA DI BIZ does not sell or rent personal information to third
            parties.
          </p>
          <p>
            We may share information with trusted third parties where reasonably
            necessary to operate our business and provide our services.
          </p>
          <p>These may include:</p>
          <ul className="list-disc pl-5 sm:pl-6 space-y-2">
            <li>Website hosting and infrastructure providers.</li>
            <li>Website analytics providers.</li>
            <li>Email and communication service providers.</li>
            <li>Technical support and website maintenance providers.</li>
            <li>Professional advisers, auditors and legal representatives.</li>
            <li>
              Government authorities and regulatory bodies where required by law.
            </li>
          </ul>
          <p>
            Where third parties process information on our behalf, we take
            reasonable steps to ensure that appropriate privacy and security
            arrangements are maintained.
          </p>

          <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#0F2744] pt-6">
            8. International Data Transfers
          </h2>
          <p>
            CASA DI BIZ operates in the United Arab Emirates and may use service
            providers that process or store information in other countries.
          </p>
          <p>
            Where personal information is transferred outside the UAE, we will take
            appropriate steps to ensure that such transfers comply with applicable
            data protection requirements and that required safeguards are in place.
          </p>

          <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#0F2744] pt-6">
            9. Data Security
          </h2>
          <p>
            We take reasonable technical and organisational measures to protect
            personal information against:
          </p>
          <ul className="list-disc pl-5 sm:pl-6 space-y-2">
            <li>Unauthorised access.</li>
            <li>Accidental loss or destruction.</li>
            <li>Unauthorised disclosure.</li>
            <li>Alteration or misuse.</li>
            <li>Other security threats.</li>
          </ul>
          <p>
            Access to personal information is limited to individuals and service
            providers who reasonably require it for legitimate business purposes.
          </p>
          <p>
            Although we take reasonable precautions, no internet transmission or
            electronic storage system can be guaranteed to be completely secure.
          </p>

          <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#0F2744] pt-6">
            10. Data Retention
          </h2>
          <p>
            We retain personal information only for as long as reasonably
            necessary to fulfil the purposes described in this Privacy Policy.
          </p>
          <p>Retention periods may depend on:</p>
          <ul className="list-disc pl-5 sm:pl-6 space-y-2">
            <li>The nature of the enquiry or business relationship.</li>
            <li>Whether an order or commercial transaction takes place.</li>
            <li>Applicable accounting and recordkeeping obligations.</li>
            <li>Legal and regulatory requirements.</li>
            <li>
              The need to resolve disputes or protect legitimate business
              interests.
            </li>
          </ul>
          <p>
            When personal information is no longer required, we will take
            reasonable steps to securely delete, anonymise or otherwise dispose of
            it, subject to applicable legal requirements.
          </p>

          <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#0F2744] pt-6">
            11. Your Privacy Rights
          </h2>
          <p>
            Subject to applicable UAE data protection law, you may have certain
            rights regarding your personal information.
          </p>
          <p>These may include:</p>
          <ul className="list-disc pl-5 sm:pl-6 space-y-2">
            <li>The right to request access to personal information held about you.</li>
            <li>
              The right to request correction of inaccurate or incomplete
              information.
            </li>
            <li>
              The right to request deletion of personal information where legally
              permitted.
            </li>
            <li>
              The right to request restriction or cessation of certain processing
              activities.
            </li>
            <li>
              The right to withdraw consent where processing is based on consent.
            </li>
            <li>
              The right to raise concerns or submit a complaint regarding the
              handling of your personal information.
            </li>
          </ul>
          <p>
            Requests can be submitted using the contact details provided in this
            policy.
          </p>
          <p>
            We may need to verify your identity before processing certain
            requests. Some requests may be subject to legal exceptions or
            limitations.
          </p>

          <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#0F2744] pt-6">
            12. Third-Party Websites and Services
          </h2>
          <p>
            Our website may contain links to external websites, platforms or
            services.
          </p>
          <p>
            These third-party websites operate independently and may have their
            own privacy policies and data handling practices.
          </p>
          <p>
            CASA DI BIZ is not responsible for the privacy, security or content of
            external websites.
          </p>
          <p>
            We encourage visitors to review the relevant privacy policies before
            providing personal information to third-party services.
          </p>

          <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#0F2744] pt-6">
            13. Children&apos;s Privacy
          </h2>
          <p>
            Our website and services are primarily intended for businesses,
            professional customers and organisations.
          </p>
          <p>
            We do not knowingly seek to collect personal information from children
            through our website.
          </p>
          <p>
            If you believe that a child has provided personal information to us,
            please contact us so that we can review the matter and take appropriate
            action.
          </p>

          <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#0F2744] pt-6">
            14. Changes to This Privacy Policy
          </h2>
          <p>
            CASA DI BIZ may update this Privacy Policy from time to time to reflect
            changes in our business operations, website technologies, service
            providers or applicable legal requirements.
          </p>
          <p>
            Any updated version will be published on this page with a revised
            last-updated date.
          </p>
          <p>
            We encourage visitors to review this page periodically to remain
            informed about how their information is handled.
          </p>

          <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#0F2744] pt-6">
            15. Contact Us
          </h2>
          <p>
            If you have questions about this Privacy Policy, wish to exercise your
            privacy rights or have concerns about how your information is
            processed, please contact us.
          </p>
          <div className="pt-2 space-y-1">
            <p className="font-semibold text-[#0F2744]">CASA DI BIZ</p>
            <p>Privacy Contact Email: [Insert official business email]</p>
            <p>Registered Legal Entity: [Insert full registered company name]</p>
            <p>Registered Address: [Insert UAE registered business address]</p>
            <p>Trade Licence Number: [Insert licence number, if applicable]</p>
            <p>Country: United Arab Emirates</p>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

