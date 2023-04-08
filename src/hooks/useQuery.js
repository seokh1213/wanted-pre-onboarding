import { useRef, useState } from "react";

const useQuery = (query) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const requestRef = useRef(false);

  if (requestRef.current) return { isLoading, data };
  requestRef.current = true;

  query()
    .then((data) => setData(data))
    .finally(() => {
      setIsLoading(false);
    });

  return { isLoading, data };
};

export default useQuery;
