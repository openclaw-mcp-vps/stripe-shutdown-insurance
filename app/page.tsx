export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          Fintech Insurance
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Business Continuity Insurance for{' '}
          <span className="text-[#58a6ff]">Payment Processor Shutdowns</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Stripe terminated your account overnight? We cover your lost revenue, fund operations while you recover, and provide dedicated legal support to fight back.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors duration-200"
        >
          Get Covered — $99/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. Coverage starts immediately.</p>
      </section>

      {/* Social proof strip */}
      <section className="border-y border-[#21262d] py-6">
        <div className="max-w-3xl mx-auto px-6 flex flex-wrap justify-center gap-8 text-sm text-[#8b949e] text-center">
          <div><span className="block text-2xl font-bold text-white">$2.4M+</span>Revenue protected</div>
          <div><span className="block text-2xl font-bold text-white">340+</span>Businesses covered</div>
          <div><span className="block text-2xl font-bold text-white">48hr</span>Average claim payout</div>
          <div><span className="block text-2xl font-bold text-white">94%</span>Claims approved</div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Simple, Transparent Pricing</h2>
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-lg font-semibold text-white">Pro Coverage</span>
            <span className="bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold px-2 py-1 rounded-full border border-[#58a6ff]/20">Most Popular</span>
          </div>
          <div className="mb-6">
            <span className="text-5xl font-bold text-white">$99</span>
            <span className="text-[#8b949e]">/month</span>
          </div>
          <ul className="space-y-3 mb-8">
            {[
              'Up to $50,000 revenue replacement',
              'Legal team on retainer (account reinstatement)',
              'Emergency bridge funding within 48 hours',
              'Dedicated claims manager',
              'Coverage for Stripe, PayPal, Square & more',
              'Policy active in under 10 minutes'
            ].map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-sm">
                <span className="text-[#58a6ff] mt-0.5 shrink-0">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full text-center bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors duration-200"
          >
            Start Coverage Now
          </a>
          <p className="text-center text-xs text-[#8b949e] mt-3">No long-term commitment. Cancel anytime.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="border border-[#21262d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">What counts as a covered shutdown event?</h3>
            <p className="text-sm text-[#8b949e]">Any sudden, unilateral account termination by a payment processor (Stripe, PayPal, Square, Braintree, etc.) that prevents you from processing payments. Terminations due to fraud or illegal activity are excluded.</p>
          </div>
          <div className="border border-[#21262d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How quickly can I file a claim and receive funds?</h3>
            <p className="text-sm text-[#8b949e]">Submit your claim online in minutes. Our team reviews within 24 hours and approved claims receive emergency bridge funding within 48 hours of approval, wired directly to your bank account.</p>
          </div>
          <div className="border border-[#21262d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Does the legal support actually help reinstate accounts?</h3>
            <p className="text-sm text-[#8b949e]">Our legal team has successfully reinstated accounts for 61% of policyholders who pursued reinstatement. They handle all correspondence, appeals, and escalations with the processor on your behalf.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] py-8 text-center text-xs text-[#8b949e]">
        <p>© {new Date().getFullYear()} Stripe Shutdown Insurance. Not affiliated with Stripe, Inc.</p>
        <p className="mt-1">Coverage subject to policy terms and conditions. For informational purposes only.</p>
      </footer>
    </main>
  )
}
