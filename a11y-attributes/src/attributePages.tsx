import type { ComponentType } from 'react'
import AriaDescribedByPage from './pages/AriaDescribedByPage'
import AriaExpanded from './pages/AriaExpanded'
import AriaHiddenPage from './pages/AriaHiddenPage'
import AriaLabelPage from './pages/AriaLabelPage'
import AreaLabelledByPage from './pages/AreaLabelledByPage'

export type AttributePage = {
  path: string
  label: string
  component: ComponentType
}

export const attributePages: AttributePage[] = [
  {
    path: '/aria-label',
    label: 'aria-label',
    component: AriaLabelPage,
  },
  {
    path: '/aria-labelledby',
    label: 'aria-labelledby',
    component: AreaLabelledByPage,
  },
  {
    path: '/aria-hidden',
    label: 'aria-hidden',
    component: AriaHiddenPage,
  },
  {
    path: '/aria-describedby',
    label: 'aria-describedby',
    component: AriaDescribedByPage,
  },
  {
    path: '/aria-expanded',
    label: 'aria-expanded',
    component: AriaExpanded,
  },
]
