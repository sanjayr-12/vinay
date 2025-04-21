import { useImageCategoryStore } from "../store/Store";
import { ImageCategoryEnum } from "../types/store.types";
// import { useEffect } from "react";

const ImageCategory = () => {
  const { category, setImageCategory } = useImageCategoryStore();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as ImageCategoryEnum;
    setImageCategory(value);
  };

  return (
    <div className="flex gap-5">
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Design</span>
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-red-500"
            value={ImageCategoryEnum.DESIGN}
            checked={category === ImageCategoryEnum.DESIGN}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Analytics</span>
          <input
            type="radio"
            name="radio-10"
            value={ImageCategoryEnum.ANALYTICS}
            className="radio checked:bg-blue-500"
            checked={category === ImageCategoryEnum.ANALYTICS}
            onChange={handleChange}
          />
        </label>
      </div>
    </div>
  );
};

export default ImageCategory;
