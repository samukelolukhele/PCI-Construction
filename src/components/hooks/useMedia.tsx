import { useMediaQuery } from "react-responsive";

const useMedia = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 810px)" });

  return { isMobile, isTablet };
};

export default useMedia;
