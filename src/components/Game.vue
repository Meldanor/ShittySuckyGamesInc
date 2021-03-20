<template>
  <div class="mb-10 m-2 shadow-lg border-gray-800 bg-gray-100 rounded-md">
    <div class="h-14 grid grid-cols-8 gap-1">
      <div class="text-lg font-bold text-center col-span-6">{{game.name}}</div>
      <div class="text-lg col-span-2 flex flex-col pt-1">
        <div class="self-center flex justify-center items-center h-12 w-12 ring-4 rounded-full ring-green-300 bg-green-500 font-bold">{{game.score}}</div>
      </div>
    </div>
    <div class="text-xs h-12 flex justify-between p-1 font-semibold text-gray-800 bg-gray-300">
      <div class="flex flex-col mr-1 p-1 font-bold ">
        <span>{{game.mainGenre}}</span>
        <span>{{game.subGenre}}</span>
      </div>
      <div class="flex flex-col mr-1 p-1 font-bold md:border-l border-gray-400">
        <span>{{game.mainTheme}}</span>
        <span>{{game.subTheme}}</span>
      </div>
      <span class="mr-1 p-1 px-2 font-bold md:border-l border-gray-400">{{releaseDate}}</span>
    </div>
    <img class="w-full max-h-64 object-contain" :src="game.image" alt="" />
    <p class="px-1 pt-1 cursor-pointer font-sans text-sm font-medium" :class="{'line-clamp-none': isClicked, 'line-clamp-4': !isClicked}" @click="onClick">
      {{game.text}}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Game',
  data () {
    return {
      isClicked: false
    }
  },
  methods: {
    onClick() {
      this.isClicked = !this.isClicked;
    }
  },
  props: ["game"],
  computed: {
    releaseDate() {
      return `W${this.game.releaseDate.week} M${this.game.releaseDate.month} ${this.game.releaseDate.year}`; 
    }
  }
}
</script>
