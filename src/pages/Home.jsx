import Hero from "../components/Hero";
import Seo from "../components/Seo";
import SectionIntro from "../components/SectionIntro";

function Home() {
  return (
    <div style={{ width: "100%", overflowX: "hidden" }}>
      <Seo
        title="Sn Çevik Mobilya | Ankara Özel Ölçü Dolap, Komodin ve Şifonyer"
        description="Sn Çevik Mobilya, Ankara Altındağ'da özel ölçü dolap, komodin ve şifonyer üretimi yapan Pako Dizayn atölyesidir."
        path="/"
      />
      <Hero
        baslik="Pako Dizayn Mobilya"
        aciklama="Halil Çevik, 35 yılı aşkın ustalık birikimini Pako Dizayn çatısı altında çağdaş çizgilerle buluşturuyor. Ölçüye özel dolaplar, komodinler ve şifonyerler; doğru malzeme, temiz işçilik ve uzun ömürlü kullanım odağıyla hazırlanıyor. Yatak odanızda sıcak, düzenli ve karakterli bir atmosfer arıyorsanız, burada her parça gerçek bir atölye emeği taşıyor."
        tel="0539 483 36 93"
        resim="/images/Gemini_Generated_Image_yxb6r0yxb6r0yxb6.png"
        reverse={false}
      />

      <SectionIntro
        baslik="Dolap Modelleri"
        aciklama="Kapak oranından iç bölme düzenine kadar düşünülmüş dolaplarımız, odanın mimarisine uyum sağlayan güçlü bir ana parça gibi tasarlanır. Geniş depolama alanı ve dengeli yüzey diliyle işlevi estetikle bir araya getirir."
        resim="/images/Gemini_Generated_Image_asjchyasjchyasjc.png"
        hedefLink="/dolap"
        reverse={true}
      />

      <SectionIntro
        baslik="Komodin Tasarımları"
        aciklama="Yatak başı kullanımını sade ama güçlü bir detayla tamamlayan komodinlerimiz, çekmece oranları ve yüzey geçişleriyle bütünlüklü bir görünüm sunar. Küçük alanda düzen, şıklık ve malzeme kalitesini birlikte hissettirir."
        resim="/images/Gemini_Generated_Image_fx78oyfx78oyfx78.png"
        hedefLink="/komodin"
        reverse={false}
      />

      <SectionIntro
        baslik="Şifonyer ve Makyaj Masası"
        aciklama="Şifonyer ve makyaj masası grubunda çekmece düzeni, ayna kullanımı ve günlük kullanım rahatlığı ön planda. Dekoratif görünümü korurken kullanışlı depolama çözümü sunan tasarımlar burada yer alıyor."
        resim="/images/Gemini_Generated_Image_diym1wdiym1wdiym.png"
        hedefLink="/sifonyer"
        reverse={true}
      />

      <SectionIntro
        baslik="Atölye ve Showroom"
        aciklama="Üretim anlayışımızı, atölye düzenimizi ve yerinde uygulama örneklerini görmek isterseniz buradaki fotoğraflar markanın gerçek yüzünü gösteriyor. Tasarım kadar işçilik ve teslim kalitesi de bu alanın parçası."
        resim="/images/sncevik.png"
        hedefLink="/dolap"
        reverse={false}
      />
    </div>
  );
}

export default Home;
