import { TransitionGroup, computed, defineComponent, h, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import type { Theme } from 'vitepress'
import { useRoute } from 'vitepress'
import TeekTheme, { TkThemeEnhance } from 'vitepress-theme-teek'
import { TkVpContainer } from 'vitepress-theme-teek'
import {
  NolebaseEnhancedReadabilitiesMenu,
  NolebaseEnhancedReadabilitiesScreenMenu
} from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import 'virtual:group-icons.css'
import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css'
import 'vitepress-theme-teek/theme-chalk/tk-catalogue-page.css'
import './style.css'

type ArraylistModule = {
  name: string
  path: string
}

const ARRAYLIST_COOKIE = 'jc_arraylist_modules'
const ARRAYLIST_VISIBLE_COOKIE = 'jc_arraylist_visible'
const ARRAYLIST_MAX_ITEMS = 10
const arraylistModules = ref<ArraylistModule[]>([])
const arraylistVisible = ref(true)
let measureContext: CanvasRenderingContext2D | undefined

const getCookieValue = (name: string) => {
  if (typeof document === 'undefined') return ''

  const cookie = document.cookie
    .split('; ')
    .find((item) => item.startsWith(`${name}=`))

  return cookie ? decodeURIComponent(cookie.slice(name.length + 1)) : ''
}

const setCookieValue = (name: string, value: string, days = 365) => {
  if (typeof document === 'undefined') return

  const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString()
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`
}

const loadStoredModules = (): ArraylistModule[] => {
  const raw = getCookieValue(ARRAYLIST_COOKIE)
  if (!raw) return []

  try {
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []

    return parsed
      .filter((item): item is ArraylistModule => {
        return Boolean(
          item &&
            typeof item === 'object' &&
            typeof item.name === 'string' &&
            typeof item.path === 'string' &&
            item.name &&
            item.path.startsWith('/modules/')
        )
      })
      .slice(-ARRAYLIST_MAX_ITEMS)
  } catch {
    return []
  }
}

const getModuleFromPath = (path: string): ArraylistModule | undefined => {
  const normalizedPath = path.replace(/\.html$/, '').replace(/\/$/, '')
  const match = normalizedPath.match(/^\/modules\/([^/]+)$/)
  if (!match || match[1] === 'index') return undefined

  return {
    name: decodeURIComponent(match[1]),
    path: `/modules/${match[1]}`
  }
}

const persistArraylistModules = () => {
  setCookieValue(ARRAYLIST_COOKIE, JSON.stringify(arraylistModules.value))
}

const persistArraylistVisibility = () => {
  setCookieValue(ARRAYLIST_VISIBLE_COOKIE, arraylistVisible.value ? '1' : '0')
}

const toggleArraylistVisibility = () => {
  arraylistVisible.value = !arraylistVisible.value
  persistArraylistVisibility()
}

const getMeasureContext = () => {
  if (measureContext || typeof document === 'undefined') return measureContext

  measureContext = document.createElement('canvas').getContext('2d') ?? undefined
  if (measureContext) {
    measureContext.font =
      '700 14px "Inter", "Segoe UI", system-ui, -apple-system, BlinkMacSystemFont, sans-serif'
  }
  return measureContext
}

const getModuleDisplayWidth = (name: string) => {
  const context = getMeasureContext()
  return Math.ceil(context?.measureText(name).width ?? name.length * 8)
}

const JcArraylistToggle = defineComponent({
  name: 'JcArraylistToggle',
  setup() {
    return () =>
      h(
        'button',
        {
          type: 'button',
          class: [
            'jc-arraylist-page-toggle',
            {
              'is-active': arraylistVisible.value
            }
          ],
          'aria-pressed': String(arraylistVisible.value),
          onClick: toggleArraylistVisibility
        },
        [
          h('span', { class: 'jc-arraylist-page-toggle-text' }, 'Arraylist'),
          h('span', { class: 'jc-arraylist-page-toggle-track' }, [
            h('span', { class: 'jc-arraylist-page-toggle-thumb' })
          ])
        ]
      )
  }
})

const JackalVisualEffects = defineComponent({
  name: 'JackalVisualEffects',
  setup() {
    const route = useRoute()
    let navFrame: HTMLDivElement | undefined
    let activeNavItem: Element | undefined
    let hideFrameTimer: ReturnType<typeof window.setTimeout> | undefined
    const heroTargetsSelector = '.VPHero .name, .VPHero .text, .VPHero .tagline'

    const sortedModules = computed(() => {
      return [...arraylistModules.value].sort((a, b) => getModuleDisplayWidth(b.name) - getModuleDisplayWidth(a.name))
    })

    const visitCurrentModule = () => {
      const moduleInfo = getModuleFromPath(route.path)
      if (!moduleInfo) return

      const nextModules = arraylistModules.value.filter((item) => item.name !== moduleInfo.name)
      nextModules.push(moduleInfo)
      arraylistModules.value = nextModules.slice(-ARRAYLIST_MAX_ITEMS)
      persistArraylistModules()
    }

    const moveNavFrame = (target: Element) => {
      if (!navFrame) return

      const rect = target.getBoundingClientRect()
      navFrame.style.setProperty('--jc-nav-x', `${rect.left}px`)
      navFrame.style.setProperty('--jc-nav-y', `${rect.top}px`)
      navFrame.style.setProperty('--jc-nav-w', `${rect.width}px`)
      navFrame.style.setProperty('--jc-nav-h', `${rect.height}px`)
      navFrame.classList.add('is-visible')
    }

    const hideNavFrame = () => {
      activeNavItem = undefined
      navFrame?.classList.remove('is-visible')
    }

    const findNavItem = (eventTarget: EventTarget | null) => {
      if (!(eventTarget instanceof Element)) return undefined
      if (!eventTarget.closest('.VPNavBarMenu')) return undefined

      return eventTarget.closest(
        '.VPNavBarMenuLink, .VPNavBarMenuGroup, .VPNavBarMenu .VPLink, .VPNavBarMenu > .item'
      )
    }

    const onPointerOver = (event: PointerEvent) => {
      const navItem = findNavItem(event.target)
      if (!navItem) return

      if (hideFrameTimer) window.clearTimeout(hideFrameTimer)
      activeNavItem = navItem
      moveNavFrame(navItem)
    }

    const onPointerOut = (event: PointerEvent) => {
      if (!(event.relatedTarget instanceof Element) || !event.relatedTarget.closest('.VPNavBarMenu')) {
        hideFrameTimer = window.setTimeout(hideNavFrame, 180)
      }
    }

    const onWindowChange = () => {
      if (activeNavItem) moveNavFrame(activeNavItem)
    }

    const disableHeroLight = () => {
      document.querySelector<HTMLElement>('.VPHero')?.classList.remove('jc-hero-highlight-active')
    }

    const updateHeroLight = (event: PointerEvent) => {
      const hero = document.querySelector<HTMLElement>('.VPHero')
      if (!hero) return

      const heroRect = hero.getBoundingClientRect()
      const isInsideHero =
        event.clientX >= heroRect.left &&
        event.clientX <= heroRect.right &&
        event.clientY >= heroRect.top &&
        event.clientY <= heroRect.bottom

      if (!isInsideHero) {
        disableHeroLight()
        return
      }

      hero.classList.add('jc-hero-highlight-active')
      document.querySelectorAll<HTMLElement>(heroTargetsSelector).forEach((target) => {
        const rect = target.getBoundingClientRect()
        target.style.setProperty('--jc-highlight-x', `${event.clientX - rect.left}px`)
        target.style.setProperty('--jc-highlight-y', `${event.clientY - rect.top}px`)
      })
    }

    onMounted(() => {
      arraylistModules.value = loadStoredModules()
      arraylistVisible.value = getCookieValue(ARRAYLIST_VISIBLE_COOKIE) !== '0'
      visitCurrentModule()

      navFrame = document.createElement('div')
      navFrame.className = 'jc-nav-hover-frame'
      document.body.append(navFrame)

      document.addEventListener('pointerover', onPointerOver)
      document.addEventListener('pointerout', onPointerOut)
      window.addEventListener('resize', onWindowChange)
      window.addEventListener('scroll', onWindowChange, { passive: true })
      document.addEventListener('pointermove', updateHeroLight, { passive: true })
      document.addEventListener('pointerleave', disableHeroLight)

    })

    onUnmounted(() => {
      document.removeEventListener('pointerover', onPointerOver)
      document.removeEventListener('pointerout', onPointerOut)
      window.removeEventListener('resize', onWindowChange)
      window.removeEventListener('scroll', onWindowChange)
      document.removeEventListener('pointermove', updateHeroLight)
      document.removeEventListener('pointerleave', disableHeroLight)
      navFrame?.remove()
      if (hideFrameTimer) window.clearTimeout(hideFrameTimer)
    })

    watch(
      () => route.path,
      async () => {
        hideNavFrame()
        disableHeroLight()
        await nextTick()
        visitCurrentModule()
      }
    )

    return () =>
      h(
        'aside',
        {
          class: [
            'jc-arraylist',
            {
              'is-visible': arraylistVisible.value && sortedModules.value.length > 0
            }
          ],
          'aria-label': '最近浏览的模块'
        },
        [
          h(
            TransitionGroup,
            {
              name: 'jc-arraylist-item',
              tag: 'div',
              class: 'jc-arraylist-inner'
            },
            () =>
              sortedModules.value.map((moduleInfo, index) =>
                h(
                  'a',
                  {
                    key: moduleInfo.name,
                    class: 'jc-arraylist-row',
                    href: moduleInfo.path,
                    style: {
                      '--jc-arraylist-index': index,
                      '--jc-arraylist-width': `${Math.max(88, getModuleDisplayWidth(moduleInfo.name) + 22)}px`
                    }
                  },
                  [
                    h('span', { class: 'jc-arraylist-text' }, moduleInfo.name),
                    h('span', { class: 'jc-arraylist-bar' })
                  ]
                )
              )
          )
        ]
      )
  }
})

export default {
  extends: TeekTheme,
  Layout: () => h(TeekTheme.Layout, null, {
    'layout-top': () => h(JackalVisualEffects),
    'nav-bar-content-after': () => [h(TkThemeEnhance), h(NolebaseEnhancedReadabilitiesMenu)],
    'nav-screen-content-after': () => h(NolebaseEnhancedReadabilitiesScreenMenu)
  }),
  async enhanceApp(ctx) {
    await TeekTheme.enhanceApp?.(ctx)
    // 注册 TkVpContainer 组件
    ctx.app.component('TkVpContainer', TkVpContainer)
    ctx.app.component('JcArraylistToggle', JcArraylistToggle)
  }
} satisfies Theme
