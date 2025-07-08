<template>
  <div class="min-h-screen flex items-center justify-center p-4 bg-pattern">
    <div class="text-center max-w-md w-full">
      <!-- 插圖 -->
      <div class="flex justify-center mb-4">
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="32" fill="#FAF7F2"/>
          <ellipse cx="32" cy="38" rx="16" ry="10" fill="#E5C9A8"/>
          <circle cx="32" cy="28" r="12" fill="#6FCF97"/>
          <ellipse cx="32" cy="28" rx="6" ry="8" fill="#fff" fill-opacity=".5"/>
        </svg>
      </div>
      <!-- 標題 -->
      <h1 class="text-4xl md:text-5xl font-extrabold text-[#333] mb-4 font-sans">
        鄰里雲端便利換
      </h1>
      <p class="text-lg text-[#666] mb-10 font-sans">
        專屬社區的二手物品交流平台
      </p>
      <!-- 按鈕區域 -->
      <div class="space-y-8">
        <router-link 
          to="/post"
          class="block w-full bg-[#6FCF97] hover:bg-[#57b87b] text-white font-bold py-6 px-12 rounded-3xl shadow-lg text-xl transition-all duration-200 font-sans tracking-wide hover:shadow-xl transform hover:scale-105"
        >
          <span class="inline-flex items-center justify-center">
            <svg class="w-7 h-7 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
            我要刊登
          </span>
        </router-link>
        <router-link 
          to="/products"
          class="block w-full bg-[#E5C9A8] hover:bg-[#d1b08a] text-[#333] font-bold py-6 px-12 rounded-3xl shadow-lg text-xl transition-all duration-200 font-sans tracking-wide hover:shadow-xl transform hover:scale-105"
        >
          <span class="inline-flex items-center justify-center">
            <svg class="w-7 h-7 mr-3" fill="none" stroke="#F2994A" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
            瀏覽商品
          </span>
        </router-link>
      </div>
      <!-- 底部說明 -->
      <div class="mt-12 text-sm text-[#999] font-sans">
        <p>免費刊登 • 安全交易 • 環保共享</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// 首頁邏輯
</script>

<style>
.bg-pattern {
  background-color: #FAF7F2;
  background-image:
    linear-gradient(0deg, rgba(229,201,168,0.15) 1px, transparent 1px),
    linear-gradient(90deg, rgba(229,201,168,0.15) 1px, transparent 1px);
  background-size: 40px 40px;
}
.font-sans {
  font-family: 'Noto Sans TC', 'Inter', 'Segoe UI', 'Arial', 'sans-serif';
}
</style> 