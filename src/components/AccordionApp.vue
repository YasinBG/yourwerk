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
          class="pl-4 pr-8 answer text-lg font-medium text-mkGray pb-4 leading-relaxed flex items-center flex-col"
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
        question: "What is WERK 1000X and what is its purpose?",
        answer:
          "WERK 1000X is an innovative and comprehensive crypto project aiming to revolutionize the Web3 world. It seeks to facilitate transaction processes among Web3 games, DeFi projects, and other Web3 applications, supporting the ecosystem's integrated and harmonious development.",
        open: false,
      },
      {
        question:
          "What problems does WERK 1000X address in the Web3 ecosystem?",
        answer:
          "WERK 1000X addresses the issue of isolated and disjointed development among Web3 projects by providing a common transaction tool. This enhances collaboration and interaction between projects, making the ecosystem more integrated and efficient.",
        open: false,
      },
      {
        question:
          "What is WERK 1000X's deflationary tokenomics policy and how does it benefit investors?",
        answer:
          "WERK 1000X's deflationary tokenomics policy aims to gradually reduce the market supply of tokens, increasing their value over time. This offers investors a potential for long-term value appreciation.",
        open: false,
      },
      {
        question:
          "How does WERK 1000X integrate with advanced technologies like AI?",
        answer:
          "WERK 1000X addresses the unique challenges in AI-supported projects by offering high transaction capacity and speed, optimized for AI applications. This enhances the efficiency and effectiveness of AI-based Web3 projects.",
        open: false,
      },
      {
        question: "What advantages does WERK 1000X offer to users?",
        answer:
          "WERK 1000X is designed as a user-friendly, secure, and universal transaction tool, enabling users to transfer value safely and easily across Web3 projects.",
        open: false,
      },
      {
        question:
          "How does WERK 1000X benefit the Web3 gaming and application sector?",
        answer:
          "WERK 1000X simplifies transaction processes for Web3 gaming and application users, facilitating cross-platform interaction. This encourages broader adoption of the sector and offers cost savings for developers.",
        open: false,
      },
      {
        question:
          "What are WERK 1000X's blockchain infrastructure and technical features?",
        answer:
          "WERK 1000X utilizes the Binance Chain infrastructure, known for its high efficiency, reliability, low transaction costs, and advanced security protocols, ensuring a seamless and secure experience for its users.",
        open: false,
      },
      {
        question:
          "How does WERK 1000X aim to increase transaction volume and liquidity?",
        answer:
          "WERK 1000X plans to increase transaction volume and liquidity by collaborating with Web3 applications and games by allowing them to receive commissions and performing regular token burns.",
        open: false,
      },
      {
        question:
          "How does WERK 1000X manage community participation and engagement?",
        answer:
          "WERK 1000X actively engages with its community through interactive platforms and social media, incorporating their feedback into the project's development. It offers special advantages, rewards, and access to its users, further integrating them into the project.",
        open: false,
      },
      {
        question:
          "What are WERK 1000X's future plans and sustainability strategies?",
        answer:
          "WERK 1000X aims to cater to a wide range of use cases in the medium and long term, aiming to become a common payment tool in everyday life. It plans to implement innovations like AI integration, token-based loyalty programs, and smart contract-enabled automatic payments to achieve this goal.",
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
