import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import Blog from "./pages/Blog";
import BlogDetail from "./components/blog/BlogDetail";
import Communication from "./pages/Communication";

function App() {
  const blogPost = [
    {
      id: 1,
      baslik: "Jane Austen - Mansfield Park",
      ozet: "Bir kadın hayatında hiçbir şeyin iyi gitmediğini fark ettiğinde, hava durumunun da kötü gitmesine şaşırmaz. Mansfield Park'ta Fanny Price, çocukluğunda edindiği güçlü bağları korumak için mücadele ederken, hayatın karmaşıklığına ve zorluklarına karşı savaşır. Ancak, onun hikayesi sadece kişisel değildir; aynı zamanda dönemin toplumsal normlarına ve sınıfsal ayrımlarına da bir ayna tutar. Roman, genç Pip'in hayatını ve zorlu yolculuğunu takip eder, onun masumiyetini kaybetme ve gerçek değerlerini keşfetme sürecini anlatır. Mansfield Park, ahlaki ve toplumsal meseleleri ustalıkla ele alırken, okuyucularına unutulmaz bir yolculuk sunar.",
      yayinlanmaTarihi: "10 Mayıs 2024",
      yazar: "Jane Austen",
      icerik:
        "Bir kadının hayatında hiçbir şeyin iyi gitmediğini fark ettiğinde, hava durumunun da kötü gitmesine şaşırmaz. Mansfield Park'ta Fanny Price, çocukluğunda edindiği güçlü bağları korumak için mücadele ederken, hayatın karmaşıklığına ve zorluklarına karşı savaşır. Ancak, onun hikayesi sadece kişisel değildir; aynı zamanda dönemin toplumsal normlarına ve sınıfsal ayrımlarına da bir ayna tutar. Roman, genç Pip'in hayatını ve zorlu yolculuğunu takip eder, onun masumiyetini kaybetme ve gerçek değerlerini keşfetme sürecini anlatır. Mansfield Park, ahlaki ve toplumsal meseleleri ustalıkla ele alırken, okuyucularına unutulmaz bir yolculuk sunar.",
      resimURL: "https://cataas.com/cat/4",
    },
    {
      id: 2,
      baslik: "Charles Dickens - Büyük Umutlar",
      ozet: "Büyük Umutlar, insanın en derin karanlıklarında bile umut ışığı bulabileceğini anlatan zamanının en büyük eserlerinden biridir. Charles Dickens, insan doğasının karmaşıklığını ve yaşamın iniş çıkışlarını ustalıkla işlerken, insanlığın ortak acılarına ve sevinçlerine dokunur. Roman, genç Pip'in hayatını ve zorlu yolculuğunu takip eder, onun masumiyetini kaybetme ve gerçek değerlerini keşfetme sürecini anlatır. Büyük Umutlar, insanın en derin karanlıklarında bile umut ışığı bulabileceğini anlatan zamanının en büyük eserlerinden biridir. Charles Dickens, insan doğasının karmaşıklığını ve yaşamın iniş çıkışlarını ustalıkla işlerken, insanlığın ortak acılarına ve sevinçlerine dokunur.",
      yayinlanmaTarihi: "11 Mayıs 2024",
      yazar: "Charles Dickens",
      icerik:
        "Büyük Umutlar, insanın en derin karanlıklarında bile umut ışığı bulabileceğini anlatan zamanının en büyük eserlerinden biridir. Charles Dickens, insan doğasının karmaşıklığını ve yaşamın iniş çıkışlarını ustalıkla işlerken, insanlığın ortak acılarına ve sevinçlerine dokunur. Roman, genç Pip'in hayatını ve zorlu yolculuğunu takip eder, onun masumiyetini kaybetme ve gerçek değerlerini keşfetme sürecini anlatır. Büyük Umutlar, insanın en derin karanlıklarında bile umut ışığı bulabileceğini anlatan zamanının en büyük eserlerinden biridir. Charles Dickens, insan doğasının karmaşıklığını ve yaşamın iniş çıkışlarını ustalıkla işlerken, insanlığın ortak acılarına ve sevinçlerine dokunur.",
      resimURL: "https://cataas.com/cat/4",
    },
    {
      id: 3,
      baslik: "Leo Tolstoy - Savaş ve Barış",
      ozet: "Dünyada hiçbir şey, hiçbir insanın işe yaramadığı kadar zararlı olamaz. Savaş ve Barış, insan doğasının karmaşıklığını ve yaşamın iniş çıkışlarını ustalıkla işlerken, insanlığın ortak acılarına ve sevinçlerine dokunur. Roman, genç Pip'in hayatını ve zorlu yolculuğunu takip eder, onun masumiyetini kaybetme ve gerçek değerlerini keşfetme sürecini anlatır. Savaş ve Barış, insanın en derin karanlıklarında bile umut ışığı bulabileceğini anlatan zamanının en büyük eserlerinden biridir.",
      yayinlanmaTarihi: "12 Mayıs 2024",
      yazar: "Leo Tolstoy",
      icerik:
        "Dünyada hiçbir şey, hiçbir insanın işe yaramadığı kadar zararlı olamaz. Savaş ve Barış, insan doğasının karmaşıklığını ve yaşamın iniş çıkışlarını ustalıkla işlerken, insanlığın ortak acılarına ve sevinçlerine dokunur. Roman, genç Pip'in hayatını ve zorlu yolculuğunu takip eder, onun masumiyetini kaybetme ve gerçek değerlerini keşfetme sürecini anlatır. Savaş ve Barış, insanın en derin karanlıklarında bile umut ışığı bulabileceğini anlatan zamanının en büyük eserlerinden biridir.",
      resimURL: "https://cataas.com/cat/4",
    },
    {
      id: 4,
      baslik: "Charlotte Brontë - Jane Eyre",
      ozet: "Bir kadının aşkı kıyaslanamaz; bir erkeğin zekası kadar da tahmin edilemez. Jane Eyre, insan doğasının karmaşıklığını ve yaşamın iniş çıkışlarını ustalıkla işlerken, insanlığın ortak acılarına ve sevinçlerine dokunur. Roman, genç Pip'in hayatını ve zorlu yolculuğunu takip eder, onun masumiyetini kaybetme ve gerçek değerlerini keşfetme sürecini anlatır. Jane Eyre, insanın en derin karanlıklarında bile umut ışığı bulabileceğini anlatan zamanının en büyük eserlerinden biridir.",
      yayinlanmaTarihi: "13 Mayıs 2024",
      yazar: "Charlotte Brontë",
      icerik:
        "Bir kadının aşkı kıyaslanamaz; bir erkeğin zekası kadar da tahmin edilemez. Jane Eyre, insan doğasının karmaşıklığını ve yaşamın iniş çıkışlarını ustalıkla işlerken, insanlığın ortak acılarına ve sevinçlerine dokunur. Roman, genç Pip'in hayatını ve zorlu yolculuğunu takip eder, onun masumiyetini kaybetme ve gerçek değerlerini keşfetme sürecini anlatır. Jane Eyre, insanın en derin karanlıklarında bile umut ışığı bulabileceğini anlatan zamanının en büyük eserlerinden biridir.",
      resimURL: "https://cataas.com/cat/4",
    },
  ];
  return (
    <div>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route
              exact
              path="/blog"
              element={<Blog blogGonderileri={blogPost} />}
            />
            <Route
              path="/blog/:id"
              element={<BlogDetail blogGonderileri={blogPost} />}
            />

            <Route path="/communication" element={<Communication />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
