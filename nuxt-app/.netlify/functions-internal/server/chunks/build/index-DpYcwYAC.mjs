import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))} data-v-86e8d6c0><section class="hero" data-v-86e8d6c0><p class="tag" data-v-86e8d6c0>Portfolio \u2022 Nuxt</p><h1 data-v-86e8d6c0>Nguyen Ho Thien Thanh</h1><p class="lead" data-v-86e8d6c0> Full-Cycle Solutions Associate at Skill-Wanderer (03/2026 - now), focused on web product delivery with a full-cycle mindset across frontend and backend. </p><div class="actions" data-v-86e8d6c0><a href="#career" data-v-86e8d6c0>View career path</a><a href="#contact" class="ghost" data-v-86e8d6c0>Contact</a></div></section><section id="career" class="grid" data-v-86e8d6c0><article class="card" data-v-86e8d6c0><h2 data-v-86e8d6c0>Current Role \u2022 Skill-Wanderer</h2><p data-v-86e8d6c0> As a Full-Cycle Solutions Associate, I build web solutions and collaborate closely with product, design, and engineering teams. </p></article><article class="card" data-v-86e8d6c0><h2 data-v-86e8d6c0>Core Skill \u2022 Frontend</h2><p data-v-86e8d6c0> ReactJS, web UI architecture, responsive implementation, and user experience optimization. </p></article><article class="card" data-v-86e8d6c0><h2 data-v-86e8d6c0>Core Skill \u2022 Backend</h2><p data-v-86e8d6c0> Node.js service development, API integration, and frontend-backend orchestration in full-cycle workflows. </p></article></section><section class="meta" data-v-86e8d6c0><h3 data-v-86e8d6c0>Career Snapshot</h3><ul data-v-86e8d6c0><li data-v-86e8d6c0>Name: Nguyen Ho Thien Thanh</li><li data-v-86e8d6c0>Title: Full-Cycle Solutions Associate</li><li data-v-86e8d6c0>Company: Skill-Wanderer (03/2026 - now)</li></ul></section><section id="contact" class="contact" data-v-86e8d6c0><p data-v-86e8d6c0><strong data-v-86e8d6c0>Email:</strong> thanh-nguyen@skill-wanderer.com</p><p data-v-86e8d6c0><strong data-v-86e8d6c0>Stack:</strong> Web Development, ReactJS, Node.js, Frontend, Backend</p></section></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-86e8d6c0"]]);

export { index as default };
//# sourceMappingURL=index-DpYcwYAC.mjs.map
