import { useState } from 'react';
import { Link } from 'react-router-dom';
import SimpleSelect from '../components/SimpleSelect';

// 假資料
const mockProducts = [
  {
    id: 1,
    title: '實木餐桌',
    description: '搬家出清，八成新實木餐桌，可坐6人，無蟲蛀，表面有些許使用痕跡',
    category: '居家用品',
    price: 3500,
    type: 'normal',
    seller: '小王',
    contact: 'LINE ID: wangtable',
    image: '📅'
  },
  {
    id: 2,
    title: '可愛熊熊娃娃',
    description: '超可愛的泰迪熊娃娃，陪伴我很多年，希望找到愛它的新主人',
    category: '玩具',
    price: 0,
    type: 'love',
    seller: '小美',
    contact: '電話: 0912345678',
    image: '🧸'
  },
  {
    id: 3,
    title: 'Panasonic 微波爐',
    description: '25L大容量微波爐，功能正常，搬家用不到，希望轉給需要的人',
    category: '家電',
    price: 1800,
    type: 'normal',
    seller: '阿明',
    contact: 'LINE ID: ming_micro',
    image: '📱'
  },
  {
    id: 4,
    title: '單人沙發',
    description: '米色布沙發，舒適好坐，只是搬新家空間不夠，希望有人能繼續使用',
    category: '家具',
    price: 0,
    type: 'barter',
    seller: '小林',
    contact: 'LINE ID: sofa_lin',
    image: '🛋️'
  },
  {
    id: 5,
    title: '搬家紙箱 20個',
    description: '剛搬完家，紙箱狀況良好，免費送給需要搬家的朋友',
    category: '其他',
    price: 0,
    type: 'love',
    seller: '小陳',
    contact: '電話: 0987654321',
    image: '📦'
  },
  {
    id: 6,
    title: '雙人床墊',
    description: '獨立筒床墊，睡起來很舒服，搬家換新床所以出售',
    category: '家具',
    price: 2500,
    type: 'normal',
    seller: '阿華',
    contact: 'LINE ID: bed_hua',
    image: '🛏️'
  },
  {
    id: 7,
    title: '廚房餐具組',
    description: '包含鍋子、盤子、杯子等，適合剛搬家的朋友，希望能以書籍交換',
    category: '廚具',
    price: 0,
    type: 'barter',
    seller: '小李',
    contact: '電話: 0911223344',
    image: '🍽️'
  },
  {
    id: 8,
    title: '小型冰箱',
    description: '租屋用小冰箱，約100L，冷凍冷藏功能正常，搬家用不到',
    category: '家電',
    price: 2800,
    type: 'normal',
    seller: '阿毛',
    contact: 'LINE ID: fridge_mao',
    image: '❄️'
  },
  {
    id: 9,
    title: '書桌椅組',
    description: 'IKEA書桌加辦公椅，使用兩年，功能良好，適合學生或上班族',
    category: '家具',
    price: 1200,
    type: 'normal',
    seller: '小張',
    contact: 'LINE ID: desk_zhang',
    image: '🪑'
  },
  {
    id: 10,
    title: '小朋友玩具組',
    description: '樂高、娃娃車、拼圖等，孩子長大用不到了，希望送給需要的家庭',
    category: '玩具',
    price: 0,
    type: 'love',
    seller: '媽媽王',
    contact: '電話: 0933445566',
    image: '🎮'
  },
  {
    id: 11,
    title: '洗衣機',
    description: '7kg洗衣機，搬家帶不走，功能正常，希望換一些生活用品',
    category: '家電',
    price: 0,
    type: 'barter',
    seller: '小江',
    contact: 'LINE ID: wash_jiang',
    image: '🫧'
  },
  {
    id: 12,
    title: '收納櫃',
    description: '三層收納櫃，適合放衣服或雜物，搬家出清',
    category: '收納',
    price: 800,
    type: 'normal',
    seller: '小吳',
    contact: '電話: 0977889900',
    image: '🗄️'
  }
];

