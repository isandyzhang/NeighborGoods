import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SimpleSelect from '../components/SimpleSelect';

const Post: React.FC = () => {
  const [contactType, setContactType] = useState<'line' | 'phone'>('line');
  const [pickupMethod, setPickupMethod] = useState<'meetup' | 'office'>('meetup');
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [price, setPrice] = useState<string>('');
  const [isLoveItem, setIsLoveItem] = useState<boolean>(false);
  const [isBarterItem, setIsBarterItem] = useState<boolean>(false);
  
  // Select 選項
  const categoryOptions = [
    { value: 'home', label: '居家用品' },
    { value: 'electronics', label: '家電' },
    { value: 'furniture', label: '家具' },
    { value: 'kitchen', label: '廚具' },
    { value: 'toys', label: '玩具' },
    { value: 'storage', label: '收納' },
    { value: 'other', label: '其他' }
  ];
  
  const [selectedCategory, setSelectedCategory] = useState<{ value: string; label: string } | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setSelectedImages(prev => [...prev, ...files]);
  };

  const removeImage = (index: number) => {
    setSelectedImages(prev => prev.filter((_, i) => i !== index));
  };

  const handleLoveItemChange = (checked: boolean) => {
    setIsLoveItem(checked);
    if (checked) {
      setPrice('0');
      setIsBarterItem(false); // 取消以物易物選項
    }
  };

  const handleBarterItemChange = (checked: boolean) => {
    setIsBarterItem(checked);
    if (checked) {
      setPrice('0');
      setIsLoveItem(false); // 取消愛心商品選項
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 p-4">
      <div className="max-w-2xl mx-auto">
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
            刊登商品
          </h1>
          <p className="text-gray-600">
            分享你的閒置物品，讓它找到新主人
          </p>
        </div>
        
        {/* 表單 */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <form className="space-y-6">
           

            {/* 商品名稱 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                商品名稱 *
              </label>
              <input 
                type="text" 
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                placeholder="例如：九成新 iPhone 13"
              />
            </div>

            {/* 商品分類 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                商品分類 *
              </label>
              <SimpleSelect
                options={categoryOptions}
                value={selectedCategory}
                onChange={setSelectedCategory}
                placeholder="請選擇商品分類"
              />
            </div>
             
            
            {/* 商品描述 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                商品描述 *
              </label>
              <textarea 
                required
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                placeholder="請詳細描述商品狀況、使用年限、交換條件等..."
              />
            </div>

            {/* 商品圖片 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                商品圖片 *
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <input
                  type="file"
                  accept="image/*"
                  capture="environment"
                  multiple
                  onChange={handleImageUpload}
                  className="hidden"
                  id="image-upload"
                />
                <label
                  htmlFor="image-upload"
                  className="cursor-pointer inline-flex flex-col items-center"
                >
                  <svg className="w-12 h-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-600 font-medium">拍照或上傳圖片</span>
                  <span className="text-gray-400 text-sm mt-1">支援多張圖片</span>
                </label>
              </div>
              
              {/* 已選擇的圖片預覽 */}
              {selectedImages.length > 0 && (
                <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
                  {selectedImages.map((file, index) => (
                    <div key={index} className="relative">
                      <img
                        src={URL.createObjectURL(file)}
                        alt={`預覽 ${index + 1}`}
                        className="w-full h-24 object-cover rounded-lg border"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-600"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* 價格 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                價格 *
              </label>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="text-gray-500 mr-2">NT$</span>
                  <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    disabled={isLoveItem || isBarterItem}
                    min="0"
                    className={`flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all ${
                      isLoveItem || isBarterItem ? 'bg-gray-100 text-gray-500' : ''
                    }`}
                    placeholder="輸入商品價格"
                  />
                </div>
                
                <label className={`flex items-center p-3 border rounded-lg cursor-pointer transition-colors ${
                  isLoveItem 
                    ? 'bg-pink-100 border-pink-300 hover:bg-pink-200' 
                    : 'hover:bg-pink-50'
                }`}>
                  <input
                    type="checkbox"
                    checked={isLoveItem}
                    onChange={(e) => handleLoveItemChange(e.target.checked)}
                    className="mr-3"
                  />
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-pink-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <div className="font-medium text-gray-700">愛心商品</div>
                      <div className="text-sm text-gray-500">免費贈送給需要的人</div>
                    </div>
                  </div>
                </label>

                <label className={`flex items-center p-3 border rounded-lg cursor-pointer transition-colors ${
                  isBarterItem 
                    ? 'bg-blue-100 border-blue-300 hover:bg-blue-200' 
                    : 'hover:bg-blue-50'
                }`}>
                  <input
                    type="checkbox"
                    checked={isBarterItem}
                    onChange={(e) => handleBarterItemChange(e.target.checked)}
                    className="mr-3"
                  />
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                    <div>
                      <div className="font-medium text-gray-700">以物易物</div>
                      <div className="text-sm text-gray-500">用其他物品交換</div>
                    </div>
                  </div>
                </label>
              </div>
            </div>
            {/* 暱稱 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                暱稱 *
              </label>
              <input 
                type="text" 
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                placeholder="例如：小明"
              />
            </div>
            {/* 聯絡方式 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                聯絡方式 *
              </label>
              <div className="space-y-3">
                <div className="flex rounded-lg overflow-hidden border border-gray-300">
                  <button
                    type="button"
                    onClick={() => setContactType('line')}
                    className={`flex-1 px-4 py-3 font-medium transition-all duration-200 ${
                      contactType === 'line'
                        ? 'bg-green-500 text-white shadow-md'
                        : 'bg-white text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center justify-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.28-.63.63-.63.346 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.07 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                      </svg>
                      LINE ID
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setContactType('phone')}
                    className={`flex-1 px-4 py-3 font-medium transition-all duration-200 ${
                      contactType === 'phone'
                        ? 'bg-blue-500 text-white shadow-md'
                        : 'bg-white text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center justify-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      電話
                    </div>
                  </button>
                </div>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  placeholder={contactType === 'line' ? '例如：your_line_id' : '例如：0912345678'}
                />
              </div>
            </div>

            {/* 取貨方式 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                取貨方式 *
              </label>
              <div className="space-y-3">
                <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="pickupMethod"
                    value="meetup"
                    checked={pickupMethod === 'meetup'}
                    onChange={(e) => setPickupMethod(e.target.value as 'meetup' | 'office')}
                    className="mr-3"
                  />
                  <div>
                    <div className="font-medium text-gray-700">面交</div>
                    <div className="text-sm text-gray-500">約定時間地點當面交易</div>
                  </div>
                </label>
                <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="pickupMethod"
                    value="office"
                    checked={pickupMethod === 'office'}
                    onChange={(e) => setPickupMethod(e.target.value as 'meetup' | 'office')}
                    className="mr-3"
                  />
                  <div>
                    <div className="font-medium text-gray-700">寄放管理室</div>
                    <div className="text-sm text-gray-500">寄放在大樓/社區管理室</div>
                  </div>
                </label>
              </div>
            </div>
            
            {/* 提交按鈕 */}
            <button 
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-4 px-8 rounded-lg shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl"
            >
              刊登商品
            </button>
          </form>
        </div>

        {/* Footer */}
        <footer className="mt-12 py-8 border-t border-gray-200">
          <div className="text-center text-gray-600 space-y-2">
            <div className="flex items-center justify-center">
              <svg className="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium">此頁面僅供測試使用</span>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-sm">創立者：</span>
              <span className="text-sm font-semibold text-gray-800 ml-1">張閔凱</span>
            </div>
            <div className="text-xs text-gray-500">
              鄰里雲端便利換計劃 © 2024 · 讓社區流動起來
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Post; 