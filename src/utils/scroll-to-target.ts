const easeInOutCubic = (t: number): number => {
  return t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2;
};

const scrollToTarget = (
  targetPosition: number,
  startPosition: number,
  duration: number,
) => {
  let startTime: number | null = null;

  const animation = (currentTime: number) => {
    startTime ??= currentTime;

    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = easeInOutCubic(progress);

    window.scrollTo(0, startPosition + (targetPosition - startPosition) * ease);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};

export const onScrollToTarget = (
  href: string,
  offset: number,
  duration: number,
  withAnimation = true,
) => {
  const hashIndex = href.lastIndexOf("#");
  const targetId = hashIndex >= 0 ? href.slice(hashIndex + 1) : href;
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    const targetPosition =
      targetElement.getBoundingClientRect().top + window.scrollY - offset;
    const startPosition = window.scrollY;

    if (withAnimation) {
      scrollToTarget(targetPosition, startPosition, duration);
      return;
    }
    window.scrollTo(0, startPosition + (targetPosition - startPosition));
  }
};
