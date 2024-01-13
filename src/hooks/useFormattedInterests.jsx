import { useMemo } from "react";

const useFormattedInterests = (interest) => {
  return useMemo(() => {
    const splitCamelCase = (str) => {
      return str.replace(/([a-z])([A-Z])/g, "$1 $2");
    };

    const splitInterest = splitCamelCase(interest);
    return splitInterest
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }, [interest]);
};

export default useFormattedInterests;
