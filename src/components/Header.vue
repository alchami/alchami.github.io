<template>
    <!-- here `vw` correspond to the size of the viewport in percentage -->
    <!--
        TODO: extract the magic numbers, make div mb, h1 pb,
        img w and bottom dependent of each other
    -->
    <header>
    <div class="relative mb-[10vw] bg-graph-paper bg-pink lg:pt-[2vw] lg:mb-[13vw]">
        <h1 class="font-mono pt-[2vw] pb-[10vw] text-[10vw] text-center lg:text-right lg:pb-0 lg:pt[5vw] lg:pr-[25vw] lg:text-[5vw] text-white">Alice Chaminas</h1>
        <img class=" 
            aspect-square w-[20vw] lg:w-[18vw]
            absolute -bottom-[10vw]
            mx-auto left-0 right-0 lg:mx-0 lg:left-[75%]
            rounded-full border-[1vw] border-white"
        src="assets/avatar.jpg" alt="Avatar représentant Alice"/>
        <h2 class="hidden font-mono lg:block lg:text-[3vw] lg:absolute lg:right-[25vw] lg:-bottom-[6rem]">Developpeuse front-end</h2>
    </div>
        <h2 class="lg:hidden mb-[3vw] font-mono text-[6vw] text-center">Developpeuse front-end</h2>
    </header>
</template>