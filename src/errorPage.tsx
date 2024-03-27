import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error: unknown = useRouteError();
  const navigate = useNavigate();

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Извините, произошла непредвиденная ошибка.</p>
      <p>
        <i>
          {(error as { statusText?: string })?.statusText ||
            (error as Error)?.message}
        </i>
      </p>
      <button onClick={() => navigate(-1)}>&larr; Назад</button>
    </div>
  );
};

export default ErrorPage;
