import { useQuery, useQueryClient } from "@tanstack/react-query";

export const QueryFetch = () => {
  const queryClient = useQueryClient();
  const query = useQuery({
    queryKey: [""],
    queryFn: () => {
      return "hello";
    },
  });
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};
