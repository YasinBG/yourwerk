<template>
    
   <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      
      <div class="bg-black text-white flex flex-col justify-center w-1/2   rounded-lg shadow-md ">
        <img src="https://images.unsplash.com/photo-1621504450181-5d356f61d307?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" class="rounded-t">
        <div class="w-">
          <h2 class="text-2xl font-semibold mb-2 mt-2">title</h2>
        <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id...</p>
        <button class="buton mt-4 w-1/2 mx-auto bg-green-500 text-white px-4  my-4 py-2 rounded-xl hover:bg-green-800 font-semibold">Detaylar</button>
        </div>
        
        
      </div>
      <div class="max-w-xs rounded overflow-hidden shadow-lg bg-black text-white">
    <img class="w-full" src="https://images.unsplash.com/photo-1621504450187-89f5076d4355?q=80&w=2606&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Kitten">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">Kitten Card</div>
      <p class="text-gray-700 text-base">
        A cute kitten to brighten your day!
      </p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#kitten</span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#cute</span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#adorable</span>
    </div>
  </div>
  <div class="flex flex-col w-1/3">
    <button class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full">
  Click me
</button>

<button class="border-2 border-green-500 hover:border-green-700 text-green-500 hover:text-green-700 font-bold py-2 px-4 rounded">
  Click me
</button>

<button class="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 shadow-md rounded">
  Click me
</button>



  </div>
     
    </div>
    
    
  </template>
  
  <script>
  export default {
  
  };
  
  
  </script>
  
  <style scoped>
  .buton{
    box-shadow: 4px 4px rgb(177, 154, 154);
  transition: box-shadow 0.3s ease;

  }
  
  </style>
  