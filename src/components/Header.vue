<template>
    <!-- here `vw` correspond to the size of the viewport in percentage -->
    <!--
        TODO: extract the magic numbers, make div mb, h1 pb,
        img w and bottom dependent of each other
    -->
    <div class="relative mb-[20vw] bg-random-shapes bg-red-400">
        <h1 class="pt-[10vw] pb-[20vw] text-[10vw] text-center text-white">Alice Chaminas ✨</h1>
        <img class=" 
            aspect-square w-[40vw]
            mx-auto left-0 right-0
            absolute -bottom-[20vw]
            rounded-full border-8 border-white"
        src="assets/avatar.jpg" alt="Avatar représentant Alice"/>
    </div>
</template>