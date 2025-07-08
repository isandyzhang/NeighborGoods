<template>
  <div class="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 p-4">
    <div class="max-w-6xl mx-auto">
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
          瀏覽商品
        </h1>
        <p class="text-gray-600">
          發現社區裡的寶藏，找到你需要的物品
        </p>
      </div>
      
      <!-- 搜尋和篩選 -->
      <div class="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <!-- 搜尋框 -->
          <div class="relative">
            <input 
              v-model="searchQuery"
              type="text" 
              placeholder="搜尋商品..."
              class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
            >
            <svg class="absolute left-3 top-3.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          
          <!-- 分類篩選 -->
          <select 
            v-model="selectedCategory"
            class="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
          >
            <option value="">所有分類</option>
            <option value="electronics">電子產品</option>
            <option value="clothing">服飾配件</option>
            <option value="books">書籍文具</option>
            <option value="home">居家用品</option>
            <option value="sports">運動器材</option>
            <option value="other">其他</option>
          </select>
          
          <!-- 排序 -->
          <select 
            v-model="sortBy"
            class="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
          >
            <option value="newest">最新刊登</option>
            <option value="oldest">最早刊登</option>
            <option value="title">商品名稱</option>
          </select>
        </div>
      </div>
      
      <!-- 商品列表 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="product in filteredProducts" 
          :key="product.id"
          class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <!-- 商品圖片 -->
          <div class="h-48 bg-gray-200 flex items-center justify-center">
            <svg class="h-16 w-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
          </div>
          
          <!-- 商品資訊 -->
          <div class="p-6">
            <div class="flex items-center justify-between mb-2">
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                {{ getCategoryName(product.category) }}
              </span>
              <span class="text-sm text-gray-500">{{ formatDate(product.createdAt) }}</span>
            </div>
            
            <h3 class="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
              {{ product.title }}
            </h3>
            
            <p class="text-gray-600 text-sm mb-4 line-clamp-3">
              {{ product.description }}
            </p>
            
            <!-- 聯絡按鈕 -->
            <button 
              @click="contactSeller(product)"
              class="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 hover:scale-105"
            >
              聯絡賣家
            </button>
          </div>
        </div>
      </div>
      
      <!-- 無商品時顯示 -->
      <div v-if="filteredProducts.length === 0" class="text-center py-12">
        <svg class="mx-auto h-16 w-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path>
        </svg>
        <p class="text-gray-500 text-lg">目前沒有符合條件的商品</p>
        <router-link 
          to="/post"
          class="inline-block mt-4 bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-lg transition-colors"
        >
          成為第一個刊登者
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// 搜尋和篩選狀態
const searchQuery = ref('')
const selectedCategory = ref('')
const sortBy = ref('newest')

// 假資料 - 商品列表
const products = ref([
  {
    id: 1,
    title: '九成新 iPhone 13',
    description: '去年購買的 iPhone 13，保護得很好，想換新手機所以出售。包含原廠充電器和保護殼。',
    category: 'electronics',
    contact: '0912-345-678',
    createdAt: '2024-01-15'
  },
  {
    id: 2,
    title: '大學教科書 - 微積分',
    description: '大一微積分課本，筆記完整，適合準備考試的同學。',
    category: 'books',
    contact: 'line: math_student',
    createdAt: '2024-01-14'
  },
  {
    id: 3,
    title: 'Nike 運動鞋',
    description: '42號 Nike 運動鞋，只穿過幾次，因為買錯尺寸所以出售。',
    category: 'clothing',
    contact: '0923-456-789',
    createdAt: '2024-01-13'
  },
  {
    id: 4,
    title: 'IKEA 書桌',
    description: '白色書桌，尺寸 120x60cm，搬家出售。組裝簡單，狀況良好。',
    category: 'home',
    contact: 'line: home_seller',
    createdAt: '2024-01-12'
  },
  {
    id: 5,
    title: '籃球',
    description: '標準籃球，適合室內外使用。打過幾次，狀況良好。',
    category: 'sports',
    contact: '0934-567-890',
    createdAt: '2024-01-11'
  }
])

// 篩選商品
const filteredProducts = computed(() => {
  let filtered = products.value
  
  // 搜尋篩選
  if (searchQuery.value) {
    filtered = filtered.filter(product => 
      product.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  }
  
  // 分類篩選
  if (selectedCategory.value) {
    filtered = filtered.filter(product => product.category === selectedCategory.value)
  }
  
  // 排序
  filtered.sort((a, b) => {
    switch (sortBy.value) {
      case 'newest':
        return new Date(b.createdAt) - new Date(a.createdAt)
      case 'oldest':
        return new Date(a.createdAt) - new Date(b.createdAt)
      case 'title':
        return a.title.localeCompare(b.title)
      default:
        return 0
    }
  })
  
  return filtered
})

// 取得分類名稱
const getCategoryName = (category) => {
  const categories = {
    electronics: '電子產品',
    clothing: '服飾配件',
    books: '書籍文具',
    home: '居家用品',
    sports: '運動器材',
    other: '其他'
  }
  return categories[category] || '其他'
}

// 格式化日期
const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('zh-TW')
}

// 聯絡賣家
const contactSeller = (product) => {
  alert(`聯絡方式：${product.contact}\n商品：${product.title}`)
}
</script> 