# Learn VueJs by compare with ReactJs (TaskBoard)

## React vs Vue

- pass props -> pass props
- pass function and callback -> pass function and emit
- useState -> ref, reactive (only for complex object)
- useEffect -> watch

## 核心差异

React & Vue 的核心差异在于对待数据的方式: JSON vs Object

React: 不可变数据 + Virtual DOM + Fiber 调度
Vue: 依赖追踪 + 精准组件更新 + 基于 Proxy 的响应式系统 (JavaScript Object 自身的特性)

## Fix build error

- Tailwind CSS v3
- use tailwind.config.mjs not .js
