const handleClickScroll = (section: string) => (event: any) => {
  const element = document.getElementById(section);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default handleClickScroll;
