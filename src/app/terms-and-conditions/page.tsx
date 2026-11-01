import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { getSiteUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms & Conditions — CASA DI BIZ | Luxury Packaging",
  description:
    "Terms and Conditions governing the use of the CASA DI BIZ website, business enquiries, product specifications, customisation, and packaging orders.",
  alternates: {
    canonical: `${getSiteUrl()}/terms-and-conditions/`,
  },
  openGraph: {
    title: "Terms & Conditions — CASA DI BIZ",
    description:
      "Terms and Conditions governing the use of the CASA DI BIZ website and packaging enquiry services.",
    url: `${getSiteUrl()}/terms-and-conditions/`,
    siteName: "CASA DI BIZ",
    type: "website",
  },
};

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-white text-[#0F2744] font-sans">
      <SiteHeader />

      <main className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 py-10 sm:py-16">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 sm:gap-3 mb-10 sm:mb-12 border-b border-[#0F2744]/10 pb-5 sm:pb-6">
          <Link
            href="/terms-and-conditions"
            className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase transition-colors duration-200 bg-[#0F2744] text-white"
          >
            TERMS & CONDITIONS
          </Link>
          <Link
            href="/privacy-policy"
            className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase transition-colors duration-200 bg-white text-[#0F2744]/75 hover:text-[#0F2744] border border-[#0F2744]/20 hover:border-[#0F2744]/50"
          >
            PRIVACY POLICY
          </Link>
        </div>

        {/* Page Header */}
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#0F2744] mb-3">
          TERMS & CONDITIONS
        </h1>
        <p className="text-sm font-medium text-[#0F2744]/60 mb-8 sm:mb-12">
          Last Updated: 1 November 2026
        </p>

        {/* Legal Content */}
        <div className="space-y-6 text-sm sm:text-base leading-relaxed text-[#0F2744]/85">
          <p>
            Welcome to CASA DI BIZ. These Terms & Conditions govern your access to
            and use of the CASA DI BIZ website, including its content, product
            information and business enquiry services.
          </p>
          <p>
            By accessing or using this website, you acknowledge that you have read
            and understood these Terms & Conditions. If you do not agree with
            them, please discontinue using the website.
          </p>

          <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#0F2744] pt-6">
            1. About CASA DI BIZ
          </h2>
          <p>
            CASA DI BIZ is a UAE-registered business specialising in bespoke luxury
            packaging, premium boxes, paper bags, gift packaging and customised
            packaging solutions.
          </p>
          <p>
            Throughout these Terms & Conditions, the expressions &ldquo;CASA DI
            BIZ&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo; and &ldquo;us&rdquo;
            refer to the business operating under the CASA DI BIZ name.
          </p>
          <p>
            Our website is intended to introduce our products, collections,
            materials and customisation capabilities and to facilitate business
            enquiries from prospective customers.
          </p>

          <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#0F2744] pt-6">
            2. Website Usage
          </h2>
          <p>
            You may access and use this website for lawful purposes, including
            browsing our products, reviewing our collections and submitting
            business enquiries.
          </p>
          <p>You agree not to:</p>
          <ul className="list-disc pl-5 sm:pl-6 space-y-2">
            <li>
              Use this website for any unlawful, fraudulent or misleading purpose.
            </li>
            <li>
              Attempt to gain unauthorised access to the website, its servers or
              related systems.
            </li>
            <li>
              Upload or transmit viruses, malicious code or harmful software.
            </li>
            <li>
              Copy, reproduce or commercially exploit website content without
              written permission.
            </li>
            <li>
              Interfere with the website&apos;s security, functionality or normal
              operation.
            </li>
            <li>
              Submit false, misleading or unauthorised information through our
              enquiry channels.
            </li>
          </ul>
          <p>
            We reserve the right to restrict access to the website where misuse or
            a violation of these Terms is identified.
          </p>

          <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#0F2744] pt-6">
            3. Products and Product Information
          </h2>
          <p>
            CASA DI BIZ makes reasonable efforts to ensure that the product
            descriptions, photographs, specifications and other information
            displayed on the website are accurate and up to date.
          </p>
          <p>However, visitors should be aware that:</p>
          <ul className="list-disc pl-5 sm:pl-6 space-y-2">
            <li>
              Product photographs are representative and may differ slightly from
              the final manufactured product.
            </li>
            <li>
              Colours and finishes may appear differently depending on screen
              settings and display devices.
            </li>
            <li>
              Natural and manufactured materials may have variations in texture,
              appearance and finish.
            </li>
            <li>
              Dimensions, material specifications and customisation options are
              subject to confirmation.
            </li>
            <li>
              Product availability and specifications may change without prior
              notice.
            </li>
          </ul>
          <p>
            Final product specifications will be determined by the approved
            quotation, sample, artwork or written order confirmation.
          </p>

          <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#0F2744] pt-6">
            4. Customisation and Bespoke Packaging
          </h2>
          <p>
            CASA DI BIZ specialises in customised packaging solutions designed
            around individual business requirements.
          </p>
          <p>Customisation may include:</p>
          <ul className="list-disc pl-5 sm:pl-6 space-y-2">
            <li>Product dimensions and structural design.</li>
            <li>Materials, textures and finishes.</li>
            <li>Colours and surface treatments.</li>
            <li>Printing, embossing, debossing and branding.</li>
            <li>Logos, artwork and other visual elements.</li>
            <li>Packaging quantities and configurations.</li>
          </ul>
          <p>
            Customers are responsible for reviewing and approving the final
            designs, artwork, specifications and samples before production begins.
          </p>
          <p>
            Any changes requested after approval may affect production schedules,
            pricing and delivery arrangements.
          </p>

          <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#0F2744] pt-6">
            5. Enquiries and Quotations
          </h2>
          <p>
            Submitting an enquiry through our website does not constitute a
            confirmed order or create an obligation for CASA DI BIZ to supply
            products.
          </p>
          <p>
            Quotations are prepared based on the information and specifications
            provided by the customer.
          </p>
          <p>Unless otherwise stated in the quotation:</p>
          <ul className="list-disc pl-5 sm:pl-6 space-y-2">
            <li>Prices are subject to confirmation.</li>
            <li>Minimum order quantities may apply.</li>
            <li>
              Customisation costs may vary according to the selected materials,
              finishes and production requirements.
            </li>
            <li>Quotations may have a specified validity period.</li>
            <li>Changes to specifications may require a revised quotation.</li>
          </ul>
          <p>
            A business order will be considered accepted only after the relevant
            commercial terms and order details have been confirmed in writing by
            CASA DI BIZ.
          </p>

          <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#0F2744] pt-6">
            6. Pricing and Payment
          </h2>
          <p>
            All prices, currencies, applicable taxes, payment schedules and other
            commercial terms will be communicated through the relevant quotation
            or order documentation.
          </p>
          <p>
            Payment terms will be agreed between CASA DI BIZ and the customer
            before production or fulfilment begins.
          </p>
          <p>
            Where applicable, production may commence only after receipt of the
            agreed advance payment, artwork approval or other required
            confirmation.
          </p>
          <p>
            Any applicable VAT, customs duties, import charges or other government
            levies will be handled in accordance with the applicable laws and the
            agreed transaction terms.
          </p>

          <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#0F2744] pt-6">
            7. Production and Order Processing
          </h2>
          <p>Production timelines depend on factors including:</p>
          <ul className="list-disc pl-5 sm:pl-6 space-y-2">
            <li>Order quantity and complexity.</li>
            <li>Material and component availability.</li>
            <li>Customisation and finishing requirements.</li>
            <li>Artwork and sample approval.</li>
            <li>Production capacity.</li>
            <li>Other operational or external circumstances.</li>
          </ul>
          <p>
            Any production timeline communicated to a customer is an estimate
            unless expressly confirmed otherwise in a written agreement.
          </p>
          <p>
            We will make reasonable efforts to communicate significant changes
            affecting an agreed production schedule.
          </p>

          <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#0F2744] pt-6">
            8. Delivery and Shipping
          </h2>
          <p>Delivery arrangements will be agreed separately for each order.</p>
          <p>
            Delivery terms may depend on the customer&apos;s location, order
            size, shipping method and destination requirements.
          </p>
          <p>
            Shipping costs, delivery timelines, customs duties, import charges and
            other applicable expenses will be communicated or agreed through the
            relevant quotation or order confirmation.
          </p>
          <p>
            Customers are responsible for providing accurate delivery information
            and any documentation reasonably required for successful delivery.
          </p>

          <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#0F2744] pt-6">
            9. Cancellations, Returns and Product Issues
          </h2>
          <p>
            Because many CASA DI BIZ products are manufactured or customised
            according to individual customer specifications, cancellation, return
            and replacement arrangements may differ from those applicable to
            standard off-the-shelf products.
          </p>
          <p>
            Any cancellation request must be submitted in writing and will be
            assessed according to the production stage and agreed order terms.
          </p>
          <p>
            Where a customer identifies a product defect, damage or material
            discrepancy, the customer should notify CASA DI BIZ promptly and
            provide reasonable supporting information, including photographs where
            appropriate.
          </p>
          <p>
            We will review reported issues and determine an appropriate resolution
            in accordance with the agreed order terms and applicable UAE law.
          </p>
          <p>
            Nothing in this section limits any mandatory rights or remedies
            available under applicable law.
          </p>

          <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#0F2744] pt-6">
            10. Intellectual Property
          </h2>
          <p>
            All website content, including text, images, photographs, logos,
            graphics, illustrations, product presentations, layouts and designs,
            is owned by CASA DI BIZ or used under appropriate permission, unless
            otherwise stated.
          </p>
          <p>
            You may not reproduce, distribute, modify, publish or commercially use
            any website content without prior written authorisation from the
            relevant rights holder.
          </p>
          <p>
            All third-party trademarks, logos and brand names remain the property
            of their respective owners.
          </p>
          <p>
            Customers who submit logos, artwork, images or other intellectual
            property for custom packaging confirm that they have the necessary
            rights and permissions to use and provide those materials for the
            requested purpose.
          </p>

          <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#0F2744] pt-6">
            11. Third-Party Websites
          </h2>
          <p>
            Our website may contain links to third-party websites, platforms or
            services.
          </p>
          <p>
            These links are provided for convenience and informational purposes.
            CASA DI BIZ does not control or accept responsibility for the content,
            security, availability or privacy practices of external websites.
          </p>
          <p>
            Accessing third-party websites is at your own discretion and subject
            to their respective terms and policies.
          </p>

          <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#0F2744] pt-6">
            12. Privacy and Data Protection
          </h2>
          <p>
            Your use of this website is also subject to our Privacy Policy.
          </p>
          <p>
            The Privacy Policy explains how CASA DI BIZ collects, uses, stores and
            protects personal information submitted through the website or
            collected through permitted website technologies.
          </p>
          <p>
            By using our website, you acknowledge that you have had the
            opportunity to review our Privacy Policy.
          </p>

          <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#0F2744] pt-6">
            13. Website Availability and Disclaimer
          </h2>
          <p>
            We aim to keep our website accessible and functioning properly.
            However, we do not guarantee uninterrupted availability or that the
            website will always be free from errors, technical issues or
            interruptions.
          </p>
          <p>
            Website information is provided for general informational and
            business enquiry purposes. It does not constitute a binding quotation,
            product guarantee or confirmed commercial offer unless expressly agreed
            in writing.
          </p>
          <p>
            Nothing in these Terms excludes any warranty, right or obligation that
            cannot legally be excluded under applicable law.
          </p>

          <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#0F2744] pt-6">
            14. Limitation of Liability
          </h2>
          <p>
            To the extent permitted by applicable law, CASA DI BIZ shall not be
            liable for indirect or consequential losses arising solely from the use
            of, or inability to access, this website.
          </p>
          <p>
            Any liability relating to a specific product order or commercial
            transaction will be governed by the applicable quotation, purchase
            order or separate written agreement, together with applicable law.
          </p>
          <p>
            Nothing in these Terms excludes or limits liability where such
            exclusion or limitation is prohibited by law.
          </p>

          <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#0F2744] pt-6">
            15. Changes to These Terms
          </h2>
          <p>
            CASA DI BIZ reserves the right to update these Terms & Conditions when
            necessary to reflect changes in our website, business operations or
            applicable legal requirements.
          </p>
          <p>
            Updated versions will be published on this page with a revised
            last-updated date.
          </p>
          <p>Visitors are encouraged to review this page periodically.</p>

          <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#0F2744] pt-6">
            16. Governing Law and Jurisdiction
          </h2>
          <p>
            These Terms & Conditions shall be governed by the applicable laws of
            the United Arab Emirates.
          </p>
          <p>
            Any disputes arising from the use of this website shall be subject to
            the jurisdiction of the competent courts of the relevant UAE
            jurisdiction, subject to applicable mandatory laws and any valid
            dispute resolution agreement.
          </p>

          <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#0F2744] pt-6">
            17. Contact Information
          </h2>
          <p>
            For questions or concerns regarding these Terms & Conditions, please
            contact:
          </p>
          <div className="pt-2 space-y-1">
            <p className="font-semibold text-[#0F2744]">CASA DI BIZ</p>
            <p>Email: [Insert official business email]</p>
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

