function UrunKarti({ resimYolu, ad, }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "12px",
      padding: "10px",
      textAlign: "center",
      backgroundColor: "#fff",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      transition: "transform 0.3s",
    }}>
      <img
        src={resimYolu}
        alt={ad}
        style={{ width: "100%", height: "auto", borderRadius: "8px" }}
      />
      <h3 style={{ marginTop: "10px" }}>{ad}</h3>
      
    </div>
  );
}

export default UrunKarti;
