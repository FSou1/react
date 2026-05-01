import type { ComponentType } from 'react'
import AriaBusy from './pages/AriaBusy'
import AriaControls from './pages/AriaControls'
import AriaCurrent from './pages/AriaCurrent'
import AriaDescribedByPage from './pages/AriaDescribedByPage'
import AriaDisabled from './pages/AriaDisabled'
import AriaExpanded from './pages/AriaExpanded'
import AriaHiddenPage from './pages/AriaHiddenPage'
import AriaInvalid from './pages/AriaInvalid'
import AriaLabelPage from './pages/AriaLabelPage'
import AriaLive from './pages/AriaLive'
import AriaPressed from './pages/AriaPressed'
import AriaRequired from './pages/AriaRequired'
import AriaSelected from './pages/AriaSelected'
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
  {
    path: '/aria-controls',
    label: 'aria-controls',
    component: AriaControls,
  },
  {
    path: '/aria-invalid',
    label: 'aria-invalid',
    component: AriaInvalid,
  },
  {
    path: '/aria-required',
    label: 'aria-required',
    component: AriaRequired,
  },
  {
    path: '/aria-disabled',
    label: 'aria-disabled',
    component: AriaDisabled,
  },
  {
    path: '/aria-pressed',
    label: 'aria-pressed',
    component: AriaPressed,
  },
  {
    path: '/aria-live',
    label: 'aria-live',
    component: AriaLive,
  },
  {
    path: '/aria-current',
    label: 'aria-current',
    component: AriaCurrent,
  },
  {
    path: '/aria-selected',
    label: 'aria-selected',
    component: AriaSelected,
  },
  {
    path: '/aria-busy',
    label: 'aria-busy',
    component: AriaBusy,
  },
]
