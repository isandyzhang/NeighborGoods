<template>
  <div class="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 p-4">
    <div class="max-w-2xl mx-auto">
      <!-- 返回按鈕 -->
      <router-link 
        to="/"
        class="inline-flex items-center text-gray-600 hover:text-gray-800 mb-6 transition-colors"
      >
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
        </svg>
        返回首頁
      </router-link>
      
      <!-- 標題 -->
      <div class="text-center mb-8">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          刊登商品
        </h1>
        <p class="text-gray-600">
          分享你的閒置物品，讓它找到新主人
        </p>
      </div>
      
      <!-- 表單 -->
      <form @submit.prevent="submitForm" class="bg-white rounded-xl shadow-lg p-6 md:p-8">
        <div class="space-y-6">
          <!-- 商品名稱 -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              商品名稱 *
            </label>
            <input 
              v-model="form.title"
              type="text" 
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
              placeholder="例如：九成新 iPhone 13"
            >
          </div>
          
          <!-- 商品描述 -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              商品描述 *
            </label>
            <textarea 
              v-model="form.description"
              required
              rows="4"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
              placeholder="請詳細描述商品狀況、使用年限、交換條件等..."
            ></textarea>
          </div>
          
          <!-- 商品分類 -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              商品分類 *
            </label>
            <select 
              v-model="form.category"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
            >
              <option value="">請選擇分類</option>
              <option value="electronics">電子產品</option>
              <option value="clothing">服飾配件</option>
              <option value="books">書籍文具</option>
              <option value="home">居家用品</option>
              <option value="sports">運動器材</option>
              <option value="other">其他</option>
            </select>
          </div>
          
          <!-- 聯絡方式 -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              聯絡方式 *
            </label>
            <input 
              v-model="form.contact"
              type="text" 
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
              placeholder="電話號碼或 Line ID"
            >
          </div>
          
          <!-- 圖片上傳 -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              商品圖片
            </label>
            <div class="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-orange-400 transition-colors">
              <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <p class="mt-2 text-sm text-gray-600">
                點擊上傳圖片或拖拽到這裡
              </p>
              <input type="file" class="hidden" accept="image/*">
            </div>
          </div>
          
          <!-- 提交按鈕 -->
          <button 
            type="submit"
            class="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-4 px-8 rounded-lg shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl"
          >
            刊登商品
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const form = ref({
  title: '',
  description: '',
  category: '',
  contact: ''
})

const submitForm = () => {
  // 這裡可以加入表單驗證和提交邏輯
  console.log('提交表單:', form.value)
  alert('商品刊登成功！')
  router.push('/products')
}
</script> 