<template>
  <div
    class="dark:bg-mkPrimary text-mkPrimary dark:text-mkWhite selection:bg-mkPurple selection:text-mkWhite flex flex-col items-center"
    :class="{ 'bgnew': isDarkMode }"
  >
    <LayoutHeader></LayoutHeader>
    <div class="text-white bg-transparent">
      <h2>Privacy Policy for WERK Token WEBSITE</h2>
      <p>Effective Date: 01/10/2024</p>
      <h4>Introduction:</h4>
      <p>
        This Privacy Policy delineates our approach to managing your information
        in relation to the WERK Token ecosystem, emphasizing our commitment to
        privacy in the rapidly evolving Web3 landscape.
      </p>

      <h3>1. Information Collection and Utilization:</h3>
      <ul>
        <li>
          Personal Data: Essential for individualized service, we may collect
          personal information such as names, email addresses, and contact
          details.
        </li>
        <li>
          Blockchain Data: Central to our operations, we handle public
          blockchain data, including transaction histories and wallet addresses.
          This data is public by nature and integral to our services.
        </li>

        <li>
          Usage Data: We may track interaction with the WERK Token platform to
          enhance service quality and user experience.
        </li>
      </ul>

      <h3>2. Application of Data:</h3>
      <ul>
        <li>
          Service Delivery and Improvement: Utilization of data is critical for effective service provision and enhancement.
        </li>
        <li>
          Communication and Support: Personal Data facilitates user support, updates, and information dissemination related to WERK Token website.

        </li>
        <li>
          Compliance and Security: Ensuring the integrity of our services and adherence to legal standards.

        </li>
      </ul>

      <h3>3. Data Disclosure and Sharing: </h3>
      <ul>
        <li>
          Third-party Services: Collaboration with third parties for transaction processing, analytics, and security.

        </li>

        <li>
          Legal Compliance: Disclosure of Personal Data may occur as mandated by law.

        </li>

        <li>
          Consent-Based Sharing: Apart from necessary service provision, your data is not shared without explicit consent.

        </li>
      </ul>

      <h3>4. Data Protection Measures: </h3>
      <p>
        Implementing robust security protocols to protect personal and transaction data against unauthorized access and breaches.

      </p>

      <h3>5. User Rights </h3>

      <p>
        You retain the right to access, correct, or request the deletion of your personal data in our custody.

      </p>

      <h3>6. Policy Amendments </h3>

      <p>
        Periodic updates to this Privacy Policy will be communicated through our platforms.

      </p>

      <h3>7. Inquiries and Feedback</h3>

      <p>
        For any queries or concerns about this Privacy Policy, reach out to us at [Your Contact Information].

      </p>
    </div>
    <LayoutFooter />
  </div>
</template>

<script>
import { inject } from "vue";
import LayoutHeader from "../components/LayoutHeader.vue";
import LayoutFooter from "@/components/LayoutFooter.vue";
export default {
  components: {
    LayoutHeader,
    LayoutFooter,
  },
  setup() {
    const isDarkMode = inject("isDarkMode");

    return { isDarkMode };
  },
};
</script>

<style>
.bgnew {
  /* background: url("../assets/mkover.webp"); */
  background: linear-gradient(
    to right,
    #0b2142,
    #0d2e55,
    #103b68,
    #12487b,
    #14558e
  );
  /* background: linear-gradient(to right, #080a10, #241b28); */

  /* background: linear-gradient(to right, #080a10, #241b28, #241a28, #090b11); */
  /* background: linear-gradient(to right, #1a182c, #241a28); */

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* background-attachment: fixed; */

  /* background-image: linear-gradient(180deg, #080a10 0%, #080a1000 100%); */
  /* transition: background 0.3s, border-radius 0.3s, opacity 0.3s; */
}
</style>
