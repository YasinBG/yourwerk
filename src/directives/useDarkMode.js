// useDarkMode.js
import { ref } from "vue";

export default function useDarkMode() {
  const isDarkMode = ref(true);

  // const toggleDarkMode = () => {
  //   isDarkMode.value = !isDarkMode.value;
  //   updateTheme();
  // };

  // const updateTheme = () => {
  //   if (isDarkMode.value) {
  //     document.documentElement.classList.add("dark");
  //     localStorage.setItem("theme", "dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //     localStorage.setItem("theme", "light");
  //   }
  // };

  // onMounted(() => {
  //   const savedTheme = localStorage.getItem("theme");
  //   isDarkMode.value =
  //     savedTheme === "dark" ||
  //     (!savedTheme &&
  //       window.matchMedia("(prefers-color-scheme: dark)").matches);
  //   updateTheme();
  // });

  // watch(isDarkMode, () => {
  //   updateTheme();
  // });

  return { isDarkMode };
}
