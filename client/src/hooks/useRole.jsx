import useAuth from "./useAuth";
import { getRole } from "../api/auth";
import { useQuery } from "@tanstack/react-query";

const useRole = () => {
  const { user, loading } = useAuth();
  // const [role, setRole] = useState(null);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   getRole(user?.email).then((data) => {
  //     setRole(data.role);
  //     setLoading(false);
  //   });
  // }, [user]);

  const { data: role = "", isLoading } = useQuery({
    enabled: !loading && !!user?.email,
    queryKey: ["role"],
    queryFn: async () => {
      const data = await getRole(user?.email);
      return data.role;
    },
  });

  console.log(role);
  return { role, isLoading };
};

export default useRole;
