<template>
  <button class="btn rounded" @click="$emit('clickButton')">
    <slot></slot>
  </button>
</template>
