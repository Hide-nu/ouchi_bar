import { useEffect } from "react";
import { useContext } from "react";
import { Context } from "src/utils/contexts/provider";
import { useGetApi } from "src/utils/hooks/useApi";


const concrete_ingredients = [
  {
    "concrete_ingredients": [
      {
        "id": 670,
        "base_ingredient_id": 1,
        "name": "サントリー ウイスキー",
        "tag": "<a href=\"https://www.amazon.co.jp/%E8%A7%92%E7%93%B6-14999-%E3%82%B5%E3%83%B3%E3%83%88%E3%83%AA%E3%83%BC-%E3%82%A6%E3%82%A4%E3%82%B9%E3%82%AD%E3%83%BC-700ml/dp/B01CXSRJHI/ref=as_li_ss_il?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=%E3%82%A6%E3%82%A4%E3%82%B9%E3%82%AD%E3%83%BC&qid=1593349775&s=food-beverage&sr=1-11&linkCode=li2&tag=c6tower-22&linkId=54b1c73ec0d658b95c5e537d3ea3c1bc&language=ja_JP\" target=\"_blank\"><img border=\"0\" src=\"https://ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01CXSRJHI&Format=_SL160_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=c6tower-22&language=ja_JP\" ></a><img src=\"https://ir-jp.amazon-adsystem.com/e/ir?t=c6tower-22&language=ja_JP&l=li2&o=9&a=B01CXSRJHI\" width=\"1\" height=\"1\" border=\"0\" alt=\"\" style=\"border:none !important; margin:0px !important;\" />",
        "created_at": "2021-08-28T14:17:25.180Z",
        "updated_at": "2021-08-29T11:50:10.230Z",
        "img_src": "https://ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01CXSRJHI&Format=_SL160_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=c6tower-22&language=ja_JP"
      },
      {
        "id": 671,
        "base_ingredient_id": 1,
        "name": "バーボンウイスキー ジムビーム",
        "tag": "略",
        "created_at": "2021-08-28T14:17:25.180Z",
        "updated_at": "2021-08-29T11:50:10.257Z",
        "img_src": "略"
      },
      {
        "id": 76,
        "base_ingredient_id": 2,
        "name": "サントリー ビーフィーター ジン",
        "tag": "略",
        "created_at": "2021-08-28T14:17:25.180Z",
        "updated_at": "2021-08-29T11:49:55.135Z",
        "img_src": "略"
      },
      {
        "id": 587,
        "base_ingredient_id": 3,
        "name": "ギルビーウォッカ",
        "tag": "略",
        "created_at": "2021-08-28T14:17:25.180Z",
        "updated_at": "2021-08-29T11:50:08.259Z",
        "img_src": "略"
      },
      {
        "id": 419,
        "base_ingredient_id": 4,
        "name": "スプライト",
        "tag": "略",
        "created_at": "2021-08-28T14:17:25.180Z",
        "updated_at": "2021-08-29T11:50:04.463Z",
        "img_src": "略"
      },
      {
        "id": 262,
        "base_ingredient_id": 5,
        "name": "ロンリコ 151",
        "tag": "略",
        "created_at": "2021-08-28T14:17:25.180Z",
        "updated_at": "2021-08-29T11:50:00.714Z",
        "img_src": "略"
      },
      {
        "id": 256,
        "base_ingredient_id": 6,
        "name": "バカルディ スペリオール",
        "tag": "略",
        "created_at": "2021-08-28T14:17:25.180Z",
        "updated_at": "2021-08-29T11:50:00.573Z",
        "img_src": "略"
      },
      {
        "id": 189,
        "base_ingredient_id": 7,
        "name": "ボルス ドライオレンジ",
        "tag": "略",
        "created_at": "2021-08-28T14:17:25.180Z",
        "updated_at": "2021-08-29T11:49:58.434Z",
        "img_src": "略"
      },
      {
        "id": 179,
        "base_ingredient_id": 8,
        "name": "デカイパー オリジナル ピーチツリー",
        "tag": "略",
        "created_at": "2021-08-28T14:17:25.180Z",
        "updated_at": "2021-08-29T11:49:58.364Z",
        "img_src": "略"
      },
      {
        "id": 494,
        "base_ingredient_id": 9,
        "name": "なっちゃん",
        "tag": "略",
        "created_at": "2021-08-28T14:17:25.180Z",
        "updated_at": "2021-08-29T11:50:06.162Z",
        "img_src": "略"
      },
      {
        "id": 495,
        "base_ingredient_id": 9,
        "name": "Doleオレンジ100%",
        "tag": "略",
        "created_at": "2021-08-28T14:17:25.180Z",
        "updated_at": "2021-08-29T11:50:06.186Z",
        "img_src": "略"
      },
      {
        "id": 496,
        "base_ingredient_id": 9,
        "name": "トロピカーナ 100% オレンジ",
        "tag": "略",
        "created_at": "2021-08-28T14:17:25.180Z",
        "updated_at": "2021-08-29T11:50:06.215Z",
        "img_src": "略"
      },
      {
        "id": 461,
        "base_ingredient_id": 10,
        "name": "Doleパイナップル100%",
        "tag": "略",
        "created_at": "2021-08-28T14:17:25.180Z",
        "updated_at": "2021-08-29T11:50:05.408Z",
        "img_src": "略"
      }
    ]
  }
]
for (let i=0; i<13; i++) {
  console.log(i);
  console.log(concrete_ingredients[i]);
}

export const useGetIngredients = () => {
  const uuid="d7bffdc1-d30f-4c67-9499-5e427e263ed2"

// わかんないから保留　
//const {response,error}=useGetApi()

  fetch('/users/{:uuid}/concrete_ingredients')
.then(data => {
  return data.json();
})
.then(post => {
  console.log(concrete_ingredients);
});

};