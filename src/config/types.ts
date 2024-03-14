import type { RuleEntry } from '@antfu/eslint-define-config'

export interface Rule {
  /** 规则名称 */
  name: string
  /** 规则配置 */
  value: RuleEntry
  /** 规则描述 */
  description: string
  /** 理由 */
  reason: string
  /** 错误示例 */
  badExample: string
  /** 正确示例 */
  goodExample: string
  /** 是否可修复 */
  fixable: boolean
}
