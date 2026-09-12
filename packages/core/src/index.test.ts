import { describe, expect, it } from 'vitest'
import { mimify } from './index'

describe('mimify', () => {
  it('is defined', () => {
    expect(mimify).toBeTypeOf('function')
  })
})
