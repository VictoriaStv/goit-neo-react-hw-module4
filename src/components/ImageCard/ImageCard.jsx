import css from "./ImageCard.module.css";

export default function ImageCard({ hit }) {
  return (
    <div>
      <img
        className={css.card}
        src={hit.urls.small}
        alt={hit.alt_description}
      />
    </div>
  );
}
