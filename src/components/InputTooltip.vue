<template>
  <ToolTip v-show="showTool" ref="tooltip">
    <ToolTipContent>
      <ToolTipItem
        v-for="(link, index) of linkTypes"
        :key="link.name"
        @click="linkClicked(index)"
      >
        <Icon :icon="link.icon" />
        <TooltipText>{{ link.text }}</TooltipText>
      </ToolTipItem>
    </ToolTipContent>
  </ToolTip>
</template>

<script>
import { styled } from '@egoist/vue-emotion';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const ToolTip = styled('div')`
  position: absolute;
  left: -2%;
  top: -50%;
  background: white;
  border-radius: 12px;
  min-width: 150px;
  transform: translateX(-100%);
`;

const ToolTipContent = styled('div')`
  overflow: hidden;
  border-radius: 12px;

  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateX(100%) translateY(-50%);
    border: 5px solid transparent;
    border-left-color: white;
  }
`;

const ToolTipItem = styled('div')`
  padding: 7px;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background: #f0f2f6;
  }
`;

const TooltipText = styled('p')`
  margin: 0;
  margin-left: 5px;
  font-size: 0.9rem;
`;

const Icon = styled(FontAwesomeIcon)`
  color: #494c53;
  font-size: 0.9rem;
  width: 16px;
  height: 16px;
`;

export default {
  name: 'InputTooltip',
  props: ['showTool', 'linkTypes', 'linkClicked'],
  // eslint-disable-next-line object-curly-newline
  components: { ToolTip, ToolTipContent, ToolTipItem, TooltipText, Icon },
};
</script>
