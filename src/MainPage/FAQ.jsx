import React from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "What is the purpose of the X Token?",
      answer:
        "The X Token is designed to power a global marketplace that enables secure and seamless transactions for goods, services, and ideas, leveraging cutting-edge AI technology for enhanced interactivity.",
    },
    {
      question: "How can I invest in the X Token?",
      answer:
        "To invest in X Token, sign up on our platform and participate in the presale phase using supported cryptocurrencies.",
    },
    {
      question: "Are there any restrictions on investing?",
      answer:
        "Currently, there are no restrictions during the presale phase. Anyone with a supported cryptocurrency wallet can participate.",
    },
    {
      question: "What payment methods are accepted?",
      answer:
        "We accept major cryptocurrencies, including Bitcoin (BTC), Ethereum (ETH), Dogecoin (DOGE), Tether (USDT), and USD Coin (USDC).",
    },
  ];

  return (
    <div className="bg-black text-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-3xl font-bold text-purple-500 mb-3">FAQ</h2>
        <p className="text-gray-400 mb-8">Common questions about X Token</p>
      </div>

      {/* FAQ Items */}
      <div className="max-w-4xl mx-auto space-y-6 px-4 sm:px-6 lg:px-8">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg bg-gradient-to-b from-gray-800 to-black border ${
              index === 0
                ? "border-blue-500 shadow-blue-500 shadow-lg"
                : "border-gray-700"
            }`}
          >
            <h3 className="text-lg font-semibold text-white mb-2">
              {faq.question}
            </h3>
            <p className="text-gray-300">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
