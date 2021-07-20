<template>
  <div class="tooltip" v-show="showTool" ref="tooltip">
    <div class="tooltip-content">
      <div
        class="tooltip-item"
        v-for="(link, index) of linkTypes"
        :key="link.name"
        @click="linkClicked(index)"
      >
        <font-awesome-icon class="icon" :icon="link.icon" />
        <p class="tooltip-text">{{ link.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputTooltip',
  props: ['showTool', 'linkTypes', 'linkClicked'],
};
</script>

<style>
.tooltip {
  position: absolute;
  left: -2%;
  top: -50%;
  background: white;
  border-radius: 12px;
  min-width: 150px;
  transform: translateX(-100%);
}

.tooltip-content {
  overflow: hidden;
  border-radius: 12px;
}

/* TODO: */
.tooltip::after {
  content: '';
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateX(100%) translateY(-50%);
  border: 5px solid transparent;
  border-left-color: white;
}

.tooltip-item {
  padding: 7px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.tooltip-item:hover {
  background: #bcc2cb;
}

.tooltip-text {
  margin: 0;
  margin-left: 5px;
  font-size: 0.9rem;
}

.icon {
  color: #494c53;
  font-size: 0.9rem;
  width: 16px;
  height: 16px;
}
</style>
