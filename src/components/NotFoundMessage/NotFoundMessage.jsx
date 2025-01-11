import css from "./NotFoundMessage.module.css";

export default function NotFoundMessage({ query }) {
  return (
    <div className={css.message}>
      <h2>
        {
          <span>
            No images found for the query:{" "}
            <span className={css.italic}>{query}</span>
          </span>
        }
      </h2>
    </div>
  );
}
