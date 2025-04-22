import { useImageCategoryStore } from "../store/Store";
import { ImageCategoryEnum } from "../types/store.types";

const ImageCategory = () => {
  const { category, setImageCategory } = useImageCategoryStore();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as ImageCategoryEnum;
    setImageCategory(value);
  };

  return (
    <div className="flex gap-5 flex-wrap">
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
            className="radio checked:bg-green-500"
            checked={category === ImageCategoryEnum.ANALYTICS}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Updates</span>
          <input
            type="radio"
            name="radio-10"
            value={ImageCategoryEnum.UPDATES}
            className="radio checked:bg-purple-500"
            checked={category === ImageCategoryEnum.UPDATES}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Interior</span>
          <input
            type="radio"
            name="radio-10"
            value={ImageCategoryEnum.INTERIOR}
            className="radio checked:bg-yellow-500"
            checked={category === ImageCategoryEnum.INTERIOR}
            onChange={handleChange}
          />
        </label>
      </div>
    </div>
  );
};

export default ImageCategory;
