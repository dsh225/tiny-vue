<template>
  <div>
    <div class="ti-f-r ti-pt48 ti-pl48 ti-pr48">
      <component id="doc_wrap" :is="docCmp" class="ti-w0 ti-fi-1" />
      <!-- 目录列表 TODO: 需要锚点组件配置整改，处理id中的特殊字符 -->
      <!-- <div v-if="anchorLinks.length > 0" class="docs-page-anchor catalog w128 sticky top32 ml24">
        <tiny-anchor :is-affix="true" :links="anchorLinks"> </tiny-anchor>
      </div> -->
    </div>
    <div id="footer"></div>
  </div>
</template>

<script setup>
import { ref, nextTick, watch, onMounted, computed, shallowRef } from 'vue'
import { Anchor as TinyAnchor } from '@opentiny/vue'
import { $t2 } from '@/tools'
import docMDs, { transformIdSelector } from './docConfig.js'
import { router } from '@/router.js'

const isOpen = import.meta.env.VITE_BUILD_TARGET === 'open'
const openDocMap = {
  'envpreparation': 'envpreparation-open'
}

let currPage = ''
const catalog = ref([])
const docCmp = shallowRef(null)

async function loadPage() {
  let suffix = $t2('', '-en')
  const docKey = router.currentRoute.value.params.docId
  const docName = isOpen && openDocMap[docKey] ? openDocMap[docKey] : docKey

  currPage = `${docName}${suffix}.md`
  docCmp.value = (await docMDs?.[currPage]?.())?.default

  nextTick(() => {
    if (document.getElementById('doc_wrap')) {
      catalog.value = Array.from(document.getElementById('doc_wrap').querySelectorAll('h2[id],h3[id]')).map((h3) => ({
        id: h3.id,
        text: h3.dataset.label || decodeURIComponent(h3.id)
      }))
    }
  })
}

watch([() => router.currentRoute.value, () => router.currentRoute.value.params.docId], () => {
  loadPage()
})

onMounted(() => {
  loadPage()
  const common = new window.TDCommon(['#footer'], {})
  common.renderFooter()
})

const anchorLinks = computed(() => {
  return catalog.value.map((cat) => ({
    key: cat.id,
    title: cat.text,
    link: `#${transformIdSelector(cat.id)}`
  }))
})
</script>

<style lang="less">
.docs-page-anchor {
  .tiny-anchor__affix {
    overflow-y: auto;
    max-height: 80vh;
  }
  .tiny-anchor-link {
    margin-bottom: 10px;
    max-width: 150px;
    font-size: 12px;
    a {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
.catalog {
  height: calc(100vh - 150px);
  overflow: hidden;
}

.catalog:hover {
  overflow-y: auto;
}

.catalog::-webkit-scrollbar {
  width: 10px;
  background-color: #f5f5f5;
}

.catalog::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #c1c1c1;
}

@media (max-width: 1279px) {
  .catalog {
    display: none;
  }
}
</style>
