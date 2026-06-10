import { defineComponent, h, nextTick, onMounted, onUnmounted, watch } from 'vue'
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

const JackalVisualEffects = defineComponent({
  name: 'JackalVisualEffects',
  setup() {
    const route = useRoute()
    let navFrame: HTMLDivElement | undefined
    let activeNavItem: Element | undefined
    let hideFrameTimer: ReturnType<typeof window.setTimeout> | undefined
    const heroTargetsSelector = '.VPHero .name, .VPHero .text, .VPHero .tagline'

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

    const syncHeroTextData = () => {
      document.querySelectorAll<HTMLElement>(heroTargetsSelector).forEach((target) => {
        target.dataset.jcText = target.textContent?.trim() ?? ''
      })
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

    const disableHeroLight = () => {
      document.querySelector<HTMLElement>('.VPHero')?.classList.remove('jc-hero-highlight-active')
    }

    onMounted(() => {
      navFrame = document.createElement('div')
      navFrame.className = 'jc-nav-hover-frame'
      document.body.append(navFrame)
      syncHeroTextData()

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
        syncHeroTextData()
      }
    )

    return () => null
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
  }
} satisfies Theme
