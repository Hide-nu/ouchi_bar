//mochikun用
import type { VFC } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { CocktailCards } from "src/components/cocktailCard";
import { Context } from "src/utils/contexts/provider";
// import { sampleCocktailsRes } from "src/utils/hooks/useGetCocktails";
import { useGetCocktails } from "src/utils/hooks/useGetCocktails";

const CocktailPage: VFC = () => {
  const { uuid } = useContext(Context);
  const { loading, error, response, getCocktailsFn } = useGetCocktails();

  useEffect(() => {
    getCocktailsFn();
  }, [uuid]);

  return (
    <>
      {loading && <p>ローディング中です</p>}
      {error && <p>エラーが発生しました</p>}
      {response &&
        <div className="container">
          <CocktailCards cocktails={response.cocktails} />
        </div>
      }
    </>
  );
};

export default CocktailPage;
