import { expect, test } from 'vitest'
import * as Rx from 'rxjs'

import { add2 } from 'P1'

test('1 + 1', () => expect(add2(1, 1)).toBe(2))

test('Rx', () => Rx.of(1).subscribe(x => expect(x).toBe(1)))
