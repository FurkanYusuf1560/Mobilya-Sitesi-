import Hero from "../components/Hero";
import SectionIntro from "../components/SectionIntro";

function Home() {
  return (
    <div style={{ width: "100%", overflowX: "hidden" }}>
      <Hero
        baslik="Pako Dizayn Mobilya"
        aciklama="Halil Çevik, mobilya sektöründe 35 yılı aşkın tecrübesiyle, el işçiliğinin ve ustalığın simgesidir. Bugün kendi markası olan PakoDizayn ile, yılların birikimini modern çizgilerle buluşturarak özel tasarım dolap, komodin ve şifonyerler üretmektedir. Her ürün, kaliteye olan bağlılığının, detaylara verdiği önemin ve müşteri memnuniyetine duyduğu saygının bir yansımasıdır. Yatak odanıza estetik ve fonksiyonellik katmak istiyorsanız, Halil Çevik imzası taşıyan PakoDizayn ürünleri tam size göre."
        tel="0539 483 36 93"
        resim="/images/dolap3.jpeg"
        hedefLink="/hakkimizda"
        reverse={false}
      />

      <SectionIntro
        baslik="Dolap Modelleri"
        aciklama="Estetik ve işlevselliği bir araya getiren dolaplarımız, yatak odanızda hem düzen hem de şıklık sağlar. Her biri özenle seçilmiş malzemelerle, el işçiliğiyle üretilen dolaplarımız, yıllarca güvenle kullanabileceğiniz sağlamlıktadır."
        resim="/images/dolap1.jpeg"
        hedefLink="/dolap"
        reverse={true}
      />

      <SectionIntro
        baslik="Komodin Tasarımları"
        aciklama="Modern çizgilerle tasarlanmış komodinlerimiz, yatağınızın yanı başında hem estetik bir tamamlayıcı hem de kullanışlı bir alan sunar. Her detayında ustalık ve zarafeti barındıran komodin modellerimizi mutlaka keşfedin."
        resim="/images/komodin1.jpeg"
        hedefLink="/komodin"
        reverse={false}
      />

      <SectionIntro
        baslik="Şifonyer Koleksiyonu"
        aciklama="Şifonyer koleksiyonumuz, geniş depolama alanı ve zarif tasarımı ile yaşam alanınıza değer katar. Ahşabın sıcaklığıyla modern dokunuşları birleştirdiğimiz bu ürünler, hem kullanışlı hem dekoratiftir."
        resim="/images/sifonyer1.jpeg"
        hedefLink="/sifonyer"
        reverse={true}
      />
    </div>
  );
}

export default Home;
