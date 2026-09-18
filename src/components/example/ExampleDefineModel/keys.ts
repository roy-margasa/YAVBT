import type { InjectionKey, Ref } from 'vue';

// Symbol() will create a unique... symbol.
// This will safe guard if there's higher ancestor have same key name for Provide
export const fooCounterKey: InjectionKey<Ref<number>> = Symbol('fooCounter');
export const barCounterKey: InjectionKey<Ref<number>> = Symbol('barCounter');
