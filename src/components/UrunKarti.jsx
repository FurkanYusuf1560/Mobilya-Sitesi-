import "./UrunKarti.css";

function UrunKarti({ resimYolu, ad, etiket }) {
  return (
    <article className="product-card">
      <div className="product-card__media">
        <img src={resimYolu} alt={ad} />
        {etiket ? <span className="product-card__tag">{etiket}</span> : null}
      </div>
      <div className="product-card__body">
        <h3>{ad}</h3>
      </div>
    </article>
  );
}

export default UrunKarti;
