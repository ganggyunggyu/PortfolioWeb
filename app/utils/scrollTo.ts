export const scrollTo = (windowObj: Window | undefined, scrollLocation: number) => {
  windowObj?.scrollTo({
    top: scrollLocation,
    behavior: 'smooth',
  });
};
