import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

type SlidingNavContextType = {
  toggleNav: boolean;
  onClick: () => void;
};
const SlidingNavContext = createContext<SlidingNavContextType | undefined>(
  undefined
);

export function useSlidingNav() {
  const context = useContext(SlidingNavContext);
  if (!context) {
    throw new Error("useSlidingNav must be used inside SlidingNavProvider");
  }
  return context;
}

type SlidingNavProviderProps = PropsWithChildren;
export default function SlidingNavProvider({
  children,
}: SlidingNavProviderProps) {
  const [toggleNav, setToggleNav] = useState(false);

  function onClick() {
    setToggleNav(!toggleNav);
  }
  useEffect(() => {
    if (toggleNav) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [toggleNav]);
  return (
    <SlidingNavContext.Provider value={{ toggleNav, onClick }}>
      {children}
    </SlidingNavContext.Provider>
  );
}
