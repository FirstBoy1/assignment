<template>
  <div class="custom-input-container">
    <div class="custom-input">
      <input-box
        :show="!isEdit"
        :icon="linkTypes[selectedLink].icon"
        :onClick="toggleTool"
      />

      <div class="input-container">
        <input
          class="input"
          :type="linkTypes[selectedLink].type"
          :placeholder="linkTypes[selectedLink].placeholder"
          :pattern="linkTypes[selectedLink].pattern || ''"
          v-model="value"
          ref="input"
        />
        <div class="input-mirror" v-if="!isEdit" @click.stop="mirrorClick" />
      </div>

      <input-box
        :show="isEdit"
        :boxClass="'box-orange'"
        :onClick="checkClick"
        :icon="'check'"
      />

      <input-box :show="isEdit" :onClick="cancelInput" :icon="'times'" />

      <input-box
        :boxClass="'box-white'"
        :show="!!value.length && !isEdit"
        :icon="'trash'"
        :onClick="deleteClick"
      />

      <input-box :show="!isEdit" :icon="'external-link-alt'" />
    </div>

    <!-- Tooltip -->
    <input-tooltip
      :showTool="showTool"
      :linkTypes="linkTypes"
      :linkClicked="linkClicked"
      ref="tooltip"
    />
  </div>
</template>

<script>
import InputTooltip from './InputTooltip.vue';
import InputBox from './InputBox.vue';

export default {
  name: 'CustomInput',
  components: { InputTooltip, InputBox },
  data() {
    return {
      showTool: false,
      isEdit: false,
      value: '',
      selectedLink: 0,
      linkTypes: [
        {
          icon: 'envelope',
          text: 'Link to Email',
          name: 'email',
          type: 'email',
          placeholder: 'Email',
        },
        {
          icon: 'copy',
          text: 'Link to Page',
          name: 'page',
          type: 'url',
          placeholder: 'Page',
        },
        {
          icon: 'mobile-alt',
          text: 'Link to Phone',
          name: 'phone',
          type: 'tel',
          placeholder: 'Phone',
          pattern: '0[0-9]{10}',
        },
      ],
    };
  },
  mounted() {
    document.addEventListener('mousedown', this.listener);
    document.addEventListener('touchstart', this.listener);
  },
  unmounted() {
    document.removeEventListener('mousedown', this.listener);
    document.removeEventListener('touchstart', this.listener);
  },
  methods: {
    listener(event) {
      if (
        // eslint-disable-next-line operator-linebreak
        !this.$refs.tooltip.$refs.tooltip ||
        this.$refs.tooltip.$refs.tooltip.contains(event.target)
      ) {
        return;
      }
      this.showTool = false;
    },
    mirrorClick() {
      this.isEdit = true;
      this.$refs.input.focus();
    },
    cancelInput() {
      this.value = '';
      this.isEdit = false;
    },
    linkClicked(link) {
      this.selectedLink = link;
      this.showTool = false;
    },
    toggleTool() {
      this.showTool = !this.showTool;
    },
    checkClick() {
      this.isEdit = !this.isEdit;
    },
    deleteClick() {
      this.value = '';
    },
  },
};
</script>

<style scoped>
.custom-input-container {
  position: relative;
}

.input-container {
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;
}

.input-mirror {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  cursor: pointer;
}

.custom-input {
  width: 250px;
  height: 40px;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #bcc2cb;
  position: relative;
}

.input {
  border: 0;
  outline: none;
  padding: 10px;
}
</style>
