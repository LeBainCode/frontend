export default function Pricing() {
    return (
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Free Plan */}
          <div className="bg-gray-800 rounded-lg p-8">
            <h3 className="text-white text-xl font-medium mb-2">Free</h3>
            <p className="text-gray-400 text-sm mb-6">The basics for individuals and organizations</p>
            <div className="flex items-baseline mb-6">
              <span className="text-gray-400 text-lg">$</span>
              <span className="text-white text-4xl font-medium">0</span>
              <span className="text-gray-400 ml-2">per month</span>
            </div>
            <button className="w-full bg-gray-700 text-white py-2.5 rounded text-sm mb-8">
              Join for free
            </button>
            <div className="space-y-4 text-sm">
              <div className="flex gap-3">
                <span className="text-gray-400">✓</span>
                <span className="text-gray-400">Unlimited public/private repositories</span>
              </div>
              <div className="flex gap-3">
                <span className="text-gray-400">✓</span>
                <span className="text-gray-400">Automatic security and version options</span>
              </div>
            </div>
          </div>
  
          {/* Premium Plan */}
          <div className="relative bg-gray-800 rounded-lg p-8">
            <div className="absolute -top-3 left-0 right-0 flex justify-center">
              <div className="bg-[#84cc16] text-[11px] font-medium px-3 py-1 rounded-full uppercase tracking-wider">
                Most Popular
              </div>
            </div>
            <h3 className="text-white text-xl font-medium mb-2">Premium</h3>
            <p className="text-gray-400 text-sm mb-6">Enhanced features for individuals and organizations</p>
            <div className="flex items-baseline mb-6">
              <span className="text-gray-400 text-lg">$</span>
              <span className="text-white text-4xl font-medium">3.67</span>
              <span className="text-gray-400 ml-2">per month</span>
            </div>
            <button className="w-full bg-[#84cc16] text-white py-2.5 rounded text-sm mb-8">
              Continue with Team
            </button>
            <div className="space-y-4 text-sm">
              <div className="flex gap-3">
                <span className="text-gray-400">✓</span>
                <span className="text-gray-400">Everything included in Free, plus...</span>
              </div>
            </div>
          </div>
  
          {/* Enterprise Plan */}
          <div className="bg-gray-800 rounded-lg p-8">
            <h3 className="text-white text-xl font-medium mb-2">Enterprise</h3>
            <p className="text-gray-400 text-sm mb-6">Security and compliance for teams</p>
            <div className="flex items-baseline mb-6">
              <span className="text-gray-400 text-lg">$</span>
              <span className="text-white text-4xl font-medium">19.25</span>
              <span className="text-gray-400 ml-2">per month</span>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-8">
              <button className="bg-gray-700 text-white py-2.5 rounded text-sm">
                Start a free trial
              </button>
              <button className="bg-gray-700 text-white py-2.5 rounded text-sm">
                Contact Sales
              </button>
            </div>
            <div className="space-y-4 text-sm">
              <div className="flex gap-3">
                <span className="text-gray-400">✓</span>
                <span className="text-gray-400">Everything included in Team, plus...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }