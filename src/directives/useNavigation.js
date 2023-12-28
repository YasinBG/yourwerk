export function useNavigation() {
  const navigateTo = (id, duration = 1700) => {
    // duration parametresi kaydırma süresi
    const targetElement = document.getElementById(id);
    if (!targetElement) return;

    const targetPosition = targetElement.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    let startTime = null;

    const ease = function (t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, targetPosition, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
  };

  return { navigateTo };
}
