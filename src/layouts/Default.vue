<template>
  <div class="h-full bg-purple-500">
    <header>
      <div class="pt-4 mx-auto w-full">
        <h1 class="pb-1 text-center md:text-5xl text-3xl font-bold font-mono italic tracking-tight">
          Shitty Sucky Games Inc.
        </h1>
        <div class="pb-7 mx-auto flex flex-row justify-center gap-4 text-lg underline font-semibold text-gray-900">
          <g-link class="hover:text-black" to="/">Games</g-link>
          <g-link class="hover:text-black" to="/about/">About</g-link>
        </div>
      </div>
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>