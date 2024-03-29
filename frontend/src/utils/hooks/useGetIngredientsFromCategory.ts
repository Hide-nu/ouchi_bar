import { useEffect, useState } from "react";
import { useGetApi } from "src/utils/hooks/useApi";

export const useGetIngredientsFromCategory = () => {
  const [nodeId, setNodeId] = useState(0)
  const { loading, error, response, getFn } = useGetApi(
    `/queries/search_concrete_ingredient_from_category?id=${nodeId}`
  );

  const getIngredientsFromCategory = (id: number) => {
    setNodeId(id);
  };
  
  useEffect(() => {
    if (nodeId !== 0) {
      getFn();
    }
  },[nodeId])

  return { loading, error, response, getIngredientsFromCategory };
};
