import { useMemo, useState, type FC, type FormEvent } from "react";
import ReactSelect from "react-select";
import { makes } from "../../utils/constants";
import { useSearchParams } from "react-router-dom";

const SearchBar: FC = () => {
  const [make, setMake] = useState<string>("");
  const [model, setModel] = useState<string>("");
  const [year, setYear] = useState<string>("");

  const [params, setParams] = useSearchParams();

  const options = useMemo(
    () => makes.map((make) => ({ value: make, label: make })),
    []
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newParams: Record<string, string> = {};
    if (make) newParams.make = make;
    if (model) newParams.model = model;
    if (year) newParams.year = year;

    setParams(newParams);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="searchbar gap-3 flex items-center justify-center "
    >
      <div className="searchbar-item items-end">
        <div className="w-full flex flex-col">
          <label>Marka</label>
          <ReactSelect
            className="w-full text-black"
            options={options}
            placeholder="Marka seçiniz"
            onChange={(selectedOption) =>
              setMake(selectedOption ? selectedOption.value : "")
            }
            defaultValue={
              params.get("make")
                ? { label: params.get("make")!, value: params.get("make")! }
                : undefined
            }
          />
        </div>
      </div>

      <div className="searchbar-item flex flex-col !items-start ">
        <label htmlFor="model">Model</label>
        <div className="flex w-full">
          <div className="absolute ml-3 mt-1 ">
            <img src="model-icon.png" alt="Model Icon" className="w-[25px]" />
          </div>
          <input
            id="model"
            type="text"
            className="searchbar-input rounded text-black bg-white pl-10"
            placeholder="Modeli Giriniz"
            onChange={(e) => setModel(e.target.value)}
            defaultValue={params.get("model") ?? ""}
          />
        </div>
      </div>

      <div className="searchbar-item flex flex-col">
        <label htmlFor="year">Yıl</label>
        <input
          id="year"
          type="number"
          className="w-[120px] py-[6px] px-2 text-center rounded shadow text-black bg-white"
          placeholder="Yıl giriniz"
          onChange={(e) => setYear(e.target.value)}
          defaultValue={params.get("year") ?? ""}
        />
      </div>

      <button
        area-label="Ara"
        type="submit"
        className="flex items-center gap-2 mt-4 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow transition-all duration-200"
      >
        <img src="/search.svg" alt="Search" className="w-5 h-5" />
        Ara
      </button>
    </form>
  );
};

export default SearchBar;
