import type { Rule } from '../types'

const rules: Rule[] = [
  {
    name: 'accessor-pairs',
    value: ['error', { setWithoutGet: true, getWithoutSet: false }],
    description: 'setter 必须有对应的 getter，getter 可以没有对应的 setter',
    reason: '',
    badExample: '<span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <mark class="eslint-error" data-tip="Getter is not present for setter &amp;apos;bar&amp;apos;.&lt;br/&gt;&lt;span class=\'eslint-error-rule-id\'&gt;eslint(accessor-pairs)&lt;/span&gt;"><span class="token keyword">set</span> <span class="token function">bar</span></mark><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>barValue <span class="token operator">=</span> <span class="token string">\'bar \'</span> <span class="token operator">+</span> value<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>',
    goodExample: '<span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token keyword">set</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>barValue <span class="token operator">=</span> <span class="token string">\'bar \'</span> <span class="token operator">+</span> value<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token keyword">get</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>barValue<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> bar <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token keyword">get</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>fooValue<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>',
    fixable: false,
    extendsBaseRule: '',
    requiresTypeChecking: false,
  },
]

export default rules
