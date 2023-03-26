import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="text-center flex flex-col items-center w-full mt-60">
      <h1 className="text-3xl font-bold mt-0 mb-6">{t("notFound.title")}</h1>
      <h3 className="text-xl mb-8">{t("notFound.description")}</h3>
      <Link to="/" className="flex justify-center">
        <button className="text-center mt-3 font-medium text-blue hover:underline decoration-transparent hover:decoration-inherit transition duration-300 ease-in-out">
          {t("notFound.back_to_home_page")}
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
