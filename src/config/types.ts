import type { RuleEntry } from '@antfu/eslint-define-config'

export interface Rule {
  /** 规则名称 */
  name: string
  /** 规则配置 */
  value: RuleEntry
  /** 规则描述 */
  description: string
  reason: string
  badExample: string
  goodExample: string
  fixable: boolean
  extendsBaseRule: string
  requiresTypeChecking: boolean
}
