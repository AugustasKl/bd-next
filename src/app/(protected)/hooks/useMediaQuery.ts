import { useEffect, useState } from "react";

export const useMediaQuery = (
  mediaQuery: string,
  initialValue?: boolean,
): boolean => {
  const [query, setQuery] = useState(initialValue ?? false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQuery);

    setQuery(mediaQueryList.matches);

    const handler = (event: MediaQueryListEvent) => {
      setQuery(event.matches);
    };

    mediaQueryList.addEventListener("change", handler);

    return () => mediaQueryList.removeEventListener("change", handler);
  }, [mediaQuery]);

  return query;
};

// 1. we create state
// 2. run useEffect after component mounts
// 3. inside useEffect we create mediaQueryList which tells initial mediaQuery width
// 4. we check if it matches minWidth and setQuery either false or true
// 5. then to mediaQueryList we add event listener where onChange we call handler callback, which checks the same thing (we check if it matches minWidth and setQuery either false or true)
// 6.  clean up runs:
// - When the component unmounts (removed from the DOM)
// - When mediaQuery prop changes (before the effect re-runs)
// So it's not tied to the change event — it's tied to the component/effect lifecycle. Without it, the listener would keep living in memory even after the component is gone — that's the memory leak.

// Because when you add a listener, the browser holds a reference to your handler function indefinitely — it keeps "listening" even after your component is gone.
// The cleanup says: "when this component unmounts, stop listening — you're no longer needed."

// Without it:

// 1. Component mounts → listener added
// 2. Component unmounts → listener still running in memory
// 3. Screen resizes → handler tries to call setQuery on a component that no longer exists → memory leak, potential errors
// removeEventListener needs the exact same "change" and handler arguments so the browser knows which listener to remove (you could have multiple listeners on the same mediaQueryList).

// The browser stores the pair ("change", handler) internally.
// That's also why removeEventListener must receive the exact same handler reference — if you passed a new anonymous function, the browser wouldn't find it and the listener would never be removed.
// That's why you store the handler in a variable first, instead of writing it inline.

//  handler is defined inside useEffect, not inside the component render.
// useEffect only re-runs when mediaQuery changes (your dependency array). So the same handler reference lives for the entire lifetime of that effect run.
// If you had defined handler outside useEffect, it would be recreated on every render and removeEventListener would fail to find it.
