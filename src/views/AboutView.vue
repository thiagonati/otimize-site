<template>
  <div class="relative py-24 overflow-hidden bg-gray-900 isolate sm:py-32">
    <img src="../assets/images/2149205475.jpg" alt=""
      class="absolute inset-0 object-cover object-right w-full h-full -z-10 md:object-center brightness-50" />
    <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      aria-hidden="true">
      <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#ecff41] opacity-20"
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
    </div>
    <div
      class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
      aria-hidden="true">
      <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#ecff41] opacity-20"
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
    </div>
    <div class="px-6 mx-auto max-w-7xl lg:px-8">
      <div class="max-w-2xl mx-auto lg:mx-0">
        <h2 class="text-4xl font-bold tracking-tight text-yellow-300 sm:text-6xl">Quem Somos</h2>
        <p class="mt-6 text-lg leading-8 text-gray-50">Fundada em [Ano de Fundação], nos destacamos no setor de
          instalação de sistemas de energia, com especialização em energia solar, eólica e outras fontes renováveis.</p>
      </div>
      <div class="max-w-2xl mx-auto mt-10 lg:mx-0 lg:max-w-none">
        <div
          class="grid grid-cols-1 text-base font-semibold leading-7 text-yellow-400 gap-x-8 gap-y-6 sm:grid-cols-2 md:flex lg:gap-x-10">
          <a v-for="link in links" :key="link.name" :href="link.href">{{ link.name }} <span
              aria-hidden="true">&rarr;</span></a>
        </div>
        <dl class="grid grid-cols-1 gap-8 mt-16 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
          <div v-for="stat in stats" :key="stat.name" class="flex flex-col-reverse">
            <dt class="text-base leading-7 text-gray-50">{{ stat.name }}</dt>
            <dd class="text-2xl font-bold leading-9 tracking-tight text-yellow-300">{{ stat.value }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>

  <div class="px-4 2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9">
    <div class="flex flex-col justify-between gap-8 lg:flex-row">
      <div class="flex flex-col justify-center w-full lg:w-5/12">
        <h1 class="pb-4 text-3xl font-bold leading-9 text-gray-800 lg:text-4xl">About Us</h1>
        <p class="text-base font-normal leading-6 text-gray-600">It is a long established fact that a reader will be
          distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the
          first place we have granted to God, and by this our present charter confirmed for us and our heirs forever
          that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we
          will that it be thus observed; which is apparent from</p>
      </div>
      <div class="w-full lg:w-8/12">
        <img class="w-full h-full" src="https://i.ibb.co/FhgPJt8/Rectangle-116.png" alt="A group of People" />
      </div>
    </div>

    <div class="flex flex-col justify-between gap-8 pt-12 lg:flex-row">
      <div class="flex flex-col justify-center w-full lg:w-5/12">
        <h1 class="pb-4 text-3xl font-bold leading-9 text-gray-800 lg:text-4xl">Our Story</h1>
        <p class="text-base font-normal leading-6 text-gray-600">It is a long established fact that a reader will be
          distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the
          first place we have granted to God, and by this our present charter confirmed for us and our heirs forever
          that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we
          will that it be thus observed; which is apparent from</p>
      </div>
      <div class="w-full lg:w-8/12 lg:pt-8">
        <div class="grid grid-cols-1 rounded-md shadow-lg md:grid-cols-4 sm:grid-cols-2 lg:gap-4">
          <div class="flex flex-col items-center justify-center p-4 pb-6">
            <img class="hidden md:block" src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png"
              alt="Alexa featured Image" />
            <img class="block md:hidden" src="https://i.ibb.co/zHjXqg4/Rectangle-118.png" alt="Alexa featured Image" />
            <p class="mt-4 text-xl font-medium leading-5 text-gray-800">Alexa</p>
          </div>
          <div class="flex flex-col items-center justify-center p-4 pb-6">
            <img class="hidden md:block" src="https://i.ibb.co/fGmxhVy/Rectangle-119.png" alt="Olivia featured Image" />
            <img class="block md:hidden" src="https://i.ibb.co/NrWKJ1M/Rectangle-119.png" alt="Olivia featured Image" />
            <p class="mt-4 text-xl font-medium leading-5 text-gray-800">Olivia</p>
          </div>
          <div class="flex flex-col items-center justify-center p-4 pb-6">
            <img class="hidden md:block" src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png" alt="Liam featued Image" />
            <img class="block md:hidden" src="https://i.ibb.co/C5MMBcs/Rectangle-120.png" alt="Liam featued Image" />
            <p class="mt-4 text-xl font-medium leading-5 text-gray-800">Liam</p>
          </div>
          <div class="flex flex-col items-center justify-center p-4 pb-6">
            <img class="hidden md:block" src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png" alt="Elijah featured image" />
            <img class="block md:hidden" src="https://i.ibb.co/ThZBWxH/Rectangle-121.png" alt="Elijah featured image" />
            <p class="mt-4 text-xl font-medium leading-5 text-gray-800">Elijah</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const links = [
  { name: 'Open roles', href: '#' },
  { name: 'Internship program', href: '#' },
  { name: 'Our values', href: '#' },
  { name: 'Meet our leadership', href: '#' },
]
const stats = [
  { name: 'Projetos', value: '120+' },
  { name: 'Técnicos', value: '50+' },
  { name: 'Anos', value: '10' },
  { name: 'Fornecedores', value: '200' },
]
</script>