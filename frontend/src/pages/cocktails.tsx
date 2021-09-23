//mochikun用
import type { VFC } from "react";
import { CocktailCards } from "src/components/cocktailCard";
import { sampleCocktailsRes } from "src/utils/hooks/useGetCocktails";
import { useGetCocktails } from "src/utils/hooks/useGetCocktails";

const CocktailPage: VFC = () => {
  const { loading, error, response } = useGetCocktails();
  console.log("loading :", loading);
  console.log("error   :", error);
  console.log("response:", response);
  return (
    <div className="container">
      <CocktailCards cocktails={sampleCocktailsRes.cocktails} />
    </div>
  );
};

export default CocktailPage;
