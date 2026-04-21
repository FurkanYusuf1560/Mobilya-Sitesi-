import Hero from "../components/Hero";
import SectionIntro from "../components/SectionIntro";

function Home() {
  return (
    <div style={{ width: "100%", overflowX: "hidden" }}>
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
        resim="/images/Gemini_Generated_Image_2juznk2juznk2juz.png"
        hedefLink="/dolap"
        reverse={true}
      />

      <SectionIntro
        baslik="Komodin Tasarımları"
        aciklama="Yatak başı kullanımını sade ama güçlü bir detayla tamamlayan komodinlerimiz, çekmece oranları ve yüzey geçişleriyle bütünlüklü bir görünüm sunar. Küçük alanda düzen, şıklık ve malzeme kalitesini birlikte hissettirir."
        resim="/images/Gemini_Generated_Image_vr9kxpvr9kxpvr9k.png"
        hedefLink="/komodin"
        reverse={false}
      />

      <SectionIntro
        baslik="Şifonyer Koleksiyonu"
        aciklama="Şifonyer koleksiyonunda sıcak ahşap etkisini modern çizgilerle buluşturuyoruz. Geniş çekmece hacmi, dengeli form ve özenli kulp detayları sayesinde hem düzen sağlayan hem de odanın karakterini yükselten parçalar ortaya çıkıyor."
        resim="/images/Gemini_Generated_Image_oh0v2toh0v2toh0v.png"
        hedefLink="/sifonyer"
        reverse={true}
      />
    </div>
  );
}

export default Home;
