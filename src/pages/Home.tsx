import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-pattern-base bg-grid-pattern bg-grid relative overflow-hidden">
      {/* 旗幟裝飾 - 滿寬度置頂 */}
      <div className="absolute top-0 left-0 right-0 z-10 flex justify-center">
        <img 
          src="/flag.svg" 
          alt="旗幟裝飾" 
          className="w-full h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 opacity-90 object-cover"
        />
      </div>

      {/* 右上角署名 */}
      <div className="absolute top-16 right-8 text-gray-600 text-sm font-medium z-20">
        Presented by 張閔凱
      </div>

      {/* 左下角箱子裝飾 */}
      <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 lg:bottom-8 lg:left-8 z-10">
        <img 
          src="/box.svg" 
          alt="箱子裝飾" 
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 opacity-80"
        />
      </div>

      {/* 主要內容 */}
      <div className="flex items-center justify-center min-h-screen p-4 pt-32 sm:pt-36 md:pt-40 lg:pt-44 xl:pt-48 relative z-10">
        <div className="text-center w-full max-w-4xl">
          
          {/* 主標題 */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-gray-800 mb-6 font-custom-sans leading-tight">
            鄰里雲端便利換計劃
          </h1>
          
          {/* 副標題 */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-700 mb-12 font-custom-sans">
            ——讓社區流動起來！
          </h2>
          
          {/* 功能按鈕區域 */}
          <div className="flex flex-row gap-4 sm:gap-6 md:gap-8 justify-center items-center mb-16">
            {/* 我要刊登按鈕 */}
            <Link
              to="/post"
              className="group relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-white border-2 border-emerald-500 hover:bg-emerald-500 text-emerald-500 hover:text-white font-bold rounded-3xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center overflow-hidden"
            >
              <span className="relative z-10 flex flex-col items-center text-2xl sm:text-3xl md:text-4xl">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                我要刊登
              </span>
            </Link>
            
            {/* 瀏覽商品按鈕 */}
            <Link
              to="/products"
              className="group relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-white border-2 border-blue-500 hover:bg-blue-500 text-blue-500 hover:text-white font-bold rounded-3xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center overflow-hidden"
            >
              <span className="relative z-10 flex flex-col items-center text-2xl sm:text-3xl md:text-4xl">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                瀏覽商品
              </span>
            </Link>
          </div>

          {/* 底部標語 */}
          <div className="inline-block bg-red-500 text-white font-bold py-4 px-8 rounded-full text-lg sm:text-xl font-custom-sans tracking-wide shadow-lg">
            專屬社區的二手物品交流平台
          </div>
        </div>
      </div>

      {/* 右下角購物女性插圖 - 放大版貼齊角落 */}
      <div className="absolute bottom-0 right-0 z-10">
        <img 
          src="/shoppinglady.svg" 
          alt="購物女性插圖" 
          className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  );
};

export default Home; 