const Products: React.FC = () => {
  const [showContactModal, setShowContactModal] = useState(false);
  const [selectedSeller, setSelectedSeller] = useState<{
    seller: string;
    contact: string;
    title: string;
  } | null>(null);

  // Select 選項
  const categoryOptions = [
    { value: '', label: '所有分類' },
    { value: 'home', label: '居家用品' },
    { value: 'electronics', label: '家電' },
    { value: 'furniture', label: '家具' },
    { value: 'kitchen', label: '廚具' },
    { value: 'toys', label: '玩具' },
    { value: 'storage', label: '收納' },
    { value: 'other', label: '其他' }
  ];

  const sortOptions = [
    { value: 'newest', label: '最新刊登' },
    { value: 'oldest', label: '最早刊登' },
    { value: 'price_low', label: '價格低到高' },
    { value: 'price_high', label: '價格高到低' }
  ];

  const [selectedCategory, setSelectedCategory] = useState<{ value: string; label: string } | null>(categoryOptions[0]);
  const [selectedType, setSelectedType] = useState<string>('');
  const [selectedSort, setSelectedSort] = useState<{ value: string; label: string } | null>(sortOptions[0]);

  // 篩選商品邏輯
  const filteredProducts = mockProducts.filter(product => {
    // 分類篩選
    if (selectedCategory?.value && selectedCategory.value !== '') {
      const categoryMap: { [key: string]: string } = {
        'home': '居家用品',
        'electronics': '家電',
        'furniture': '家具',
        'kitchen': '廚具',
        'toys': '玩具',
        'storage': '收納',
        'other': '其他'
      };
      if (product.category !== categoryMap[selectedCategory.value]) {
        return false;
      }
    }

    // 類型篩選
    if (selectedType && selectedType !== '') {
      if (product.type !== selectedType) {
        return false;
      }
    }

    return true;
  });

  // 排序邏輯
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (selectedSort?.value) {
      case 'price_low':
        return a.price - b.price;
      case 'price_high':
        return b.price - a.price;
      case 'oldest':
        return a.id - b.id;
      case 'newest':
      default:
        return b.id - a.id;
    }
  });

  const handleContactSeller = (seller: string, contact: string, title: string) => {
    setSelectedSeller({ seller, contact, title });
    setShowContactModal(true);
  };

  const getTypeDisplay = (type: string, price: number) => {
    switch (type) {
      case 'love':
        return (
          <div className="flex items-center">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-pink-100 text-pink-800">
              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              愛心商品
            </span>
          </div>
        );
      case 'barter':
        return (
          <div className="flex items-center">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
              以物易物
            </span>
          </div>
        );
      default:
        return (
          <div className="flex items-center">
            <span className="text-lg font-bold text-green-600">NT$ {price.toLocaleString()}</span>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* 返回按鈕 */}
        <Link 
          to="/"
          className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-6 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          返回首頁
        </Link>
        
        {/* 標題 */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            瀏覽商品
          </h1>
          <p className="text-gray-600">
            發現社區裡的寶藏，找到你需要的物品
          </p>
        </div>
        
        {/* 搜尋框 */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="space-y-4">
            {/* 搜尋和分類行 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="搜尋商品..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                />
                <svg className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              
              <SimpleSelect
                options={categoryOptions}
                value={selectedCategory}
                onChange={setSelectedCategory}
                placeholder="選擇分類"
              />
              
              <SimpleSelect
                options={sortOptions}
                value={selectedSort}
                onChange={setSelectedSort}
                placeholder="排序方式"
              />
            </div>
            
            {/* 特殊類型按鈕行 */}
            <div className="flex gap-4">
              <button
                onClick={() => setSelectedType(selectedType === 'love' ? '' : 'love')}
                className={`flex-1 px-6 py-3 rounded-lg border-2 transition-all duration-200 flex items-center justify-center ${
                  selectedType === 'love'
                    ? 'bg-pink-100 border-pink-300 text-pink-700 hover:bg-pink-200 shadow-md'
                    : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-pink-300'
                }`}
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                愛心商品
              </button>
              <button
                onClick={() => setSelectedType(selectedType === 'barter' ? '' : 'barter')}
                className={`flex-1 px-6 py-3 rounded-lg border-2 transition-all duration-200 flex items-center justify-center ${
                  selectedType === 'barter'
                    ? 'bg-blue-100 border-blue-300 text-blue-700 hover:bg-blue-200 shadow-md'
                    : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-blue-300'
                }`}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
                以物易物
              </button>
            </div>
          </div>
        </div>
        
        {/* 商品列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sortedProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <span className="text-6xl">{product.image}</span>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                    {product.category}
                  </span>
                  {getTypeDisplay(product.type, product.price)}
                </div>
                
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {product.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>賣家：{product.seller}</span>
                  <span>{product.contact.startsWith('LINE') ? '📱' : '📞'}</span>
                </div>
                
                <button 
                  onClick={() => handleContactSeller(product.seller, product.contact, product.title)}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 hover:scale-105"
                >
                  聯絡賣家
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 聯絡賣家模態窗口 */}
        {showContactModal && selectedSeller && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-md w-full mx-4">
              <div className="p-6">
                {/* 標題列 */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    聯絡賣家
                  </h3>
                  <button
                    onClick={() => setShowContactModal(false)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* 商品資訊 */}
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <p className="text-sm text-gray-600 mb-1">商品名稱</p>
                  <p className="font-medium text-gray-800">{selectedSeller.title}</p>
                </div>

                {/* 賣家資訊 */}
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">賣家</p>
                    <p className="font-medium text-gray-800">{selectedSeller.seller}</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600 mb-2">聯絡方式</p>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <div className="flex items-center">
                        {selectedSeller.contact.startsWith('LINE') ? (
                          <div className="flex items-center">
                            <span className="text-green-600 mr-2">💬</span>
                            <span className="font-medium text-green-700">{selectedSeller.contact}</span>
                          </div>
                        ) : (
                          <div className="flex items-center">
                            <span className="text-blue-600 mr-2">📞</span>
                            <span className="font-medium text-blue-700">{selectedSeller.contact}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 提示訊息 */}
                <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-yellow-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.664-.833-2.464 0L5.232 15.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <div>
                      <p className="text-sm text-yellow-800 font-medium">安全提醒</p>
                      <p className="text-xs text-yellow-700 mt-1">
                        請在安全的公共場所進行交易，並注意個人安全
                      </p>
                    </div>
                  </div>
                </div>

                {/* 按鈕 */}
                <div className="flex gap-3 mt-6">
                  <button
                    onClick={() => setShowContactModal(false)}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    關閉
                  </button>
                  {selectedSeller.contact.startsWith('LINE') ? (
                    <button
                      onClick={() => {
                        const lineId = selectedSeller.contact.replace('LINE ID: ', '');
                        window.open(`https://line.me/ti/p/${lineId}`, '_blank');
                      }}
                      className="flex-1 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                    >
                      開啟 LINE
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        const phoneNumber = selectedSeller.contact.replace('電話: ', '');
                        window.location.href = `tel:${phoneNumber}`;
                      }}
                      className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      撥打電話
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

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
    </div>
  );
};

export default Products; 