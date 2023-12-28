<template>
  <div class="faq-wrapper mb-10 pb-10 mx-auto max-w-5xl w-full">
    <div
      class="faq-field border-opacity-40 rounded-xl my-1.5 w-full group"
      v-for="(faq, index) in faqList"
      :key="index"
    >
      <div class="faq-open cursor-pointer w-full" @click="toggleFaq(index)">
        <h3
          class="flex items-center justify-between py-2 px-2 font-body group-hover:duration-200 text-lg"
          :class="faq.open ? '  border-none' : 'border-b border-b-gray-800'"
        >
          <span class="mr-4">
            {{ faq.question }}
          </span>
          <span
            :class="faq.open ? 'rotate-180' : ''"
            class="transition-transform duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                :class="faq.open ? ' fill-mkPurple' : 'fill-mkGray'"
                d="M11.0911 17.8819L0.679816 8.77207C0.177691 8.33271 0.177691 7.6204 0.679816 7.18109L1.89412 6.11857C2.39539 5.67996 3.2078 5.67912 3.71025 6.1167L12.0002 13.3364L20.2901 6.1167C20.7926 5.67912 21.605 5.67996 22.1062 6.11857L23.3205 7.18109C23.8227 7.62045 23.8227 8.33276 23.3205 8.77207L12.9094 17.8819C12.4072 18.3213 11.5932 18.3213 11.0911 17.8819Z"
                fill="currentColor"
              />
            </svg>
          </span>
        </h3>
        <div
          :class="faq.open ? ' answer-open' : ' answer'"
          class="pl-4 pr-8 answer text-sm font-medium text-mkGray pb-4 leading-relaxed flex items-center flex-col"
        >
          <span>
            {{ faq.answer }}
          </span>
          <div class="gradientLine"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const faqList = ref([
      {
        question: "What is blockchain?",
        answer:
          "Blockchain is a decentralized, distributed ledger technology that securely records and verifies transactions across a network of computers. It operates on a consensus mechanism, ensuring transparency and immutability of data.",
        open: false,
      },
      {
        question: "How does blockchain ensure security?",
        answer:
          "Blockchain employs cryptographic techniques to secure data integrity and uses a consensus algorithm to validate transactions. Once a block is added to the chain, it becomes extremely difficult to alter, ensuring a high level of security.",
        open: false,
      },
      {
        question: "What is a smart contract?",
        answer:
          "A smart contract is a self-executing contract with the terms of the agreement directly written into code. It automatically enforces and executes the terms when predefined conditions are met, eliminating the need for intermediaries in transactions",
        open: false,
      },
      {
        question: "Can blockchain be used beyond cryptocurrencies?",
        answer:
          "Yes, blockchain has diverse applications beyond cryptocurrencies. Industries such as supply chain, healthcare, finance, and more are exploring blockchain for its ability to enhance transparency, security, and efficiency in various processes.",
        open: false,
      },
      {
        question:
          "What is the difference between public and private blockchains?",
        answer:
          "Public blockchains are open to anyone and are decentralized, while private blockchains are restricted to a specific group of participants and are often used within organizations. Public blockchains are more transparent, while private blockchains offer greater control over access.",
        open: false,
      },
      {
        question: "How is consensus achieved in blockchain?",
        answer:
          "Consensus in blockchain refers to the process by which all nodes in a network agree on the validity of transactions. Common consensus mechanisms include Proof of Work (PoW), Proof of Stake (PoS), and Delegated Proof of Stake (DPoS).",
        open: false,
      },
      {
        question: "What challenges does blockchain technology face?",
        answer:
          "Blockchain faces challenges such as scalability, interoperability, and regulatory concerns. Scaling solutions, standardization efforts, and evolving regulations are ongoing efforts to address these challenges.",
        open: false,
      },
      {
        question: "Is blockchain technology environmentally friendly?",
        answer:
          "The environmental impact of blockchain, particularly in Proof of Work systems like Bitcoin, has raised concerns due to energy consumption. However, there are ongoing efforts to develop and adopt more energy-efficient consensus mechanisms, such as Proof of Stake, to mitigate environmental impact.",
        open: false,
      },
    ]);

    const toggleFaq = (index) => {
      faqList.value.forEach((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
      });
    };

    return { faqList, toggleFaq };
  },
};
</script>

<style>
.answer {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: opacity 0.2s, max-height 0.1s, padding 0.2s ease-in-out;
}

.answer-open {
  max-height: 500px;
  opacity: 1;
  /* padding-top: 6px; */
  /* padding-bottom: 6px; */
}

.faq-wrapper {
  /* background: url("../assets/246.jpg") no-repeat top center; */
}
</style>
