<template>
    <span class="text-xs">
        <span v-for="s in speaking">
            <transition name="slide-fade" mode="out-in" appear>
                <v-chip small v-if="s.typing" label class="lime dark--text">
                    <v-icon light left>keyboard</v-icon>{{ $store.getters.getUserById(s.userId).nickname }}
                </v-chip>
            </transition>
        </span>
    </span>
</template>

<script>
  export default {
    name: 'scratch-typing',
    computed: {
      speaking: function () { return this.$store.getters.currentChannel.speaking }
    }
  }
</script>

<style scoped>
  .slide-fade-enter-active {
    transition: all .1s ease;
  }
  .slide-fade-leave-active {
    transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for <2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
