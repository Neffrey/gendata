// TRPC
import { api } from "utils/api";

// STATE STORES
import { usePropsStore } from "~/components/stores/propsStore";

const GetAllProps = () => {
  // STORE
  const { props, setProps } = usePropsStore();

  // tRPC
  const getAllProps = api.public.getAllProps.useQuery();
  console.log("getAllProps", getAllProps);
  // if (getAllProps.data && getAllProps.data ) setProps(getAllProps.data);
  return null;
};

export default GetAllProps;
