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
      <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 lg:bottom-8 lg:left-8 z-10 hidden md:block">
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
      <div className="absolute bottom-0 right-0 z-10 hidden md:block">
        <img 
          src="/shoppinglady.svg" 
          alt="購物女性插圖" 
          className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Footer */}
      <footer className="mt-12 py-8 border-t border-gray-200">
        <div className="text-center text-gray-600 space-y-4">
          {/* 交易方式提醒 */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-2">
              <svg className="w-5 h-5 text-yellow-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.664-.833-2.464 0L5.232 15.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              <span className="text-sm font-medium text-yellow-800">交易安全提醒</span>
            </div>
            <p className="text-sm text-yellow-700 mb-2">
              目前只支持面交、管理室交易，避免交易糾紛問題
            </p>
            <p className="text-sm text-yellow-700">
              如果有問題請聯絡青創團隊
            </p>
          </div>

          {/* 聯絡資訊 */}
          <div className="flex items-center justify-center">
            <svg className="w-4 h-4 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-sm text-gray-600">聯絡青創團隊：</span>
            <a href="mailto:startup@example.com" className="text-sm font-medium text-blue-600 hover:text-blue-800 ml-1 transition-colors">
              startup@example.com
            </a>
          </div>

          {/* 創立者資訊 */}
          <div className="flex items-center justify-center">
            <span className="text-sm text-gray-600">創立者：</span>
            <span className="text-sm font-semibold text-gray-800 ml-1">張閔凱</span>
          </div>

          {/* 版權資訊 */}
          <div className="text-xs text-gray-500">
            鄰里雲端便利換計劃 © 2024 · 讓社區流動起來
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home; 