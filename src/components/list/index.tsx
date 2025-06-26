import { useEffect, useState, type FC } from "react";
import { fetchCars } from "../../utils/service";
import type { ICar } from "../../types";
import Warning from "./Warning";
import Card from "./Card";
import { useSearchParams } from "react-router-dom";
import ReactPaginate from "react-paginate";

const List: FC = () => {
  const [cars, setCars] = useState<ICar[] | null>(null);
  const [total, setTotal] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const [params, setParams] = useSearchParams();

  const paramsObj = Object.fromEntries(params.entries());

  console.log(paramsObj);

  useEffect(() => {
    fetchCars({ ...paramsObj })
      .then((data) => {
        setTotal(data.total_count);
        setCars(data.results);
      })
      .catch((err) => setError(err.message));
  }, [params]);

  //1) cars null ise > Henüz API'dan cevap gelmemiştir

  if (!cars) {
    return <Warning>Loading...</Warning>;
  }

  //2) error dolu ise > API'dan hatalı cevap gelmiştir
  if (error) {
    return <Warning>Hata mesajı</Warning>;
  }

  //3) cars boş dizi ise > Aranılan kriterde veri yoktur
  if (cars.length === 0) {
    return <Warning>Veri bulunamadı</Warning>;
  }

  //4) cars dolu dizi ise > API'dan veriler gelmiştir

  return (
    <div className="padding-x max-width">
      <section className="home-cars-wrapper">
        {cars.map((car, i) => (
          <Card key={i} car={car} />
        ))}
      </section>
      {total && (
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          initialPage={Number(params.get("page") || 1) - 1}
          onPageChange={(e) => {
            // Sayfa değiştiğinde sayfa parametresini güncelle
            params.set("page", String(e.selected + 1));
            setParams(params);
            // Sayfa değiştiğinde sayfanın en üstüne git
            document.querySelector("#filter")?.scrollIntoView();
          }}
          className="pagination"
          pageRangeDisplayed={3}
          pageCount={Math.ceil(total / 10)}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      )}
    </div>
  );
};

export default List;
